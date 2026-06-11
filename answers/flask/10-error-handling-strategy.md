# Error handling strategy — never leak stack traces to clients?

**Target time:** 45 seconds

---

## Talk track

> **API responses** — consistent JSON envelope: `{ "error": { "code", "message" } }` — never raw Python traceback to clients.
>
> **Layers:**
> 1. **Domain errors** — `ApplicationNotFound`, `InvalidTransition` → map to 404/409/422
> 2. **Validation** — Marshmallow/Pydantic `ValidationError` → 400 with field details
> 3. **Unexpected** — catch-all handler → log full exception server-side (Sentry), return **500** generic message
>
> **`DEBUG=True`** — Werkzeug debugger only locally; **never** in prod.
>
> **Handlers:** `@app.errorhandler(DomainError)` + `@app.errorhandler(Exception)`.
>
> **Re-raise in dev** if you want — but prod must be safe by default.

---

## Code

```python
from marshmallow import ValidationError

class DomainError(Exception):
    def __init__(self, message: str, code: str = "domain_error"):
        self.message = message
        self.code = code

@app.errorhandler(DomainError)
def handle_domain(err: DomainError):
    return jsonify({"error": {"code": err.code, "message": err.message}}), 409

@app.errorhandler(ValidationError)
def handle_validation(err: ValidationError):
    return jsonify({"error": {"code": "validation_error", "details": err.messages}}), 400

@app.errorhandler(Exception)
def handle_unexpected(err: Exception):
    logger.exception("unhandled_error", request_id=getattr(g, "request_id", None))
    return jsonify({"error": {"code": "internal_error", "message": "Something went wrong"}}), 500
```

---

## Avoid

- Returning `str(err)` from caught `Exception` — may leak SQL or internal paths
