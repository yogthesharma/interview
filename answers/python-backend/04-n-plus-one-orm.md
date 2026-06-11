# N+1 queries in ORM — how do you spot and fix?

**Target time:** 45–60 seconds

---

## Talk track

> **N+1** — 1 query loads N parents, then **N queries** for each child relation. ORM lazy-load makes this easy to accidentally trigger.
>
> **Spot:**
> - SQLAlchemy `echo=True` locally or logging
> - APM — query count per endpoint spikes with list size
> - Code smell — loop over rows accessing `app.employee.name` without eager load
>
> **Fixes:**
> 1. **`selectinload` / `joinedload`** — eager load in one or two queries
> 2. **`select` with JOIN** — explicit for reports
> 3. **Batch `IN` query** — load all employee ids at once
>
> **Same footgun** as Prisma without `include` — I watch this in code review.

---

## Code

```python
from sqlalchemy.orm import selectinload

# BAD — lazy load in loop → N+1
apps = db.execute(select(Application).where(Application.employer_id == eid)).scalars().all()
for app in apps:
    print(app.employee.email)  # query per app

# GOOD — selectinload
stmt = (
    select(Application)
    .where(Application.employer_id == eid)
    .options(selectinload(Application.employee))
)
apps = db.execute(stmt).scalars().all()
```

---

## Avoid

- Returning ORM graphs to templates/API without planning load strategy
