# Build a Flask blueprint with CRUD + Marshmallow or Pydantic validation

**Target time:** 25–35 min live  
**Pattern:** thin routes, schema validation, service layer

---

## Interview approach

> I'll create a **blueprint** for `applications`, use **Marshmallow** (or Pydantic if they allow) for request validation, keep SQL in a **repository**, and return consistent JSON status codes — 201 create, 404 not found, 422 validation error.

**Order:** schema → repo → service → routes → register blueprint.

---

## Reference solution

```python
# schemas/application.py
from marshmallow import Schema, fields, validate

class ApplicationCreateSchema(Schema):
    employee_email = fields.Email(required=True)
    coverage_amount = fields.Int(required=True, validate=validate.Range(min=10_000))

class ApplicationOutSchema(Schema):
    id = fields.Str()
    status = fields.Str()
    employee_email = fields.Email()

# blueprints/applications/__init__.py
from flask import Blueprint
bp = Blueprint("applications", __name__)

# blueprints/applications/routes.py
from flask import request, jsonify
from marshmallow import ValidationError

@bp.post("")
def create():
    try:
        data = ApplicationCreateSchema().load(request.get_json() or {})
    except ValidationError as err:
        return jsonify({"error": {"code": "validation_error", "details": err.messages}}), 422
    app = application_service.create(g.current_user.employer_id, data)
    return ApplicationOutSchema().dump(app), 201

@bp.get("/<app_id>")
def get_one(app_id: str):
    app = application_service.get(g.current_user.employer_id, app_id)
    if not app:
        return jsonify({"error": {"code": "not_found", "message": "Application not found"}}), 404
    return ApplicationOutSchema().dump(app), 200

@bp.patch("/<app_id>")
def update(app_id: str):
    data = ApplicationUpdateSchema().load(request.get_json() or {}, partial=True)
    app = application_service.update(g.current_user.employer_id, app_id, data)
    return ApplicationOutSchema().dump(app), 200

@bp.delete("/<app_id>")
def delete(app_id: str):
    application_service.delete(g.current_user.employer_id, app_id)
    return "", 204
```

---

## Done when

- [ ] Blueprint registered with `/api/v1/applications` prefix
- [ ] POST validates body → 422 on bad input
- [ ] GET by id returns 404 when missing or wrong tenant
- [ ] No raw SQL in route handlers
