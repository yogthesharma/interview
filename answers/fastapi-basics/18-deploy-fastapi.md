# Deploying FastAPI — Uvicorn, Gunicorn + Uvicorn workers?

**Target time:** 30 seconds

---

## Talk track

> **Uvicorn** — ASGI server. Dev: `uvicorn app:app --reload`.
>
> **Prod:** `gunicorn app:app -k uvicorn.workers.UvicornWorker -w 4` behind proxy.
>
> Docker + health checks + env secrets.

---

## Code

```bash
gunicorn app.main:app -k uvicorn.workers.UvicornWorker -w 4 -b 0.0.0.0:8000
```
