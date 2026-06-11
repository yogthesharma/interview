# Flask in Docker — typical Dockerfile and health checks?

**Target time:** 30–45 seconds

---

## Talk track

> **Multi-stage optional** — builder installs deps; runtime slim image.
>
> **Basics:**
> - `python:3.12-slim` base
> - Non-root user in production
> - `pip install` from lock/requirements in build layer (cache-friendly)
> - `CMD` Gunicorn, not `flask run`
> - **Health endpoints** — `/health` liveness, `/ready` checks DB/redis
> - **Orchestrator** probes those — k8s `livenessProbe` / `readinessProbe`
>
> **Env at runtime** — `DATABASE_URL`, secrets from platform, not baked into image.
>
> **Same ops mindset** as containerized Node APIs — reproducible deploy, one process per container.

---

## Code

```dockerfile
FROM python:3.12-slim

WORKDIR /app
RUN useradd --create-home appuser
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
USER appuser

EXPOSE 8000
HEALTHCHECK CMD curl -f http://localhost:8000/health || exit 1

CMD ["gunicorn", "app:create_app()", "-b", "0.0.0.0:8000", "-w", "2"]
```

```python
from sqlalchemy import text

@health_bp.get("/health")
def health():
    return {"status": "ok"}, 200

@health_bp.get("/ready")
def ready():
    db.session.execute(text("SELECT 1"))
    return {"status": "ready"}, 200
```

---

## Avoid

- Copying `.env` with secrets into the image layer
