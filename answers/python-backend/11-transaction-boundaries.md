# Database transactions — where should boundaries live?

**Target time:** 45 seconds

---

## Talk track

> **Transaction** — group of DB ops that **commit or rollback together**.
>
> **Put boundaries in the service layer** — one business operation = one transaction:
> - `submit_application` — update app + insert audit + enqueue outbox row → **one commit**
> - Not: commit in repository methods scattered everywhere
>
> **Route/endpoint** — usually **does not** commit; calls service.
>
> **Repository** — uses passed `Session`; **no commit** inside repo (exception: generic unit-of-work helper).
>
> **`@transaction` decorator** or context manager optional for clarity.
>
> **Cross-service:** avoid distributed transactions; use **outbox pattern** + eventual consistency for external calls.

---

## Code

```python
def submit_application(db: Session, employer_id: int, app_id: str) -> Application:
    app = repo.get_for_update(db, employer_id, app_id)
    if app.status != "draft":
        raise InvalidTransition("already submitted")

    app.status = "submitted"
    app.submitted_at = utcnow()
    audit_repo.add(db, app_id, "submitted")
    outbox_repo.add(db, "ApplicationSubmitted", app_id)

    db.commit()  # single boundary
    return app

# repo — no commit
def get_for_update(db: Session, employer_id: int, app_id: str) -> Application:
    ...
```

---

## Avoid

- Partial commit — app updated, audit fails, inconsistent state
