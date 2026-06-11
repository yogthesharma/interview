# `aiohttp` / `httpx` vs `requests` — when prefer over `requests`?

**Target time:** 30–45 seconds

---

## Talk track

> **`requests`** — sync, simple, ubiquitous. **Perfect** for scripts, Celery tasks, Flask sync routes, one-off calls.
>
> **`httpx`** — modern client; **sync and async** API (`httpx.AsyncClient`). My default for **new Python** — familiar API, HTTP/2, good FastAPI ecosystem fit.
>
> **`aiohttp`** — async-first; also does **server** (like aiohttp web). Mature; slightly more boilerplate than httpx for client-only use.
>
> **Rule:**
> - `async def` FastAPI service calling other APIs → **`httpx.AsyncClient`** (reuse one client per app lifespan)
> - Sync Flask/Celery → **`requests`** or `httpx.Client`
> - Never `requests` inside `async def` on the event loop
>
> **Production habits:** connection pooling (`AsyncClient`), timeouts, retries with backoff, don't create new client per request.

---

## Code

```python
import httpx

# Async — FastAPI lifespan
async def create_client():
    async with httpx.AsyncClient(
        base_url="https://api.example.com",
        timeout=10.0,
    ) as client:
        yield client

async def get_quote(client: httpx.AsyncClient, app_id: str):
    r = await client.get(f"/applications/{app_id}/quote")
    r.raise_for_status()
    return r.json()

# Sync — script or Celery
def get_quote_sync(app_id: str):
    with httpx.Client(timeout=10.0) as client:
        return client.get(f"/applications/{app_id}/quote").json()
```

---

## Avoid

- New `AsyncClient()` per request in hot path — TLS handshake overhead
