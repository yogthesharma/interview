# Implement FastAPI router with dependency-injected DB session

**Target time:** 15–20 min live  
**Pattern:** `APIRouter` + `Depends(get_db)` + Pydantic models

---

## Interview approach

> I'll add an **`APIRouter`**, wire **`get_db`** yield dependency for session lifecycle, use **Pydantic** for body/response, and keep the route thin — one service call.

---

## Reference solution

```python
# dependencies.py
from sqlalchemy.orm import Session

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# routers/applications.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter(prefix="/applications", tags=["Applications"])

@router.post("", response_model=ApplicationOut, status_code=201)
def create_application(
    body: ApplicationCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return application_service.create(db, user.employer_id, body)

@router.get("/{app_id}", response_model=ApplicationOut)
def get_application(
    app_id: str,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    app = application_service.get(db, user.employer_id, app_id)
    if not app:
        raise HTTPException(status_code=404, detail="Application not found")
    return app

# main.py
app.include_router(applications_router, prefix="/api/v1")
```

---

## Done when

- [ ] Session closed in `finally`
- [ ] `response_model` on outbound types
- [ ] Router included on app with version prefix
