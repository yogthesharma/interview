# How do you handle long-running operations?

**Target time:** 45 seconds

---

## Talk track

> Don't block HTTP request for minutes (quote from carrier, census validation, PDF generation).
>
> **Async pattern:**
> 1. `POST /v1/quotes` → **202 Accepted** + `{ jobId, status: "pending", pollUrl }`  
> 2. Client polls `GET /v1/jobs/:jobId` or receives **webhook**  
> 3. Terminal states: `completed` (with result link), `failed` (error), `cancelled`
>
> **Implementation:** queue (SQS), worker, DB job row, idempotent job creation.
>
> **Optional:** `Retry-After` header on 202; SSE/WebSocket for UI progress — polling is fine for B2B.
>
> **Timeout:** HTTP gateway timeout (30–60s) is why 202 exists.

---

## Code

```http
POST /v1/applications/42/request-quote
→ 202 Accepted
{
  "jobId": "job_99",
  "status": "pending",
  "pollUrl": "/v1/jobs/job_99"
}

GET /v1/jobs/job_99
→ 200
{
  "jobId": "job_99",
  "status": "completed",
  "result": { "quoteId": "q_7", "premium": 450.00 }
}
```

---

## Tie to Atlys

> Visa status checks, document processing — same 202 + poll/webhook pattern.

---

## Avoid

- Holding connection open 5 minutes waiting for carrier API
