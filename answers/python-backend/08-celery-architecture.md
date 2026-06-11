# Celery architecture — broker, worker, result backend, beat?

**Target time:** 45–60 seconds

---

## Talk track

> **Celery** — distributed task queue for Python.
>
> **Components:**
> - **Broker** — message transport (**Redis** or **RabbitMQ**) — API publishes tasks
> - **Worker** — separate process(es) consume messages, run task functions
> - **Result backend** (optional) — store return values (`redis://`) — for `AsyncResult.get()`
> - **Beat** — scheduler (cron-like) publishes periodic tasks
>
> **Flow:** API `generate_pdf.delay(job_id)` → broker → worker picks up → runs task → updates DB / callback.
>
> **Deploy:** workers scale independently from Uvicorn; **same codebase**, different entrypoint `celery -A app.celery worker`.
>
> **vs in-process async:** durable, retries, horizontal worker scale — see `python-async/10`.

---

## Code

```python
from celery import Celery
from celery.schedules import crontab

# celery_app.py
celery = Celery("app", broker=settings.REDIS_URL, backend=settings.REDIS_URL)
celery.conf.task_routes = {"tasks.heavy.*": {"queue": "heavy"}}

# tasks/pdf.py
@celery.task(bind=True, max_retries=3, acks_late=True)
def generate_pdf(self, job_id: str):
    ...

# API
generate_pdf.delay(job.id)

# beat schedule
celery.conf.beat_schedule = {
    "nightly-reconcile": {"task": "tasks.reconcile", "schedule": crontab(hour=2)},
}
```

---

## Avoid

- Running Celery worker in same process as Uvicorn without understanding memory/CPU contention
