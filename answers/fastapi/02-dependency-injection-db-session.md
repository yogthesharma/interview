# Dependency injection scopes — per-request DB session pattern?

**Target time:** 45 seconds

---

## Talk track

> **`Depends()`** — FastAPI's DI: declare what the route needs; framework resolves and injects. **Testable** — override dependencies in `TestClient`.
>
> **Per-request DB session** — canonical pattern:
> 1. `get_db()` yields a SQLAlchemy `Session`
> 2. Route/service uses session
> 3. **`finally: session.close()`** — return connection to pool
>
> **Yield dependency** = generator — setup before `yield`, teardown after.
>
> **Scopes:**
> - **Per request** — DB session, current user (most common)
> - **App lifespan** — shared `httpx.AsyncClient`, Redis pool (create once in `lifespan`)
> - **Singleton** — `lru_cache` on settings — not per request
>
> **Don't** store session on global — leaks connections across requests.

---

## Code

```python
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> User:
    return auth_service.user_from_token(db, token)

@router.post("/applications", response_model=ApplicationOut)
def create_application(
    body: ApplicationCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return application_service.create(db, user.employer_id, body)
```

---

## Avoid

- One global `Session` for the whole app
