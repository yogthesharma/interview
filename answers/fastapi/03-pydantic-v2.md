# Pydantic v2 — validators, `model_validate`, `Field` constraints?

**Target time:** 45–60 seconds

---

## Talk track

> **Pydantic v2** — Rust-core validation, faster than v1. Powers FastAPI request bodies, query params, and response models.
>
> **`BaseModel`** — declare fields with types; invalid input → **422** with field errors automatically.
>
> **`Field(...)`** — constraints: `min_length`, `ge`, `pattern`, `description` (shows in OpenAPI).
>
> **`model_validate(obj)`** — parse dict **or** ORM object (`from_attributes=True` in `model_config`).
>
> **Validators (v2):**
> - `@field_validator` — single field
> - `@model_validator(mode="after")` — cross-field rules
>
> **Interview line:** *"Pydantic is the contract at the HTTP boundary — same role as Zod in my Node APIs."*

---

## Code

```python
from pydantic import BaseModel, Field, field_validator, model_validator

class ApplicationCreate(BaseModel):
    employee_email: str = Field(..., pattern=r"^[^@]+@[^@]+\.[^@]+$")
    coverage_amount: int = Field(..., ge=10_000, le=5_000_000)

    @field_validator("employee_email")
    @classmethod
    def normalize_email(cls, v: str) -> str:
        return v.strip().lower()

    @model_validator(mode="after")
    def check_spouse_fields(self):
        if self.coverage_amount > 1_000_000 and not getattr(self, "spouse_name", None):
            raise ValueError("spouse_name required for high coverage")
        return self

class ApplicationOut(BaseModel):
    id: int
    status: str
    model_config = {"from_attributes": True}
```

---

## Avoid

- Validating in the endpoint with manual `if` when Pydantic should own the shape
