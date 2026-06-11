# WebSockets in FastAPI — basic use case?

**Target time:** 30 seconds

---

## Talk track

> `@app.websocket("/ws")` — bidirectional real-time: live status, chat, collaborative UI.
>
> Auth before `accept()`. See `fastapi/10`.

---

## Code

```python
@app.websocket("/ws/status/{job_id}")
async def ws_status(websocket: WebSocket, job_id: str):
    await websocket.accept()
    async for event in stream(job_id):
        await websocket.send_json(event)
```
