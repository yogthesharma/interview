# ORM vs raw SQL — your preference?

**Target time:** 45 seconds

---

## Talk track

> **ORM (Prisma)** — type-safe models, migrations, relation APIs, protects from SQL injection. **Default for app CRUD** — what I use at Atlys.
>
> **Raw SQL** — max control, complex reports, CTEs, window functions, bulk ops, DB-specific optimizations.
>
> **My approach:**
> - **90% Prisma** — handlers, services, tenant-scoped CRUD  
> - **Raw when needed** — `$queryRaw` for reporting, bulk update, perf-critical path after EXPLAIN  
> - **Never** string-concat SQL — tagged template / parameters (auth/06)

> **Tradeoffs:** ORM can hide N+1 (databases/17); raw SQL needs discipline and tests.

---

## Code

```ts
// Prisma — daily work
await prisma.application.findMany({
  where: { employerId, status: "submitted" },
  include: { quotes: true },
});

// Raw — complex report
const rows = await prisma.$queryRaw<{ month: string; count: bigint }[]>`
  SELECT date_trunc('month', submitted_at) AS month, COUNT(*)::bigint
  FROM applications
  WHERE employer_id = ${employerId}
  GROUP BY 1
  ORDER BY 1 DESC
`;
```

---

## Avoid

- Raw SQL everywhere "for performance" without profiling
