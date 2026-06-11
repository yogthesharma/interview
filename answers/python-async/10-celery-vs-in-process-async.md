# Celery workers vs in-process async — division of labor?

**Target time:** 45–60 seconds

---

## Talk track

> **`asyncio` in the API process** — **short I/O-bound** work tied to the request: call carrier API, read DB, return response. Milliseconds to low seconds.
>
> **Celery (or RQ) workers** — **out-of-band jobs**: send email, generate PDF, parse large census file, retry-heavy integrations. Minutes of work; separate process; **broker** (Redis/RabbitMQ) decouples API from worker.
>
> | | In-process async | Celery worker |
> |---|------------------|---------------|
> | Lifetime | Request-scoped | Background queue |
> | Failure | Return 500 to client | Retry, DLQ, alert |
> | Scale | API replicas | Worker replicas |
> | CPU/long jobs | Bad fit | Good fit |
>
> **Pattern:** API validates → persist job row → `task.delay(job_id)` → **202 Accepted** + poll/webhook. Same as Node queue + Lambda worker mentally.
>
> **FastAPI `BackgroundTasks`** — only for **trivial** post-response work (log, single email); dies if process restarts — not durable jobs.

---

## Code

```python
# API — enqueue durable work
@router.post("/applications/{id}/pdf")
async def request_pdf(id: str, db: Session = Depends(get_db)):
    job = create_job(db, application_id=id, type="pdf")
    generate_pdf_task.delay(job.id)  # Celery
    return {"job_id": job.id, "status": "queued"}, 202

# Celery task — sync OK, separate process
@celery_app.task(bind=True, max_retries=3)
def generate_pdf_task(self, job_id: str):
    try:
        build_pdf(job_id)
    except TransientError as e:
        raise self.retry(exc=e, countdown=60)
```

---

## Avoid

- 30-minute PDF generation inside `async def` HTTP handler
