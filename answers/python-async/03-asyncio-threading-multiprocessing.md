# When to use `asyncio` vs `threading` vs `multiprocessing`?

**Target time:** 45–60 seconds

---

## Talk track

> **Pick by workload:**
>
> **`asyncio`** — **many concurrent I/O** operations (HTTP APIs, websockets, async DB). Low overhead per connection; needs async-compatible libraries.
>
> **`threading`** — **blocking I/O** with sync libraries (`requests`, old DB drivers), or parallel waits where thread count is modest. Watch shared mutable state — use locks.
>
> **`multiprocessing`** — **CPU-bound** Python work — image processing, heavy parsing, crunching. **Separate processes** bypass GIL. Higher memory/startup cost.
>
> **Decision tree:**
> 1. CPU-bound? → **multiprocessing** or external worker (Celery)
> 2. I/O-bound + async stack? → **asyncio**
> 3. I/O-bound + sync-only libs? → **threads** or `run_in_executor`
>
> **FastAPI default:** async endpoints + async HTTP client; sync SQLAlchemy in `def` route or executor.

---

## Code

```python
import asyncio
import httpx
from concurrent.futures import ProcessPoolExecutor

# asyncio — FastAPI-style fan-out
async def aggregate_quotes(app_ids: list[str]):
    async with httpx.AsyncClient() as client:
        return await asyncio.gather(*[fetch_quote(client, id) for id in app_ids])

# multiprocessing — CPU
from concurrent.futures import ProcessPoolExecutor
with ProcessPoolExecutor() as pool:
    scores = pool.map(score_application, big_batch)
```

---

## Avoid

- Threads for CPU-heavy loops on CPython expecting linear speedup
