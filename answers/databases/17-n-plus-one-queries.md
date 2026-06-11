# How do you avoid N+1 query problems?

**Target time:** 45–60 seconds

---

## Talk track

> **N+1** — 1 query loads N parent rows, then **N additional queries** for each related child. Classic ORM footgun.
>
> **Example:** load 50 applications, then loop `getEmployee(id)` → 51 queries.
>
> **Fixes:**
> 1. **Eager load / include** — one query with JOIN  
> 2. **Batch load** — `WHERE id IN (...)` for missing relations  
> 3. **DataLoader** pattern in GraphQL APIs  
> 4. **Select only needed fields** — `select` / `include: { employee: { select: { name: true } } }`

> **Detect:** enable Prisma query log locally, or APM (Datadog) — spike in query count per request.

---

## Code

```ts
// ❌ N+1
const apps = await prisma.application.findMany({ where: { employerId } });
for (const app of apps) {
  app.employee = await prisma.employee.findUnique({ where: { id: app.employeeId } });
}

// ✅ Single query with join
const apps = await prisma.application.findMany({
  where: { employerId },
  include: { employee: { select: { id: true, name: true, email: true } } },
});

// ✅ Batch alternative
const apps = await prisma.application.findMany({ where: { employerId } });
const employeeIds = [...new Set(apps.map((a) => a.employeeId))];
const employees = await prisma.employee.findMany({ where: { id: { in: employeeIds } } });
const byId = Object.fromEntries(employees.map((e) => [e.id, e]));
```

---

## Avoid

- Lazy-loading relations in loops in hot list endpoints
