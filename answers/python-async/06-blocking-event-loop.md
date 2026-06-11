# Common bug: blocking the event loop with sync DB or `requests`?

**Target time:** 45 seconds

---

## Talk track

> **Symptom:** FastAPI/async app handles one slow request → **entire server feels stuck** — latency spikes across all endpoints.
>
> **Cause:** `async def` route calls **blocking** code on the event loop thread:
> - `requests.get()` — sync HTTP
> - Sync SQLAlchemy `session.query()` 
> - `time.sleep()`, heavy pure-Python CPU loop
>
> **Fixes (in order of preference):**
> 1. **Async library** — `httpx.AsyncClient`, `asyncpg`, SQLAlchemy 2 async session
> 2. **`def` route** (not `async def`) — FastAPI runs sync routes in thread pool
> 3. **`run_in_executor`** for isolated blocking calls
> 4. **Separate worker** for slow jobs — return 202 + job id
>
> **Debug:** log event loop lag; load test with concurrent requests; one blocking call shows up as global p99 blow-up.
>
> **Node parallel:** same as calling `fs.readFileSync` in every Express handler on one thread.

---

## Code

```python
# BAD — blocks loop
async def bad():
    import requests
    return requests.get("https://api.example.com/quotes").json()

# GOOD — async HTTP
async def good():
    async with httpx.AsyncClient() as client:
        r = await client.get("https://api.example.com/quotes")
        return r.json()

# OK — sync route, thread pool
@app.get("/quotes")
def quotes_sync():
    return requests.get("https://api.example.com/quotes").json()
```

---

## Avoid

- Mixing `async def` with sync ORM everywhere without thread pool — classic FastAPI footgun
