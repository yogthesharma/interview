# Middleware in FastAPI — examples (CORS, logging, timing)?

**Target time:** 30 seconds

---

## Talk track

> `app.add_middleware(CORSMiddleware, ...)` — CORS, custom request ID, timing.
>
> Last added = outermost on request. See `fastapi/07`.

---

## Code

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_methods=["*"],
)
```
