# OpenAPI schema customization — when auto-docs aren't enough?

**Target time:** 30–45 seconds

---

## Talk track

> FastAPI **auto-generates OpenAPI** from routes, Pydantic models, `Field(description=...)`, response models — `/docs` Swagger UI, `/redoc`.
>
> **Customize when:**
> - **Tags / grouping** — `tags=["Applications"]` for nav
> - **Examples** — `Body(..., examples={...})` for partner integrators
> - **Hide internal routes** — `include_in_schema=False` for ops/debug
> - **OAuth2 flow docs** — `swagger_ui_init_oauth` for try-it-out
> - **Export** — commit `openapi.json` for client codegen (TypeScript, Kotlin)
>
> **`openapi_extra`** on route — manual schema fragments for edge cases.
>
> **Interview line:** *"Auto-docs are great for B2B APIs — carriers integrate once; I treat OpenAPI as a product artifact."*

---

## Code

```python
@router.post(
    "/applications",
    response_model=ApplicationOut,
    tags=["Applications"],
    summary="Create draft application",
    responses={409: {"description": "Duplicate employee enrollment"}},
)
def create(body: ApplicationCreate):
    ...

# Hide from public docs
@app.get("/internal/health-deep", include_in_schema=False)
def deep_health():
    ...
```

---

## Avoid

- Publishing `/docs` in production without auth on public internet
