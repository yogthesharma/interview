# What is WSGI? How does Flask fit in?

**Target time:** 30 seconds

---

## Talk track

> **WSGI** — Python spec between **web server** (Gunicorn) and **application** (Flask callable).
>
> Server calls `app(environ, start_response)`; Flask handles routing and returns response iterable.
>
> **Dev:** `flask run`. **Prod:** Gunicorn/uWSGI — never dev server in production.
>
> See `flask/07`.

---

## Code

```bash
gunicorn "app:create_app()" -w 4 -b 0.0.0.0:8000
```
