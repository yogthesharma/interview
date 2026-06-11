# Running blocking code in async apps — `run_in_executor`?

**Target time:** 30–45 seconds

---

## Talk track

> **Problem:** sync blocking call inside `async def` **freezes the event loop** — all requests stall.
>
> **Fix:** offload to a **thread pool** via `loop.run_in_executor(None, func, *args)` — `None` = default `ThreadPoolExecutor`.
>
> **When:**
> - Legacy sync DB driver in async FastAPI route
> - File I/O, CPU-ish work that's short
> - Wrapping third-party SDK with no async API
>
> **Better long-term:** native async driver (`asyncpg`, `httpx.AsyncClient`) or **sync `def` route** in FastAPI (runs in thread pool automatically).
>
> **Don't** executor for heavy CPU at scale — use **Celery/process pool**.

---

## Code

```python
import asyncio
from functools import partial

def sync_query(user_id: int) -> dict:
    # blocking SQLAlchemy session — legacy
    return db.session.query(User).get(user_id).to_dict()

async def get_user(user_id: int) -> dict:
    loop = asyncio.get_running_loop()
    return await loop.run_in_executor(None, partial(sync_query, user_id))

# FastAPI shortcut — sync def endpoint
@app.get("/users/{id}")
def get_user_sync(id: int):
    return sync_query(id)  # Starlette runs sync routes in threadpool
```

---

## Avoid

- `time.sleep(5)` in async route — use `await asyncio.sleep(5)` or executor
