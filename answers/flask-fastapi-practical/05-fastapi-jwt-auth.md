# Add JWT or API-key auth as a FastAPI dependency

**Target time:** 15–20 min live  
**Pattern:** `Depends` + `HTTPBearer` or API key header

---

## Interview approach

> I'll implement **`get_current_user`** as a dependency — extract Bearer token, verify signature/expiry, load user from DB, raise **401** if invalid. Routes add `user: User = Depends(get_current_user)`. For service-to-service, show **API key** header variant.

---

## Reference solution

```python
from fastapi import Depends, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer, APIKeyHeader

oauth2_scheme = HTTPBearer(auto_error=False)
api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)

def get_current_user(
    creds: HTTPAuthorizationCredentials | None = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> User:
    if not creds:
        raise HTTPException(status_code=401, detail="Missing token")
    try:
        payload = jwt.decode(creds.credentials, settings.JWT_SECRET, algorithms=["HS256"])
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = user_repo.get(db, int(payload["sub"]))
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user

def require_api_key(key: str | None = Security(api_key_header)) -> str:
    if not key or key != settings.INTERNAL_API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return key

@router.get("/internal/reconcile")
def reconcile(_: str = Depends(require_api_key), db: Session = Depends(get_db)):
    ...
```

---

## Done when

- [ ] 401 on missing/invalid token
- [ ] User loaded from DB (not trusting JWT claims alone for tenant)
- [ ] At least one protected route demonstrated
