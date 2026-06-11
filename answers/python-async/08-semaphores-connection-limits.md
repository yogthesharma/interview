# Semaphores and connection limits in async services?

**Target time:** 30–45 seconds

---

## Talk track

> **Problem:** `asyncio.gather` on 10,000 URLs → **10,000 concurrent connections** — exhaust file descriptors, overwhelm downstream API, get rate-limited or banned.
>
> **`asyncio.Semaphore(n)`** — at most **n** coroutines in critical section at once. Pattern: `async with sem:` before fetch.
>
> **Also limit at client:** `httpx.Limits(max_connections=100, max_keepalive_connections=20)`.
>
> **Why interviewers care:** async makes it *easy* to spawn too much concurrency — senior engineers **throttle intentionally**.
>
> **Other tools:** `asyncio.Queue` for worker pool pattern; token bucket rate limiter for external APIs.

---

## Code

```python
import asyncio
import httpx

SEM = asyncio.Semaphore(20)  # max 20 in flight

async def fetch_bounded(client: httpx.AsyncClient, url: str) -> str:
    async with SEM:
        r = await client.get(url)
        r.raise_for_status()
        return r.text

async def fetch_many(urls: list[str]) -> list[str]:
    limits = httpx.Limits(max_connections=50, max_keepalive_connections=20)
    async with httpx.AsyncClient(limits=limits, timeout=10.0) as client:
        return await asyncio.gather(*(fetch_bounded(client, u) for u in urls))
```

---

## Avoid

- Unbounded `gather` to production third-party APIs without backoff on 429
