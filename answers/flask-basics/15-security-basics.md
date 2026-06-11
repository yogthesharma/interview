# Flask security basics — CSRF, secret key, session hardening?

**Target time:** 30–45 seconds

---

## Talk track

> **`SECRET_KEY`** — required for sessions/signing; strong random from env.
>
> **CSRF** — protect cookie-session form POSTs with Flask-WTF token; less issue for Bearer JWT APIs.
>
> **Cookies:** HttpOnly, Secure, SameSite. **HTTPS** in prod. Validate all input.

---

## Code

```python
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_SAMESITE="Lax",
)
```
