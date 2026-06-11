# Request lifecycle in FastAPI — middleware → routing → dependencies → endpoint?

**Target time:** 45–60 seconds

---

## Talk track

> **ASGI app** (Starlette under the hood) — Uvicorn receives HTTP, builds scope, runs the stack:
>
> 1. **Outer middleware** — CORS, gzip, custom logging (first added = outermost on way in)
> 2. **Routing** — match path + method to route
> 3. **Dependencies** — resolved **before** endpoint: `Depends(get_db)`, `Depends(get_current_user)` — can nest (sub-dependencies)
> 4. **Endpoint** — `async def` or `def` handler runs
> 5. **Response** — serialized via **response_model** if set; middleware on way out
> 6. **Exception handlers** — if raised, mapped to JSON response
>
> **Sync `def` route** — Starlette runs it in a **thread pool** so it doesn't block the event loop (still prefer async I/O when possible).
>
> **Fastify parallel:** hooks → preHandler → handler → onSend — same "thin HTTP adapter" mindset.

---

## Code

```python
from uuid import uuid4
from fastapi import Depends, Request

@app.middleware("http")
async def add_request_id(request: Request, call_next):
    request.state.request_id = request.headers.get("X-Request-Id", str(uuid4()))
    response = await call_next(request)
    response.headers["X-Request-Id"] = request.state.request_id
    return response

@router.get("/applications/{id}", response_model=ApplicationOut)
async def get_application(
    id: str,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return application_service.get(db, user.employer_id, id)
```

---

## Avoid

- Heavy work in middleware that should be a dependency or service
