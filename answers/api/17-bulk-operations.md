# How do you handle bulk operations?

**Target time:** 45 seconds

---

## Talk track

> **Options:**
>
> **1. Batch endpoint** — `POST /v1/applications/bulk` with array — sync for small batches (< 50), return per-item results.
>
> **2. Async job** — large census import → `POST /v1/imports` returns **202 Accepted** + `jobId`; poll `GET /jobs/:id` or webhook on complete.
>
> **Response shape:** mixed success — `207 Multi-Status` or 200 with `{ succeeded: [], failed: [{ id, error }] }` so partial failure is visible.
>
> **Limits:** max items per request, rate limit, validate all vs fail-fast (document behavior).
>
> **DB:** bulk insert with transaction chunks; avoid N sequential round trips.

---

## Code

```json
POST /v1/applications/bulk
{
  "items": [
    { "employeeId": "e1", "planId": "p1" },
    { "employeeId": "e2", "planId": "p1" }
  ]
}

// 200
{
  "created": 1,
  "failed": 1,
  "results": [
    { "index": 0, "id": "app_1", "status": "created" },
    { "index": 1, "error": "Employee not found", "code": "EMPLOYEE_NOT_FOUND" }
  ]
}
```

---

## Avoid

- All-or-nothing without telling client which rows failed
