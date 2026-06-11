# How do you test FastAPI — `TestClient`, async tests?

**Target time:** 30 seconds

---

## Talk track

> **`httpx.AsyncClient` + `ASGITransport(app=app)`** — full stack without live server.
>
> Override dependencies for DB/auth. `pytest-asyncio` for async tests. See `python-async/09`.

---

## Code

```python
async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:
    r = await client.get("/health")
    assert r.status_code == 200
```
