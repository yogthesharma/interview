# What is ACID?

**Target time:** 45 seconds

---

## Talk track

> **ACID** — guarantees for relational transactions:

| Property | Meaning |
|----------|---------|
| **Atomicity** | All or nothing — no half-applied transaction |
| **Consistency** | DB moves from one valid state to another (constraints hold) |
| **Isolation** | Concurrent transactions don't corrupt each other |
| **Durability** | Committed data survives crash (WAL, replication) |

> **Isolation levels** (awareness): Read Uncommitted → Read Committed (default Postgres) → Repeatable Read → Serializable — stricter = less anomalies, more locking.

> **NoSQL note:** DynamoDB offers **ACID within a single-item or multi-item transaction** (limited, same account/region) — not full SQL flexibility.

> **Interview tie-in:** enrollment submit needs atomicity — status + audit in one transaction (databases/06).

---

## Code

```ts
// Atomicity + consistency — FK and check constraints enforced at commit
await prisma.$transaction([
  prisma.application.update({ where: { id }, data: { status: "approved" } }),
  prisma.quote.updateMany({ where: { applicationId: id }, data: { locked: true } }),
]);
```

---

## Avoid

- Assuming all NoSQL is ACID by default
