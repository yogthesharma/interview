# Observability — structured logs, metrics, Sentry for Python APIs?

**Target time:** 45 seconds

---

## Talk track

> **Three pillars for production APIs:**
>
> 1. **Structured logs** — JSON with `request_id`, `user_id`, `path`, `duration_ms`, `level` — `structlog` or stdlib JSON formatter. Ship to CloudWatch/Datadog.
>
> 2. **Metrics** — request rate, latency histograms (p50/p99), error rate, pool usage — Prometheus + Grafana or hosted APM.
>
> 3. **Error tracking** — **Sentry** SDK captures stack traces, release, breadcrumbs; alert on new issues.
>
> **Request correlation:** `X-Request-Id` middleware — same id in logs and Sentry tags.
>
> **Health:** `/health` liveness, `/ready` DB ping — separate from metrics.
>
> **Same ops mindset** as pino + request IDs on Fastify at Atlys.

---

## Code

```python
import time
from uuid import uuid4
import structlog
import sentry_sdk
from fastapi import Request

sentry_sdk.init(dsn=settings.SENTRY_DSN, environment=settings.ENV)
logger = structlog.get_logger()

@app.middleware("http")
async def observability(request: Request, call_next):
    request_id = request.headers.get("X-Request-Id", str(uuid4()))
    start = time.perf_counter()
    try:
        response = await call_next(request)
        logger.info(
            "request_completed",
            request_id=request_id,
            path=request.url.path,
            status=response.status_code,
            duration_ms=round((time.perf_counter() - start) * 1000, 2),
        )
        response.headers["X-Request-Id"] = request_id
        return response
    except Exception:
        logger.exception("request_failed", request_id=request_id, path=request.url.path)
        raise
```

---

## Avoid

- Only `print()` in production — can't search or alert
