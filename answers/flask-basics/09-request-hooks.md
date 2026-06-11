# `before_request`, `after_request`, and teardown hooks — when use each?

**Target time:** 30 seconds

---

## Talk track

> **`before_request`** — auth, request ID, load user before view.
>
> **`after_request`** — headers (CORS, X-Request-Id), response logging.
>
> **`teardown_request` / `teardown_appcontext`** — **close DB session** even on error.
>
> See `flask/04`.

---

## Code

```python
@app.before_request
def load_user():
    g.user = auth.from_token(request.headers.get("Authorization"))

@app.teardown_appcontext
def close_db(exception=None):
    db.session.remove()
```
