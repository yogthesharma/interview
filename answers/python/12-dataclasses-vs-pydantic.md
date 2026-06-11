# Dataclasses vs Pydantic models vs plain dicts?

**Target time:** 45–60 seconds

---

## Talk track

> **Plain dict** — flexible, JSON-native, zero ceremony. **Downside:** typos in keys, no IDE help, validation at runtime surprises.
>
> **`@dataclass`** — stdlib **structured records**: `__init__`, `repr`, optional `eq`, frozen for immutability. Great for **internal** domain objects. **No runtime validation** unless you add it.
>
> **Pydantic `BaseModel`** — **validation + parsing** at boundaries: coerce types, reject bad input, JSON schema for OpenAPI. **FastAPI default** for request/response bodies.
>
> | Use | Tool |
> |-----|------|
> | API request/response | **Pydantic** |
> | Internal service DTO | dataclass or Pydantic |
> | Ad-hoc JSON blob | dict until shape stabilizes |
> | DB ORM entity | SQLAlchemy model — separate from API model |
>
> **Pattern:** ORM model → service layer → **Pydantic response model** (don't leak DB shape).

---

## Code

```python
from dataclasses import dataclass
from pydantic import BaseModel, Field

@dataclass(frozen=True)
class QuoteLine:
    plan_id: str
    premium_cents: int

class ApplicationCreate(BaseModel):
    employer_id: int
    employee_email: str = Field(..., pattern=r"^[^@]+@[^@]+\.[^@]+$")

class ApplicationOut(BaseModel):
    id: int
    status: str

    model_config = {"from_attributes": True}  # from ORM object
```

---

## Avoid

- Returning raw SQLAlchemy models from FastAPI without a response schema
