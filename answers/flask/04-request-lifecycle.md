# Flask request lifecycle — from WSGI to response?

**Target time:** 45–60 seconds

---

## Talk track

> **WSGI** — web server (Gunicorn) calls `app(environ, start_response)` with CGI-style env dict.
>
> **Flask flow:**
> 1. **WSGI server** receives HTTP connection
> 2. **Flask app** builds **Request** context + **App** context
> 3. **URL matching** — find view function for path/method
> 4. **`before_request`** hooks (blueprint + app) — auth, request id
> 5. **View** runs — returns value or Response
> 6. **`after_request`** — headers, CORS, logging
> 7. **Teardown** — `teardown_request` / `teardown_appcontext` — **close DB session**
> 8. Response bytes to client
>
> **Contexts:** `request`, `session`, `g` are **request-local** (thread-local under sync WSGI).
>
> **Errors:** unhandled exception → registered error handlers → JSON 500, not HTML stack trace in APIs.

---

## Code

```python
from uuid import uuid4

@app.before_request
def attach_request_id():
    g.request_id = request.headers.get("X-Request-Id", str(uuid4()))

@app.after_request
def add_request_id_header(response):
    if hasattr(g, "request_id"):
        response.headers["X-Request-Id"] = g.request_id
    return response

@app.teardown_appcontext
def shutdown_session(exception=None):
    db.session.remove()  # return connection to pool
```

---

## Avoid

- Forgetting teardown — leaked DB connections under load
