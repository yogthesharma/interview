# Multi-tenant FastAPI — tenant in dependency vs middleware?

**Target time:** 45–60 seconds

---

## Talk track

> **Goal:** Acme Corp never sees Beta Inc's data — **every query scoped by `employer_id`** (or tenant id).
>
> **Preferred: dependency**
> - `get_current_user` → `User` with `employer_id`
> - Services take `employer_id` as **required arg** — not optional
> - Repos: `WHERE employer_id = :tid` on every read/write
>
> **Middleware** — resolve tenant from subdomain/JWT early, stash on `request.state.tenant_id` — OK for cross-cutting, but **still enforce in service layer** (don't trust state alone).
>
> **Anti-patterns:**
> - Client sends `employer_id` in body without matching auth
> - Global "current tenant" variable
>
> **Same as** `auth/11` multi-tenant — FastAPI wiring via Depends.

---

## Code

```python
from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> User:
    return auth_service.require_user(db, token)

@router.get("/applications/{id}", response_model=ApplicationOut)
def get_application(
    id: str,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return application_service.get(db, employer_id=user.employer_id, app_id=id)

# repository — always scoped
def get(db: Session, employer_id: int, app_id: str) -> Application | None:
    return db.execute(
        select(Application).where(Application.employer_id == employer_id, Application.id == app_id)
    ).scalar_one_or_none()
```

---

## Avoid

- `Application.query.get(id)` without tenant filter
