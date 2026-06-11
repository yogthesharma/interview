# User submits form → validate → save → notify agent. Walk me through it.

**Target time:** 10–12 min (end-to-end story)

---

## Talk track — narrate step by step

> **Scenario:** Employer admin submits employee enrollment form; agent gets notified.

---

## Flow

```mermaid
sequenceDiagram
  participant U as User browser
  participant API as Fastify API
  participant DB as Postgres
  participant EB as EventBridge
  participant Q as SQS
  participant N as Notify worker
  participant A as Agent email/CRM

  U->>API: POST /applications + JWT + body
  API->>API: 1. Authenticate JWT (employerId, roles)
  API->>API: 2. Validate body (Zod — auth/07)
  API->>API: 3. RBAC — can create application?
  API->>DB: 4. Transaction: INSERT application draft
  API-->>U: 201 { applicationId }

  U->>API: POST /applications/:id/submit + Idempotency-Key
  API->>DB: 5. Validate state, UPDATE status=submitted + audit
  API->>EB: 6. ApplicationSubmitted event
  API-->>U: 202 { status: submitted }

  EB->>Q: rule → notify-agent queue
  Q->>N: 7. Worker consumes
  N->>DB: load app + assigned agent
  N->>A: 8. email / Slack / CRM webhook
  N->>DB: log notification sent (idempotent on eventId)
```

---

## Layer breakdown

| Step | Layer | Failure |
|------|-------|---------|
| Validate | API | 400 field errors |
| Auth | API | 401/403 |
| Save | RDS transaction | 500, retry client |
| Notify | Async worker | SQS retry → DLQ |

> **Key point:** user gets **202 after save** — notification is **best-effort async**, not blocking submit.

---

## Atlys parallel

> Visa application submit — same split: sync validate + persist, async notifications and downstream integrations.

---

## Avoid

- Notify agent synchronously before returning response to user
