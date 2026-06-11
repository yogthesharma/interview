# Sync vs async SQLAlchemy with FastAPI?

**Target time:** 45 seconds

---

## Talk track

> **Sync SQLAlchemy** — `Session`, psycopg2/pg8000 — blocking calls. Fine with **`def` routes** (thread pool) or Flask/Gunicorn.
>
> **Async SQLAlchemy 2.0** — `AsyncSession`, `await session.execute(select(...))`, **asyncpg** driver — fits `async def` FastAPI routes end-to-end.
>
> **Don't mix** — `async def` + sync `Session` blocks the event loop (see `fastapi/13`).
>
> **Migration path:** keep sync repos, use `def` routes first; adopt async session when worth connection concurrency gains.
>
> **Engines:** separate `create_engine` vs `create_async_engine`; async URL `postgresql+asyncpg://...`

---

## Code

```python
# Sync
def get_user(db: Session, user_id: int) -> User | None:
    return db.execute(select(User).where(User.id == user_id)).scalar_one_or_none()

# Async
async def get_user_async(db: AsyncSession, user_id: int) -> User | None:
    result = await db.execute(select(User).where(User.id == user_id))
    return result.scalar_one_or_none()

async def get_db_async():
    async with AsyncSessionLocal() as session:
        yield session
```

---

## Avoid

- Two different session patterns in one codebase without team convention
