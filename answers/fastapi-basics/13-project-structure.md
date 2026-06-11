# How do you structure a FastAPI project (routers, services, models)?

**Target time:** 30 seconds

---

## Talk track

> ```
> app/
>   main.py
>   routers/
>   services/
>   repositories/
>   schemas/   # Pydantic
>   models/    # SQLAlchemy
>   dependencies.py
> ```
>
> Thin routers, fat services. Same layering as Flask/Fastify.

---

## Code

```python
app.include_router(applications_router, prefix="/api/v1")
```
