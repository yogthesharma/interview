# Lifespan context manager — startup/shutdown hooks?

**Target time:** 30–45 seconds

---

## Talk track

> **Lifespan** (replaces deprecated `@app.on_event("startup")`) — async context manager run **once per app process**:
> - **Startup** — before `yield`: open shared resources
> - **Shutdown** — after `yield`: close connections cleanly
>
> **Use for:**
> - Shared **`httpx.AsyncClient`** (connection pooling to carrier APIs)
> - Redis / DB engine warm-up
> - Background scheduler start (careful in multi-worker — prefer Celery)
>
> **Store on `app.state`** — `app.state.http = client`; access in dependencies via `Request`.
>
> **Per-worker:** Gunicorn with 4 Uvicorn workers = 4 lifespan runs — design idempotent startup.

---

## Code

```python
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.http = httpx.AsyncClient(base_url=settings.CARRIER_API_URL, timeout=10.0)
    yield
    await app.state.http.aclose()

app = FastAPI(lifespan=lifespan)

def get_http(request: Request) -> httpx.AsyncClient:
    return request.app.state.http

@router.get("/quotes/{id}")
async def get_quote(id: str, client: httpx.AsyncClient = Depends(get_http)):
    r = await client.get(f"/quotes/{id}")
    r.raise_for_status()
    return r.json()
```

---

## Avoid

- Creating new `AsyncClient` per request when lifespan client works
