# Why are event-driven systems hard to debug?

**Target time:** 90 seconds

---

## Talk track

> **Event-driven** decouples producers and consumers — great for scale, painful for **linear debugging**.
>
> **Why it's hard:**
> - **No single stack trace** — one user action fans out to 5 consumers asynchronously
> - **Temporal gap** — bug manifests minutes later in downstream worker
> - **At-least-once delivery** — duplicates look like "random" duplicate emails
> - **Ordering not guaranteed** — `ApplicationApproved` arrives before `ApplicationSubmitted` if you're not careful
> - **Implicit contracts** — schema drift breaks silent consumers
> - **Replay is scary** — re-drive queue can double-charge or spam
>
> **What saves you:** correlation ID from HTTP → event payload → every consumer log (`cicd-devops/05-08`).

---

## Debug playbook

```
1. Find correlationId / applicationId in first service
2. Search logs across services with same ID
3. Trace in Datadog/X-Ray — see hop-by-hop
4. Check DLQ for poison messages
5. Inspect event schema version + consumer lag metrics
```

---

## Design for debuggability

- **Past-tense events** with `eventId`, `occurredAt`, `schemaVersion` (`system-design/09`)
- **Idempotent consumers** — duplicates are normal
- **Sync read model** for user-facing status — don't make user poll 5 services

---

## How this connects

| File | Why |
|------|-----|
| `system-design/09` | Event-driven workflow design |
| `system-design/11-13` | Failures, exactly-once, duplicates |
| `debugging/07` | Duplicate records investigation |

---

## Avoid

- Events as commands with no idempotency — `SendEmail` twice hurts
- Debugging prod by republishing entire day's events
