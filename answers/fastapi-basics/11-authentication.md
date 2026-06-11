# Authentication in FastAPI — API keys, OAuth2, JWT?

**Target time:** 45 seconds

---

## Talk track

> **HTTPBearer** / **OAuth2PasswordBearer** dependencies decode JWT → user.
>
> **API key** header for service-to-service. See `fastapi/12` multi-tenant, `flask-fastapi-practical/05`.

---

## Code

```python
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    return auth.decode(token)
```
