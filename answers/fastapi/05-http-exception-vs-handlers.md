# `HTTPException` vs custom exception handlers vs domain errors?

**Target time:** 45 seconds

---

## Talk track

> **Three layers:**
>
> 1. **`HTTPException`** — quick control flow in routes: `raise HTTPException(404, "not found")`. Fine for simple cases; don't sprinkle everywhere.
>
> 2. **Domain exceptions** — `ApplicationNotFound`, `InvalidStatusTransition` — raised in **services**, no HTTP knowledge. Mapped in handlers → 404/409/422.
>
> 3. **Global handler** — catch `Exception`, log + Sentry, return generic 500 JSON.
>
> **`@app.exception_handler(DomainError)`** — one place for consistent `{ "error": { "code", "message" } }`.
>
> **422** — Pydantic validation (automatic). **Don't** use `HTTPException` for field-level validation.
>
> **Same layering** as Flask `errorhandler` and Fastify `setErrorHandler`.

---

## Code

```python
from fastapi import Request
from fastapi.responses import JSONResponse

class ApplicationNotFound(Exception):
    def __init__(self, app_id: str):
        self.app_id = app_id

@app.exception_handler(ApplicationNotFound)
async def not_found(_: Request, exc: ApplicationNotFound):
    return JSONResponse(
        status_code=404,
        content={"error": {"code": "not_found", "message": f"Application {exc.app_id} not found"}},
    )

@app.exception_handler(Exception)
async def unhandled(_: Request, exc: Exception):
    logger.exception("unhandled")
    return JSONResponse(status_code=500, content={"error": {"code": "internal_error", "message": "Something went wrong"}})

def get_application(db, employer_id: int, app_id: str):
    app = repo.get(db, employer_id, app_id)
    if not app:
        raise ApplicationNotFound(app_id)
    return app
```

---

## Avoid

- `raise HTTPException(500, str(e))` — leaks internals
