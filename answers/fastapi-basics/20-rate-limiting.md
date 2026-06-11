# Rate limiting and request validation at scale?

**Target time:** 30 seconds

---

## Talk track

> **Rate limit** at edge (API gateway) or app — Redis sliding window per IP/API key.
>
> **Validation** — Pydantic on every input; reject bad requests early (cheap).
>
> **Slowapi** library or custom middleware. Return **429** with `Retry-After`.

---

## Code

```python
# Concept — Redis INCR + EXPIRE per client key
if not rate_limit_allow(client_id, limit=100, window=60):
    raise HTTPException(429, "Too many requests")
```
