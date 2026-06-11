# Blueprint boundaries — how do you split by domain?

**Target time:** 30–45 seconds

---

## Talk track

> **Blueprint** = mini-app: routes + optional templates/static, registered on the main app with a URL prefix.
>
> **Split by business domain**, not by HTTP verb:
> - `applications` — CRUD, submit, status
> - `employers` — tenant admin
> - `quotes` — carrier integration surface
> - `health` — `/health`, `/ready` for k8s
>
> **Each blueprint folder:** `routes.py`, optional `schemas.py` — services stay **shared** in `services/`, not duplicated per blueprint.
>
> **Rules:**
> - One blueprint shouldn't import another's routes — go through **services**
> - Shared auth → `before_request` on blueprint or decorator
> - Version in URL: `/api/v1/...` at register time
>
> **Scale signal:** blueprints map to team boundaries later — same module can become a service extract.

---

## Code

```python
# blueprints/applications/__init__.py
from flask import Blueprint
bp = Blueprint("applications", __name__)
from . import routes  # noqa: E402,F401

# app/__init__.py
app.register_blueprint(applications_bp, url_prefix="/api/v1/applications")
app.register_blueprint(employers_bp, url_prefix="/api/v1/employers")
app.register_blueprint(health_bp)  # /health at root
```

---

## Avoid

- God blueprint `api.py` with every route — defeats the purpose
