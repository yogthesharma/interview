# How do you define response models and status codes?

**Target time:** 30 seconds

---

## Talk track

> `response_model=ApplicationOut`, `status_code=201` on decorator.
>
> Filters outbound fields. Multiple responses in OpenAPI via `responses={404: {...}}`.
>
> See `fastapi/04`.

---

## Code

```python
@router.post("", response_model=ApplicationOut, status_code=201)
def create(body: ApplicationCreate):
    return service.create(body)
```
