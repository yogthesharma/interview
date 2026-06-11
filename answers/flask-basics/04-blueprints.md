# What are Flask blueprints? How do you structure a medium project?

**Target time:** 30–45 seconds

---

## Talk track

> **Blueprint** = grouped routes/templates/static under a name — register with `url_prefix`.
>
> **Structure:** `blueprints/applications/`, `blueprints/employers/`, shared `services/`, `models/`.
>
> Split by **domain**, not by HTTP verb. See `flask/03`.

---

## Code

```python
bp = Blueprint("applications", __name__)

@bp.get("/<id>")
def get_one(id): ...

app.register_blueprint(bp, url_prefix="/api/v1/applications")
```
