# Raw SQL vs ORM — when do you drop to SQL?

**Target time:** 30–45 seconds

---

## Talk track

> **ORM default** — CRUD, simple filters, maintainable models, Alembic sync. **My default for product code.**
>
> **Raw SQL when:**
> - **Complex reports** — window functions, CTEs, aggregations awkward in ORM
> - **Performance-critical** — tuned query plan, specific index hints
> - **Bulk operations** — `UPDATE ... WHERE`, batch inserts faster than ORM row-by-row
> - **Migrations / one-off backfills**
>
> **In SQLAlchemy:** `text("SELECT ...")` with bound params — **never f-string SQL** (injection).
>
> **Hybrid:** Core `insert()` / `update()` for bulk; ORM for domain objects.
>
> **Interview line:** *"ORM for 90% of app code; SQL for the 10% that needs explain plans and reporting."*

---

## Code

```python
from sqlalchemy import text

def status_counts(db: Session, employer_id: int) -> list[dict]:
    rows = db.execute(
        text("""
            SELECT status, COUNT(*) AS cnt
            FROM applications
            WHERE employer_id = :employer_id
            GROUP BY status
        """),
        {"employer_id": employer_id},
    )
    return [dict(r._mapping) for r in rows]
```

---

## Avoid

- Raw SQL for simple `get by id` — ORM is clearer and tenant-scoped helpers help
