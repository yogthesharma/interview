# Session management — one session per request, why?

**Target time:** 30–45 seconds

---

## Talk track

> **One `Session` per HTTP request** — standard for Flask/FastAPI + SQLAlchemy:
> - Isolates transaction scope — one unit of work per API call
> - Prevents cross-request state leaks on a shared session
> - Returns connection to **pool** on `close()` in teardown
>
> **Pattern:** `yield` dependency — open session, pass to route/service, `finally: close()`.
>
> **Not thread-safe** — don't share session across threads; each request/thread gets its own.
>
> **Long-lived sessions** — anti-pattern (stale data, connection hogging).
>
> **Same idea** as Prisma `$transaction` per request or per service method in Node.

---

## Code

```python
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/applications")
def create(body: ApplicationCreate, db: Session = Depends(get_db)):
    return application_service.create(db, body)
```

---

## Avoid

- Global `db = SessionLocal()` used by all requests
