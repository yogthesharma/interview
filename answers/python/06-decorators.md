# Decorators — how do they work? Write a simple one?

**Target time:** 45–60 seconds

---

## Talk track

> A **decorator** is syntax sugar: `@decorator` above a function means `func = decorator(func)`.
>
> A decorator is a **callable that takes a function and returns a function** (or callable) — usually wrapping extra behavior: logging, timing, auth, retries, caching.
>
> **`functools.wraps`** — copy `__name__`, `__doc__` to the wrapper so debugging and OpenAPI don't show `wrapper`.
>
> **Parametrized decorator** — outer function takes config, returns inner decorator.
>
> **Real backends:** Flask `@app.route`, FastAPI `Depends`, pytest fixtures — same idea.

---

## Code

```python
import functools
import time

def timed(fn):
    @functools.wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        try:
            return fn(*args, **kwargs)
        finally:
            print(f"{fn.__name__} took {time.perf_counter() - start:.3f}s")
    return wrapper

def retry(times: int):
    def decorator(fn):
        @functools.wraps(fn)
        def wrapper(*args, **kwargs):
            last_err = None
            for _ in range(times):
                try:
                    return fn(*args, **kwargs)
                except Exception as e:
                    last_err = e
            raise last_err
        return wrapper
    return decorator

@timed
@retry(times=3)
def fetch_quote(app_id: str):
    ...
```

---

## Avoid

- Decorators that swallow exceptions silently without re-raising
