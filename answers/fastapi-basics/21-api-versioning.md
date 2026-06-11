# How do you version a FastAPI API?

**Target time:** 30 seconds

---

## Talk track

> **URL prefix** `/api/v1` — clearest for B2B partners. Router per version.
>
> Header versioning optional. Deprecation headers on old routes. See `api/10`, `node/14`.

---

## Code

```python
app.include_router(v1_router, prefix="/api/v1")
app.include_router(v2_router, prefix="/api/v2")
```
