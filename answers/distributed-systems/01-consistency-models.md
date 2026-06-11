# Consistency models — strong, eventual, causal?

**Target time:** 60–90 seconds

---

## Talk track

> **Consistency** = what readers see after a write — do all clients agree immediately, or can they briefly disagree?
>
> | Model | Meaning | Example |
> |-------|---------|---------|
> | **Strong** | Read always returns latest write | Single-node Postgres transaction |
> | **Eventual** | Replicas converge if writes stop | DynamoDB global tables, CDN |
> | **Causal** | Related ops stay ordered | "Post comment" after "create post" |
> | **Read-your-writes** | User sees own writes | Session stickiness or short TTL cache bust |
>
> **Senior IC take:** pick the **weakest consistency you can tolerate** — stronger = slower, harder to scale. Insurance quotes can be eventually consistent for analytics; payment status cannot.

---

## Practical mapping

```
Strong needed:
  - Ledger, enrollment status, idempotency keys in DB
Eventual OK:
  - Search index, dashboard aggregates, email delivery status
Read-your-writes:
  - User submits form → redirect → must see their submission
```

---

## How this connects

| File | Why |
|------|-----|
| `distributed-systems/02` | CAP forces consistency vs availability tradeoff |
| `databases/14` | Eventual consistency in DynamoDB |
| `system-design/12` | Exactly-once vs at-least-once affects perceived consistency |

---

## Avoid

- Saying "we need strong consistency everywhere" — that's a scaling trap
- Confusing **database ACID** with **distributed** consistency across services
