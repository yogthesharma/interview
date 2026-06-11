# Scaling Flask — what breaks first under load?

**Target time:** 45–60 seconds

---

## Talk track

> **First bottlenecks (usually in order):**
> 1. **Database** — connection pool exhausted, slow queries, missing indexes, N+1 ORM
> 2. **Blocking I/O in sync workers** — external HTTP, PDF, email in request thread
> 3. **No caching** — repeated hot reads hit DB every time
> 4. **Session store** — file sessions don't scale; need Redis
> 5. **CPU on workers** — JSON serialization, heavy Python — fix code or offload
> 6. **Single monolith deploy** — everything scales together
>
> **Scale tactics:**
> - Horizontal **Gunicorn workers** + more app replicas behind load balancer
> - **Read replicas**, query optimization, Redis cache
> - **Queue** slow work (Celery) — return 202
> - **Stateless app** — sessions in Redis, uploads to S3
>
> **Interview line:** *"I'd profile p99, check DB connections and slow queries first — same playbook as Node APIs under load."*

---

## Code

```python
# Symptom: pool timeout under load
# SQLALCHEMY_ENGINE_OPTIONS = {"pool_size": 10, "max_overflow": 20, "pool_pre_ping": True}

# Fix pattern: move slow path off request
@bp.post("/applications/<id>/pdf")
def request_pdf(id: str):
    job = pdf_service.enqueue(id)
    return {"job_id": job.id}, 202
```

---

## Avoid

- Only adding Gunicorn workers when DB max connections is already saturated
