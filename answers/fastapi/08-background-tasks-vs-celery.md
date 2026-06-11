# `BackgroundTasks` limitations vs Celery for real workloads?

**Target time:** 45 seconds

---

## Talk track

> **`BackgroundTasks`** — FastAPI runs callable **after** response is sent, **same process**. Good for: send one email, write audit log, fire-and-forget cache warm.
>
> **Limitations:**
> - **Not durable** — process crash = task lost
> - **No retry/DLQ** — no broker-backed redelivery
> - **Blocks worker capacity** if task is heavy — still competes with request handling
> - **No horizontal worker scale** separate from API
>
> **Celery** — broker (Redis/RabbitMQ), workers, retries, beat scheduler. For PDF gen, census parse, carrier polling.
>
> **Pattern:** API persists job row → `task.delay(id)` → **202** + status endpoint/webhook.
>
> **Already covered** in `python-async/10` — FastAPI angle: don't confuse `BackgroundTasks` with a job system.

---

## Code

```python
from fastapi import BackgroundTasks

def write_audit(app_id: str):
    audit_repo.log(app_id, "viewed")  # quick — OK

@router.get("/applications/{id}")
async def get_app(id: str, background_tasks: BackgroundTasks, ...):
    background_tasks.add_task(write_audit, id)
    return application

# Durable work — Celery
@router.post("/applications/{id}/pdf")
async def request_pdf(id: str):
    job = jobs_repo.create(type="pdf", app_id=id)
    generate_pdf.delay(job.id)
    return {"job_id": job.id}, 202
```

---

## Avoid

- 5-minute report generation in `BackgroundTasks`
