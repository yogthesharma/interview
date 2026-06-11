# SQLAlchemy 2.0 — `select()`, sessions, `flush` vs `commit`?

**Target time:** 45–60 seconds

---

## Talk track

> **SQLAlchemy 2.0 style** — `select()` + `session.execute()` instead of legacy `session.query()`.
>
> **Session** — unit of work tracking ORM objects. Talks to DB via connection from pool.
>
> **`flush()`** — sends pending SQL to DB **inside current transaction** — IDs generated, constraints checked — but **not committed**. Other transactions may not see changes yet.
>
> **`commit()`** — commits transaction; makes changes durable. **`rollback()`** — undo since last commit.
>
> **Typical write:** mutate objects → `commit()` once at service boundary. Use `flush()` when you need DB-generated id **before** commit in same transaction.
>
> **Read:** `session.execute(select(User).where(User.id == id)).scalar_one_or_none()`

---

## Code

```python
from sqlalchemy import select
from sqlalchemy.orm import Session

def create_application(db: Session, employer_id: int, data: dict) -> Application:
    app = Application(employer_id=employer_id, **data)
    db.add(app)
    db.flush()  # get app.id for child rows in same transaction
    db.add(AuditLog(application_id=app.id, action="created"))
    db.commit()
    db.refresh(app)
    return app

def get_application(db: Session, employer_id: int, app_id: str) -> Application | None:
    stmt = select(Application).where(
        Application.employer_id == employer_id,
        Application.id == app_id,
    )
    return db.execute(stmt).scalar_one_or_none()
```

---

## Avoid

- `commit()` after every `add()` in a loop — slow and breaks atomic units
