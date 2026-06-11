# SQL vs NoSQL — when do you use which?

**Target time:** 45–60 seconds

---

## Talk track

> **SQL (Postgres, MySQL)** — structured schema, relations, JOINs, ACID transactions.  
> **NoSQL** — flexible or specialized models (document, key-value, wide-column, graph).

> **Pick SQL when:**
> - Relational data — users, applications, quotes with foreign keys  
> - Complex queries, reports, aggregations  
> - Strong consistency + transactions (money, enrollment state)  
> - **My default at Atlys:** Postgres + Prisma

> **Pick NoSQL (e.g. DynamoDB) when:**
> - Massive scale, predictable access patterns, low-latency key lookups  
> - Serverless / pay-per-request, no ops for DB cluster  
> - Event logs, sessions, idempotency keys, high-write counters

> **Role-specific angle:** core enrollment/application data → likely **relational**. High-volume events, webhooks, idempotency → **DynamoDB/SQS** alongside.

---

## Code

```ts
// SQL — relational
await prisma.application.findMany({
  where: { employerId, status: "submitted" },
  include: { employee: true, quotes: true },
});

// DynamoDB — key lookup
await docClient.get({
  TableName: "Events",
  Key: { pk: "EMP#acme", sk: "EVT#2026-06-08#abc" },
});
```

---

## Avoid

- "NoSQL is always faster" — wrong workload, wrong tool
