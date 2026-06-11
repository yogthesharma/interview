# Streaming responses and Server-Sent Events?

**Target time:** 30–45 seconds

---

## Talk track

> **StreamingResponse** — send body in chunks — large CSV export, generated file, proxy downstream stream. Client reads incrementally.
>
> **SSE (`text/event-stream`)** — server **pushes** text events over one long-lived HTTP connection — job progress, live status updates, LLM token stream.
>
> **When SSE vs WebSocket:**
> - **SSE** — server → client only, simpler, works through many proxies, auto-reconnect in browser `EventSource`
> - **WebSocket** — bidirectional, chat, collaborative editing
>
> **Async generators** — `async def generate(): yield chunk` — natural fit for FastAPI streaming.
>
> **Production:** timeouts on load balancer, heartbeats, auth on stream endpoint.

---

## Code

```python
import asyncio
from fastapi import Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

async def event_stream(job_id: str):
    while True:
        status = await jobs_repo.status(job_id)
        yield f"data: {status.json()}\n\n"
        if status.done:
            break
        await asyncio.sleep(1)

@router.get("/jobs/{id}/events")
async def job_events(id: str):
    return StreamingResponse(event_stream(id), media_type="text/event-stream")

@router.get("/export/applications.csv")
async def export_csv(db: Session = Depends(get_db)):
    async def rows():
        yield "id,status\n"
        for app in application_service.iter_all(db):
            yield f"{app.id},{app.status}\n"
    return StreamingResponse(rows(), media_type="text/csv")
```

---

## Avoid

- Holding streaming connections unbounded without backpressure or timeout
