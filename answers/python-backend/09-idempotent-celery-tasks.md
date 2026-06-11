# Idempotent Celery tasks — how do you design them?

**Target time:** 45 seconds

---

## Talk track

> **At-least-once delivery** — broker retries, worker crashes → **same task may run twice**. Tasks must be **idempotent**.
>
> **Design patterns:**
> 1. **Idempotency key** — `job_id` or client `Idempotency-Key` stored unique in DB; skip if already `completed`
> 2. **State machine** — only process if status `queued` → CAS update to `processing`
> 3. **Side effects safe to repeat** — writing same S3 key with same content vs charging card twice
> 4. **`acks_late=True`** + visibility — worker acks after success; retry on failure
>
> **Dedup table:** `(task_name, idempotency_key) UNIQUE`.
>
> **Same concept** as `api/06` idempotency for HTTP POST.

---

## Code

```python
@celery.task(bind=True, max_retries=5)
def send_carrier_quote(self, job_id: str):
    job = jobs_repo.get(job_id)
    if job.status == "completed":
        return job.result  # already done — safe no-op

    if not jobs_repo.mark_processing(job_id):  # atomic UPDATE ... WHERE status='queued'
        return  # another worker won

    try:
        result = carrier_client.request_quote(job.payload)
        jobs_repo.complete(job_id, result)
    except TransientError as e:
        jobs_repo.reset_to_queued(job_id)
        raise self.retry(exc=e, countdown=2 ** self.request.retries)
```

---

## Avoid

- `INSERT` without unique constraint on business key — duplicates on retry
