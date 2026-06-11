# How do you handle retries in serverless?

**Target time:** 45–60 seconds

---

## Talk track

> **Layers of retry** — know which layer owns what:

| Layer | Behavior |
|-------|----------|
| **Client SDK** | Automatic retries on transient AWS errors |
| **Lambda async** | 2 retries on failure → optional DLQ |
| **SQS + Lambda** | Message returns after visibility timeout; maxReceiveCount → DLQ |
| **API Gateway** | Client retries (with Idempotency-Key — api/06) |
| **Your code** | Exponential backoff for external APIs (carrier quote) |

> **Idempotency:** at-least-once delivery (SQS) → handler must be **idempotent** — check idempotency key / dedupe table before side effects.

> **Poison message:** fail fast to DLQ after N tries; don't infinite loop.

> **Step Functions** (aws/19): built-in retry/catch per state.

---

## Code

```ts
export const handler = async (event: SQSEvent) => {
  for (const record of event.Records) {
    const { applicationId, idempotencyKey } = JSON.parse(record.body);
    const existing = await getIdempotencyRecord(idempotencyKey);
    if (existing) return existing.result; // already processed

    try {
      const result = await callCarrierApi(applicationId);
      await saveIdempotency(idempotencyKey, result);
    } catch (err) {
      if (isTransient(err)) throw err; // SQS will retry
      await logPermanentFailure(record); // don't retry bad payload forever
      // or send to DLQ via throw after max attempts
    }
  }
};
```

---

## Avoid

- Non-idempotent side effects (charge card twice) on SQS retry
