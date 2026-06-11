# What is a transaction?

**Target time:** 45 seconds

---

## Talk track

> **Transaction** = group of DB operations that succeed **all together** or **fail all together** — atomic unit.
>
> **Example:** submit application → update status + insert audit log + enqueue quote job.  
> If audit insert fails, status update must **roll back**.
>
> **SQL:** `BEGIN` → statements → `COMMIT` or `ROLLBACK` on error.
>
> **Prisma:** `prisma.$transaction([...])` or interactive `$transaction(async (tx) => { ... })`
>
> **Scope:** keep transactions **short** — no external API calls inside (holds locks).

---

## Code

```ts
await prisma.$transaction(async (tx) => {
  const app = await tx.application.update({
    where: { id: appId },
    data: { status: "submitted", submittedAt: new Date() },
  });
  await tx.auditLog.create({
    data: { applicationId: app.id, action: "submitted", userId },
  });
});
// both commit or neither
```

```sql
BEGIN;
UPDATE applications SET status = 'submitted' WHERE id = '42';
INSERT INTO audit_logs (application_id, action) VALUES ('42', 'submitted');
COMMIT;
```

---

## Avoid

- Long-running HTTP call inside `$transaction` — deadlock risk
