# WebSocket auth and connection management?

**Target time:** 45 seconds

---

## Talk track

> **WebSocket handshake** starts as HTTP — auth **before** `accept()`:
> - Query param token (simple, logs may leak — prefer short-lived)
> - **Cookie** session (browser apps)
> - First message auth after connect (less ideal)
>
> **Flow:**
> 1. Client connects `ws://api.example.com/ws/status?token=...`
> 2. Server validates token in endpoint **before** `await websocket.accept()`
> 3. Invalid → `close(code=1008)` policy violation
> 4. Loop `receive` / `send`; handle disconnect cleanly
>
> **Connection management:**
> - Track connections per user/tenant — dict or Redis pub/sub for multi-instance
> - **Heartbeat/ping** — detect dead clients
> - **Limit connections** per user — prevent abuse
>
> **Scale:** sticky sessions or Redis bridge when multiple Uvicorn workers.

---

## Code

```python
from fastapi import Query, WebSocket, WebSocketDisconnect

@app.websocket("/ws/applications/{app_id}/status")
async def status_ws(websocket: WebSocket, app_id: str, token: str = Query(...)):
    user = auth_service.verify_ws_token(token)
    if not user:
        await websocket.close(code=1008)
        return

    await websocket.accept()
    try:
        async for event in application_service.subscribe(app_id, user.employer_id):
            await websocket.send_json(event)
    except WebSocketDisconnect:
        logger.info("ws_disconnect", app_id=app_id, user_id=user.id)
```

---

## Avoid

- `accept()` first, auth later — unauthenticated open connection window
