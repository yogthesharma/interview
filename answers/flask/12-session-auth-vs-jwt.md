# Flask-Login / session auth vs JWT for APIs?

**Target time:** 45–60 seconds

---

## Talk track

> **Pick by client:**
>
> **Server session + cookie (Flask-Login)** — browser-facing app, same origin or BFF. Session id in **HttpOnly** cookie; server stores session in Redis/DB. **Easy revoke** on logout. CSRF protection needed for cookie forms.
>
> **JWT (Bearer token)** — SPAs with API on different domain, mobile apps, **B2B partner APIs**. Stateless verify with signature; **revocation harder** — short TTL + refresh token or blocklist.
>
> | | Session cookie | JWT |
> |---|----------------|-----|
> | Client | Browser | SPA / mobile / API |
> | Revoke | Delete session | Short expiry / refresh rotation |
> | Storage | Server-side | Client holds token |
>
> **Flask APIs for JSON SPA:** often JWT or session via secure cookie + `SameSite`. **Multi-tenant:** always include `employer_id` in session claims and **filter every query**.
>
> **Depth:** same tradeoffs I prepped in `auth/02` — Flask is just the framework wiring.

---

## Code

```python
from functools import wraps

# JWT decorator (API)
def require_auth(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization", "").removeprefix("Bearer ")
        g.current_user = auth_service.decode_jwt(token)  # raises → 401
        return fn(*args, **kwargs)
    return wrapper

# Flask-Login (browser)
@login_manager.user_loader
def load_user(user_id: str):
    return User.query.get(int(user_id))
```

---

## Avoid

- JWT in `localStorage` without XSS hardening story
- Trusting client-sent `employer_id` without matching auth claims
