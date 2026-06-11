# Path parameters vs query parameters vs request body?

**Target time:** 30 seconds

---

## Talk track

> **Path** — resource identity: `/applications/{id}`.
>
> **Query** — filters/pagination: `?status=draft&limit=20`.
>
> **Body** — create/update payload on POST/PATCH/PUT as Pydantic model.

---

## Code

```python
@router.get("/applications/{app_id}")
def get_one(app_id: str, include: str | None = None):
    ...

@router.post("/applications")
def create(body: ApplicationCreate):
    ...
```
