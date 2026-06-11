# Background jobs with Flask — Celery, RQ, or similar?

**Target time:** 30 seconds

---

## Talk track

> Don't run long work in request thread. **Celery** + Redis/RabbitMQ for durable jobs. **RQ** simpler for small teams.
>
> API enqueues → **202** + job id. See `python-async/10`, `python-backend/08`.

---

## Code

```python
@bp.post("/pdf")
def enqueue_pdf(app_id):
    job = create_job(app_id)
    generate_pdf.delay(job.id)
    return {"job_id": job.id}, 202
```
