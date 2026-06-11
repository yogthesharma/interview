# SQLAlchemy with FastAPI — session management patterns?

**Target time:** 30 seconds

---

## Talk track

> **`get_db` yield dependency** — one session per request, close in `finally`.
>
> Commit in service layer. Sync session + `def` route OR async session + `async def`.
>
> See `python-backend/01`–`03`, `fastapi/02`.

---

## Code

```python
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```
