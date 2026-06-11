# Design an API for a resource (users / applications / quotes)

**Target time:** 60–90 seconds (whiteboard-style)

---

## Talk track

> **EOI example — `applications` resource:**
>
> **Model:** Application = employee enrollment intent for a plan window (draft → submitted → approved).
>
> **Endpoints:**
> ```
> GET    /v1/applications              # list (employer scope, filter status)
> POST   /v1/applications              # create draft
> GET    /v1/applications/:id          # detail
> PATCH  /v1/applications/:id          # update draft fields
> POST   /v1/applications/:id/submit   # state transition (command)
> GET    /v1/applications/:id/quotes   # nested quotes (or separate /quotes?applicationId=)
> ```
>
> **Design choices:**
> - **Nested vs flat** — `/applications/:id/quotes` for discoverability; flat `/quotes?applicationId=` for heavy quote queries  
> - **Commands as POST** — `submit` not PATCH `status` alone (validates business rules)  
> - **Tenant scoping** — employerId from JWT, never trust body  
> - **Idempotency-Key** on POST create + submit  
> - **201 + Location** on create
>
> **Quotes** as sibling resource: `GET /v1/quotes/:id` for carrier pricing response.

---

## Code

```json
// POST /v1/applications
{
  "employeeId": "emp_123",
  "planId": "plan_ppo_2026",
  "coverageTier": "employee_plus_spouse"
}

// 201
{
  "id": "app_42",
  "status": "draft",
  "employeeId": "emp_123",
  "createdAt": "2026-06-08T10:00:00Z"
}
```

---

## Avoid

- `PUT /applications` with no id — use POST for create
