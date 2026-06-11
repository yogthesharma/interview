# Error handling — `HTTPException` vs custom exception handlers?

**Target time:** 30 seconds

---

## Talk track

> **`HTTPException(404)`** for simple cases. **Domain errors** + `@app.exception_handler` for consistent JSON.
>
> Pydantic 422 automatic. Global handler for 500. See `fastapi/05`.

---

## Code

```python
raise HTTPException(status_code=404, detail="Not found")
```
