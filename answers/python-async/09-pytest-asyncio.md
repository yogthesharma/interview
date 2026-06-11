# How do you test async Python code — `pytest-asyncio`?

**Target time:** 30–45 seconds

---

## Talk track

> **`pytest-asyncio`** — run `async def test_*` functions on the event loop.
>
> **Setup:** `pip install pytest pytest-asyncio`; mark tests `@pytest.mark.asyncio` or set `asyncio_mode = auto` in `pytest.ini`.
>
> **What to test:**
> - Service functions with mocked HTTP (respx / httpx mock transport)
> - Timeouts and cancellation
> - Semaphore / concurrency behavior with controlled delays
>
> **FastAPI:** `httpx.AsyncClient(app=app, base_url="http://test")` with **`ASGITransport`** — full integration without live server.
>
> **Avoid:** real network in unit tests; sleep-based flakiness — use `asyncio` test clocks or short mocks.

---

## Code

```python
# pytest.ini
# asyncio_mode = auto

import pytest
import httpx
from httpx import ASGITransport

@pytest.mark.asyncio
async def test_fetch_user():
    result = await fetch_user(1)
    assert result["id"] == 1

@pytest.mark.asyncio
async def test_api_health(app):
    transport = ASGITransport(app=app)
    async with httpx.AsyncClient(transport=transport, base_url="http://test") as client:
        r = await client.get("/health")
    assert r.status_code == 200
```

---

## Avoid

- Calling `asyncio.run()` inside every test manually — let pytest-asyncio manage the loop
