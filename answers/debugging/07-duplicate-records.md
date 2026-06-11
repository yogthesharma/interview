# Users report duplicate records — what do you check?

**Target time:** 45–60 seconds

---

## Talk track

> **Clarify:** true duplicates in DB (two rows) vs UI showing same row twice (frontend bug)?
>
> **If DB duplicates:**
> - **Double submit** — no idempotency key, user double-clicks, retry logic  
> - **Missing unique constraint** — email/applicationId should be UNIQUE  
> - **Race on create** — two parallel POSTs both pass "not exists" check → use transaction + unique index or upsert  
> - **Webhook delivered twice** — at-least-once delivery without dedup  
> - **Retry storm** — client/queue retries on timeout after success
>
> **If UI only:**
> - **React key** issues, append instead of replace state, stale cache merge
>
> **Fix pattern:** **idempotency key** header + unique constraint + return same response on replay.

---

## Code (idempotency sketch)

```ts
// Client sends Idempotency-Key: uuid
// Server: INSERT ... ON CONFLICT (idempotency_key) DO NOTHING RETURNING *
```

---

## Role-specific angle

> Duplicate EOI applications — check submit retries, webhook replay, unique (employeeId, enrollmentPeriod).

---

## Avoid

- Only blaming the user for double-clicking
