# `async`/`await` in Python — how is it different from threads?

**Target time:** 45–60 seconds

---

## Talk track

> **`async`/`await`** — **cooperative concurrency** on usually **one thread**: coroutines yield control while **awaiting I/O**; the **event loop** schedules the next ready task. No preemptive thread switching for your Python code.
>
> **Threads** — **preemptive** (OS scheduler): multiple threads, GIL limits parallel **CPU** bytecode but I/O releases GIL. Good for blocking libraries you can't async-ify.
>
> | | async/await | threads |
> |---|-------------|---------|
> | Model | Single-threaded event loop | OS threads |
> | Best for | Many concurrent I/O waits | Blocking I/O libs, legacy SDKs |
> | CPU parallel | No (use processes) | Limited by GIL |
> | Complexity | Must not block the loop | Race conditions on shared state |
>
> **Node parallel:** `async/await` in Python ≈ same idea as JS — don't block the loop.
>
> **Interview line:** *"I use async when the whole stack supports it — httpx, async SQLAlchemy. Threads when wrapping sync-only libraries; processes for CPU work."*

---

## Code

```python
import asyncio

# async — cooperative
async def fetch_user(user_id: int) -> dict:
    await asyncio.sleep(0.1)  # stands in for I/O
    return {"id": user_id}

async def main():
    results = await asyncio.gather(*(fetch_user(i) for i in range(100)))
    return results

# threading — preemptive (simplified)
# from concurrent.futures import ThreadPoolExecutor
# with ThreadPoolExecutor(max_workers=10) as pool:
#     pool.map(sync_fetch, user_ids)
```

---

## Avoid

- "Async is always faster" — only wins when I/O-bound and non-blocking stack
