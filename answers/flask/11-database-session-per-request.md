# Database session per request — commit/rollback pattern?

**Target time:** 45 seconds

---

## Talk track

> **SQLAlchemy + Flask-SQLAlchemy** — scoped session tied to app context; **one logical session per request**.
>
> **Pattern:**
> - Reads — query in service/repo; no commit needed
> - Writes — service mutates models, **`db.session.commit()`** at end of successful operation
> - **Rollback** on error — `db.session.rollback()` in exception handler or teardown
> - **`teardown_appcontext`** — `db.session.remove()` returns connection to pool
>
> **Don't** commit in every route — commit at **service boundary** when unit of work completes.
>
> **Transactions:** multi-step business op → single commit; on failure rollback entire unit.
>
> **Pool sizing:** align with Gunicorn `workers × threads` — pool too small = timeouts; too large = DB overload.

---

## Code

```python
from datetime import datetime

def submit_application(app_id: str, user_id: int) -> Application:
    app = application_repo.get_for_update(app_id, user_id)
    if app.status != "draft":
        raise DomainError("already submitted")
    app.status = "submitted"
    app.submitted_at = datetime.utcnow()
    audit_repo.log(app_id, "submitted", user_id)
    db.session.commit()
    return app

@app.teardown_appcontext
def shutdown_session(exception=None):
    if exception:
        db.session.rollback()
    db.session.remove()
```

---

## Avoid

- Long-running request holding an open transaction — locks rows
