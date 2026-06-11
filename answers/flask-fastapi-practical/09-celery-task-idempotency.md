# Add a Celery task triggered from an API with idempotency key

**Target time:** 20 min live  
**Pattern:** accept key → persist job → enqueue → 202

---

## Interview approach

> Client sends **`Idempotency-Key`** header. API looks up existing job by `(employer_id, key)` — if found, return same `job_id`. Else create row `queued`, enqueue Celery, return **202**. Task checks status before work — safe on retry.

---

## Reference solution

```python
# models/job.py — unique constraint on (employer_id, idempotency_key)

@router.post("/applications/{app_id}/pdf", status_code=202)
def request_pdf(
    app_id: str,
    idempotency_key: str = Header(..., alias="Idempotency-Key"),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    existing = job_repo.find_by_key(db, user.employer_id, idempotency_key)
    if existing:
        return {"job_id": existing.id, "status": existing.status}

    job = job_repo.create(
        db,
        type="pdf",
        application_id=app_id,
        employer_id=user.employer_id,
        idempotency_key=idempotency_key,
        status="queued",
    )
    db.commit()
    generate_pdf_task.delay(job.id)
    return {"job_id": job.id, "status": "queued"}

@celery_app.task(bind=True, max_retries=3)
def generate_pdf_task(self, job_id: str):
    with session_scope() as db:
        job = job_repo.get(db, job_id)
        if job.status == "completed":
            return job.result
        if not job_repo.mark_processing(db, job_id):
            return
        db.commit()

    try:
        path = pdf_builder.build(job.application_id)
        with session_scope() as db:
            job_repo.complete(db, job_id, path)
            db.commit()
    except Exception as e:
        raise self.retry(exc=e, countdown=30)
```

---

## Done when

- [ ] Duplicate `Idempotency-Key` returns same job, no double enqueue
- [ ] API returns 202, not blocking on PDF
- [ ] Task no-ops if already `completed`
