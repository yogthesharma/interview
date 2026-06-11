# Handling DB deadlocks and retries?

**Target time:** 30–45 seconds

---

## Talk track

> **Deadlock** — two transactions wait on each other's locks; DB picks **victim** and aborts one (`40001` serialization failure in Postgres).
>
> **Reduce deadlocks:**
> - Lock rows in **consistent order** (always parent then child)
> - Keep transactions **short** — no HTTP calls inside transaction
> - Right indexes — avoid table scans locking many rows
>
> **Retry:** on deadlock / transient connection error — **exponential backoff**, limited attempts (3–5). SQLAlchemy `session.rollback()` then retry whole transaction.
>
> **Not retryable:** unique violation (unless upsert), check constraint — fix logic.
>
> **Celery:** `autoretry_for=(OperationalError,)`, `retry_backoff=True`.

---

## Code

```python
import time
from sqlalchemy.exc import OperationalError

def run_with_deadlock_retry(db, fn, attempts=3):
    for i in range(attempts):
        try:
            return fn()
        except OperationalError as e:
            if "deadlock" not in str(e).lower() and i == attempts - 1:
                raise
            db.rollback()
            time.sleep(0.05 * (2 ** i))
    raise RuntimeError("exhausted retries")
```

---

## Avoid

- Retrying without `rollback()` — session in broken state
