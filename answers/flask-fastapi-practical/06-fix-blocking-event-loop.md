# Fix an endpoint that blocks the event loop — refactor to async or executor

**Target time:** 10–15 min live  
**Pattern:** identify blocking call → pick fix

---

## Interview approach

> First I'd **name the blocker** — sync `requests`, sync SQLAlchemy, `time.sleep`. Then fix: **(A)** `httpx.AsyncClient` + async DB, **(B)** change to `def` route for sync ORM, or **(C)** `run_in_executor` as bridge.

---

## Broken (intentional)

```python
import requests

@router.get("/quotes/{app_id}")
async def get_quote(app_id: str):
    # BAD — blocks event loop
    r = requests.get(f"{CARRIER_URL}/quotes/{app_id}", timeout=30)
    return r.json()
```

## Fix A — async HTTP (preferred)

```python
@router.get("/quotes/{app_id}")
async def get_quote(app_id: str, client: httpx.AsyncClient = Depends(get_http)):
    r = await client.get(f"/quotes/{app_id}")
    r.raise_for_status()
    return r.json()
```

## Fix B — sync route + sync ORM

```python
@router.get("/quotes/{app_id}")
def get_quote(app_id: str, db: Session = Depends(get_db)):
    return quote_service.get_sync(db, app_id)  # thread pool runs this
```

## Fix C — executor bridge

```python
@router.get("/quotes/{app_id}")
async def get_quote(app_id: str):
    loop = asyncio.get_running_loop()
    return await loop.run_in_executor(None, quote_service.fetch_sync, app_id)
```

---

## Done when

- [ ] Explained why `async def` + `requests` is bad
- [ ] Implemented one correct fix
- [ ] Mentioned load-test symptom (global p99 spike)
