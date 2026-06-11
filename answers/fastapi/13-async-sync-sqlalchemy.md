# Performance — async endpoints with sync SQLAlchemy pitfalls?

**Target time:** 45–60 seconds

---

## Talk track

> **Classic footgun:** `async def` route + **sync SQLAlchemy** `session.query()` → **blocks the event loop** → all requests stall under load.
>
> **Fixes (pick one):**
> 1. **`def` route** (not `async def`) — Starlette runs sync route in **thread pool** (OK for moderate sync ORM)
> 2. **SQLAlchemy 2.0 async** — `AsyncSession`, `await session.execute(select(...))`, asyncpg driver
> 3. **`run_in_executor`** — wrap sync repo calls (bridge pattern)
> 4. **Don't mix** — async route calling sync HTTP (`requests`) — use `httpx.AsyncClient`
>
> **Rule:** if endpoint is `async def`, **every await path** must be non-blocking.
>
> **Measure:** p99 latency under concurrent load — one blocking call shows up globally.
>
> **Depth:** same as `python-async/06` — FastAPI-specific framing.

---

## Code

```python
# OK — sync ORM, sync route → thread pool
@router.get("/applications/{id}")
def get_app(id: str, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return application_service.get(db, user.employer_id, id)

# OK — async stack end-to-end
@router.get("/applications/{id}")
async def get_app(id: str, db: AsyncSession = Depends(get_async_db), user: User = Depends(get_current_user)):
    return await application_service.get_async(db, user.employer_id, id)

# BAD
# @router.get("/applications/{id}")
# async def get_app(..., db: Session = Depends(get_db)):
#     return db.query(Application).get(id)  # blocks loop
```

---

## Avoid

- `async def` everywhere "because FastAPI is async" with sync SQLAlchemy 1.x sessions
