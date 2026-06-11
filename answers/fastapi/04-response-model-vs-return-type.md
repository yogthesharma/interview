# Response model vs return type — filtering sensitive fields?

**Target time:** 30–45 seconds

---

## Talk track

> **`response_model=ApplicationOut`** — FastAPI **serializes and filters** output to that schema — fields not on the model never reach the client even if your ORM object has them.
>
> **Return type annotation alone** — documents intent; **`response_model` is stronger** for stripping `password_hash`, internal flags, tenant secrets.
>
> **Patterns:**
> - **Separate models** — `UserCreate`, `UserOut`, `UserInDB` — never return DB model directly
> - **`model_config = from_attributes`** — map SQLAlchemy → Pydantic
> - **`response_model_exclude_unset`** — omit optional fields not set
>
> **Multiple status codes** — `responses={404: {...}}` in decorator for OpenAPI.
>
> **Security hireable signal:** explicit outbound schema, not `return user.__dict__`.

---

## Code

```python
class UserOut(BaseModel):
    id: int
    email: str
    # no password_hash, no internal_role

@router.get("/users/me", response_model=UserOut)
def me(user: User = Depends(get_current_user)):
    return user  # ORM → filtered to UserOut

# BAD — leaks fields
# @router.get("/users/me")
# def me(user: User = Depends(get_current_user)):
#     return user.__dict__
```

---

## Avoid

- Returning raw SQLAlchemy models without `response_model` on public APIs
