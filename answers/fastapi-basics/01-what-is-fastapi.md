# What is FastAPI? Why has it become popular?

**Target time:** 30–45 seconds

---

## Talk track

> **FastAPI** — modern **ASGI** framework for building APIs with Python type hints.
>
> **Popular because:** automatic **OpenAPI** docs, **Pydantic** validation, great DX, **async** support, fast (Starlette + uvicorn).
>
> Default for greenfield JSON microservices in Python.

---

## Code

```python
from fastapi import FastAPI

app = FastAPI(title="Enrollment API")

@app.get("/health")
def health():
    return {"status": "ok"}
```
