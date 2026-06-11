# Thread-local `g` and when to avoid abusing it?

**Target time:** 30 seconds

---

## Talk track

> **`flask.g`** — **request-scoped storage** on the current context. Survives for one request; cleared on teardown. Under Gunicorn sync workers, it's **thread-local**.
>
> **Good uses:**
> - `g.current_user` after auth middleware
> - `g.request_id` for logging
> - `g.db_session` if not using global `db.session` pattern
>
> **Avoid abusing `g`:**
> - **Business logic state** that should be explicit function args
> - **Passing data across many layers** invisibly — hard to test and trace
> - **Storing large objects** — memory per request
> - **Async/gevent** without understanding context — stick to explicit `Depends` in FastAPI for greenfield
>
> **Interview line:** *"`g` for cross-cutting request metadata, not a junk drawer for domain models."*

---

## Code

```python
from functools import wraps

def login_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization", "")
        g.current_user = auth_service.verify(token)  # OK on g
        return fn(*args, **kwargs)
    return wrapper

@bp.get("/me")
@login_required
def me():
    return {"id": g.current_user.id, "email": g.current_user.email}

# Prefer explicit in services when testing:
# application_service.submit(user=current_user, app_id=id)
```

---

## Avoid

- `g.application = ...` mutated in five places — pass `Application` as argument
