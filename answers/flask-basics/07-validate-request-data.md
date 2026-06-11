# How do you validate request data in Flask?

**Target time:** 30–45 seconds

---

## Talk track

> Don't trust `request.get_json()` blindly. Use **Marshmallow**, **Pydantic**, or **Flask-WTF** for forms.
>
> Return **422** with field errors on validation failure. Keep schemas separate from routes.

---

## Code

```python
from marshmallow import Schema, fields, ValidationError

class CreateSchema(Schema):
    email = fields.Email(required=True)
    amount = fields.Int(required=True)

try:
    data = CreateSchema().load(request.get_json() or {})
except ValidationError as e:
    return jsonify({"error": {"details": e.messages}}), 422
```
