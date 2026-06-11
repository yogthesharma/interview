# Design consistent JSON error responses across an app

**Target time:** 15 min live  
**Pattern:** one envelope + exception handlers

---

## Interview approach

> Every error returns the same shape: `{ "error": { "code", "message", "details?" } }`. Pydantic 422 gets mapped too. Unexpected errors log server-side, return generic 500.

---

## Reference solution

```python
# errors.py
from pydantic import BaseModel

class ErrorBody(BaseModel):
    code: str
    message: str
    details: dict | list | None = None

class ErrorResponse(BaseModel):
    error: ErrorBody

# FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

@app.exception_handler(RequestValidationError)
async def validation_handler(_: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content={"error": {"code": "validation_error", "message": "Invalid request", "details": exc.errors()}},
    )

@app.exception_handler(DomainError)
async def domain_handler(_: Request, exc: DomainError):
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": {"code": exc.code, "message": exc.message}},
    )

@app.exception_handler(Exception)
async def unhandled(_: Request, exc: Exception):
    logger.exception("unhandled")
    return JSONResponse(
        status_code=500,
        content={"error": {"code": "internal_error", "message": "Something went wrong"}},
    )

# Flask — same envelope in register_error_handlers(app)
```

**Status code map:**

| code | HTTP |
|------|------|
| `validation_error` | 422 |
| `not_found` | 404 |
| `forbidden` | 403 |
| `conflict` | 409 |
| `internal_error` | 500 |

---

## Done when

- [ ] Validation, domain, and 500 use same `error` key
- [ ] No stack traces in JSON body
- [ ] OpenAPI documents error shape on key routes (optional bonus)
