# Database query optimization basics?

**Target time:** 45 seconds

---

## Talk track

> **Basics I apply / discuss:**
>
> - **Indexes** on columns in `WHERE`, `JOIN`, `ORDER BY` — but not over-index everything  
> - **Avoid N+1** — use joins or batch `WHERE id IN (...)` instead of loop queries  
> - **Select only needed columns** — not `SELECT *` on wide tables  
> - **Pagination** — `LIMIT/OFFSET` or cursor for large sets  
> - **Explain / analyze** — read query plans (Postgres `EXPLAIN`, DynamoDB access patterns)  
> - **Right store** — DynamoDB: design around access patterns; SQL: normalize then denormalize hot paths if needed
>
> **Prisma note:** I use ORM day-to-day — still care about `include` vs separate queries (N+1 risk).

---

## Code

```ts
// N+1 — bad
for (const id of ids) await db.user.findUnique({ where: { id } });

// Better — batch
await db.user.findMany({ where: { id: { in: ids } } });
```

---

## Avoid

- Claiming expert DBA tuning without examples
