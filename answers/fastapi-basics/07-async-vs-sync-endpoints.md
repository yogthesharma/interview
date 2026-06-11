# `async def` vs `def` endpoints — when use sync vs async?

**Target time:** 30 seconds

---

## Talk track

> **`async def`** — use with awaitable I/O (`httpx.AsyncClient`, async DB).
>
> **`def`** — sync code; Starlette runs in **thread pool** — OK for sync SQLAlchemy.
>
> See `fastapi/13`, `python-async/06`.

---

## Avoid

- `async def` + blocking `requests` or sync ORM without executor
