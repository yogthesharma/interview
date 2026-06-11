# `asyncio` event loop — basics?

**Target time:** 30–45 seconds

---

## Talk track

> The **event loop** is the scheduler: runs coroutines, dispatches **callbacks** when I/O completes (sockets, timers), resumes tasks at `await`.
>
> **One loop per thread** — don't call blocking code on it.
>
> **Entry points:**
> - Scripts: `asyncio.run(main())` — creates loop, runs `main`, closes cleanly
> - FastAPI/Uvicorn: framework owns the loop
> - `asyncio.create_task(coro)` — fire-and-forget concurrent work on same loop
>
> **Mental model:** queue of ready tasks → run until `await` → register I/O wait → pick next task.
>
> **`await`** — suspend **this** coroutine, not the whole program.

---

## Code

```python
import asyncio

async def poll_status(job_id: str):
    while True:
        status = await fetch_status(job_id)  # yields to loop during I/O
        if status == "done":
            return status
        await asyncio.sleep(1)

async def main():
    task = asyncio.create_task(poll_status("job-1"))
    await asyncio.sleep(0.5)
    # other work can run here while poll_status waits
    return await task

if __name__ == "__main__":
    asyncio.run(main())
```

---

## Avoid

- `asyncio.get_event_loop()` legacy patterns in new code — prefer `asyncio.run`
