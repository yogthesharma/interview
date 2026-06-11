# Connection pooling — why?

**Target time:** 30 seconds

---

## Talk track

> Opening a **DB connection** is expensive (TCP + auth + memory). **Connection pool** keeps a set of **reused connections** — app borrows, returns, avoids open/close per query.
>
> **Why it matters at scale:** 500 Lambda invocations each opening a new DB connection can **exhaust** DB `max_connections`. Pooler (PgBouncer, RDS Proxy) or ORM pool settings fix this.
>
> **Node/Prisma:** connection limit per instance — tune pool size × number of instances.

---

## Code

```ts
// Prisma — datasource pool (conceptual)
// DATABASE_URL with ?connection_limit=10
// Or RDS Proxy in front of Aurora for many short-lived Lambdas
```

---

## Avoid

- One new connection per request in high-concurrency serverless without proxy
