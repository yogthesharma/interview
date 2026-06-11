# Structured logging and request IDs in Flask?

**Target time:** 30–45 seconds

---

## Talk track

> **Structured logs** — JSON fields, not prose: `level`, `message`, `request_id`, `user_id`, `path`, `duration_ms`.
>
> **Request ID:** accept `X-Request-Id` from client/proxy or generate UUID in `before_request`; store on `g`; echo in response header; include in every log line.
>
> **Libraries:** `structlog`, or `logging` + JSON formatter; Gunicorn access logs separate from app logs.
>
> **Why hireable:** debug prod issues across services — "show all logs for request_id abc" in CloudWatch/Datadog.
>
> **Same practice** as pino/Fastify at Atlys — correlation id on every request.

---

## Code

```python
import time
import structlog
from uuid import uuid4

logger = structlog.get_logger()

@app.before_request
def start_request():
    g.request_id = request.headers.get("X-Request-Id", str(uuid4()))
    g._start = time.perf_counter()

@app.after_request
def log_request(response):
    logger.info(
        "request_completed",
        request_id=g.request_id,
        method=request.method,
        path=request.path,
        status=response.status_code,
        duration_ms=round((time.perf_counter() - g._start) * 1000, 2),
    )
    response.headers["X-Request-Id"] = g.request_id
    return response
```

---

## Avoid

- `print(f"error {e}")` in production with no request context
