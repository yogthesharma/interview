# How do FastAPI's automatic OpenAPI / Swagger docs work?

**Target time:** 20–30 seconds

---

## Talk track

> FastAPI introspects routes, Pydantic models, dependencies → **OpenAPI 3** schema at `/openapi.json`.
>
> **Swagger UI** `/docs`, **ReDoc** `/redoc`. Field descriptions from `Field(description=...)`.
>
> See `fastapi/11`.

---

## Avoid

- Exposing `/docs` on public prod without auth
