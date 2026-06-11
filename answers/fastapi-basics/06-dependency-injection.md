# Dependency injection in FastAPI — how and why?

**Target time:** 30–45 seconds

---

## Talk track

> **`Depends(fn)`** — FastAPI resolves dependencies before handler: DB session, current user, settings.
>
> **Testable** — override in `app.dependency_overrides`. See `fastapi/02`.

---

## Code

```python
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/me")
def me(user: User = Depends(get_current_user)):
    return user
```
