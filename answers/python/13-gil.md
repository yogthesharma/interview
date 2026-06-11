# What is the GIL? How does it affect CPU-bound vs I/O-bound work?

**Target time:** 45–60 seconds

---

## Talk track

> The **Global Interpreter Lock (GIL)** is a mutex in CPython that lets **only one thread execute Python bytecode at a time** in a process.
>
> **I/O-bound work** (HTTP, DB, disk) — threads often fine: threads **release the GIL** while waiting on I/O, so concurrency still helps.
>
> **CPU-bound work** (heavy parsing, image crunch, big loops) — **threads don't parallelize CPU** on CPython; use:
> - **`multiprocessing`** — separate processes, separate GILs
> - **`concurrent.futures.ProcessPoolExecutor`**
> - Push work to **C extensions**, **Rust**, or a **worker queue** (Celery)
>
> **Async (`asyncio`)** — single-threaded concurrency for **many I/O waits**; still not for CPU-bound without `run_in_executor`.
>
> **Interview line:** *"Flask/FastAPI APIs are usually I/O-bound — async + connection pools matter more than the GIL. For CPU-heavy jobs I'd offload to workers or processes."*

---

## Code

```python
import asyncio
import httpx
from concurrent.futures import ProcessPoolExecutor

# I/O-bound — async shines
async def fetch_all(urls: list[str]):
    async with httpx.AsyncClient() as client:
        tasks = [client.get(u) for u in urls]
        return await asyncio.gather(*tasks)

# CPU-bound — processes, not threads
def crunch(data: bytes) -> int:
    return sum(data)  # placeholder

with ProcessPoolExecutor() as pool:
    result = pool.map(crunch, chunks)
```

---

## Avoid

- "Python can't do concurrency" — it can; model matters
- Claiming GIL is gone — it still exists in CPython 3.12+ (with ongoing improvements, not removal for all workloads)
