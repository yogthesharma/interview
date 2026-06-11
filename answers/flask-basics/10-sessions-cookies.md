# How do you handle sessions and cookies in Flask?

**Target time:** 30–45 seconds

---

## Talk track

> **Flask sessions** — signed cookie (needs `SECRET_KEY`) or server-side session in **Redis**.
>
> **Cookies:** set `HttpOnly`, `Secure`, `SameSite` for browser security.
>
> **APIs:** prefer JWT Bearer over session cookies unless same-site browser app.

---

## Code

```python
from flask import session

@app.post("/login")
def login():
    session["user_id"] = user.id  # signed client cookie by default
    return "", 204
```
