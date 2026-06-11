# Application context vs request context — what's the difference?

**Target time:** 30 seconds

---

## Talk track

> **Application context** — `current_app`, `g` tied to **app instance** — needed for extensions, config, DB outside a request (CLI, tests).
>
> **Request context** — `request`, `session` — **one per HTTP request**.
>
> Flask pushes/pops these automatically per request; `app.app_context()` / `test_request_context()` in tests.

---

## Code

```python
# Outside request — need app context
with app.app_context():
    db.create_all()

# In request — both available
@app.get("/me")
def me():
    user_agent = request.headers.get("User-Agent")
    return {"app": current_app.name}
```
