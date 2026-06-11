# Exception handling — bare `except` vs specific exceptions?

**Target time:** 30–45 seconds

---

## Talk track

> **Catch specific exceptions** you can handle: `ValueError`, `KeyError`, `HTTPException`, DB integrity errors.
>
> **Order matters** — narrow before broad; `except Exception` before `except ValueError` never runs for ValueError if Exception is first... actually ValueError is subclass of Exception, so put **specific first**.
>
> **`except Exception`** — OK at **app boundary** (log + map to 500), not around every line.
>
> **Never bare `except:`** — catches `KeyboardInterrupt`, `SystemExit` — masks bugs.
>
> **Patterns:**
> - **EAFP** (Easier to Ask Forgiveness) — `try: x = d[k]` vs **LBYL** `if k in d`
> - **Re-raise** with `raise` or `raise CustomError(...) from e` to preserve chain
> - **Custom exceptions** for domain: `QuoteNotFound`, `InvalidApplication`
>
> **FastAPI:** let framework handle `HTTPException`; global handler for unexpected errors.

---

## Code

```python
def get_status(app: dict) -> str:
    try:
        return app["status"]
    except KeyError as e:
        raise ValueError("application missing status") from e

# App boundary
try:
    result = service.submit(app_id)
except ValidationError as e:
    return {"error": e.errors()}, 422
except Exception:
    logger.exception("submit failed", extra={"app_id": app_id})
    return {"error": "internal"}, 500

# Bad
# try:
#     ...
# except:
#     pass
```

---

## Avoid

- Empty `except: pass` — silent failures in prod
