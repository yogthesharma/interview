# File uploads and streaming responses in FastAPI?

**Target time:** 30 seconds

---

## Talk track

> **Upload:** `UploadFile = File(...)` — stream to disk/S3, size limits, virus scan hook.
>
> **Streaming:** `StreamingResponse` generator for CSV/PDF/SSE. See `fastapi/09`.

---

## Code

```python
from fastapi import UploadFile, File

@router.post("/upload")
async def upload(file: UploadFile = File(...)):
    contents = await file.read()
    ...
```
