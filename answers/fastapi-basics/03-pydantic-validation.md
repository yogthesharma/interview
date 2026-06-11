# How does Pydantic power request and response validation?

**Target time:** 30 seconds

---

## Talk track

> Route params/body typed as **Pydantic models** — FastAPI parses JSON, validates types/constraints, returns **422** on failure.
>
> Same models drive **OpenAPI schema**. See `fastapi/03`, `python/12`.

---

## Code

```python
class ApplicationCreate(BaseModel):
    email: str
    coverage_amount: int = Field(ge=10_000)

@router.post("")
def create(body: ApplicationCreate):
    ...
```
