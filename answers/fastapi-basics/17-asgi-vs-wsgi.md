# What is ASGI? How is it different from WSGI?

**Target time:** 30 seconds

---

## Talk track

> **WSGI** — synchronous callable; one request at a time per worker thread model.
>
> **ASGI** — async protocol; supports **WebSockets**, long-lived connections, `async`/`await` in app.
>
> FastAPI/Starlette = ASGI. Flask = WSGI (async via Quart or mounting).

---

## Code

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```
