# What is an index? Why does it matter?

**Target time:** 45 seconds

---

## Talk track

> **Index** = data structure (usually B-tree) that speeds **lookups, filters, sorts** — like a book index vs reading every page.
>
> **Without index:** `WHERE employer_id = 'acme'` → full table scan.  
> **With index on `employer_id`:** direct seek — critical for tenant-scoped lists (auth/11).
>
> **Costs:** slower writes, extra storage. Don't index every column.
>
> **Composite index:** `(employer_id, status, created_at DESC)` for `WHERE employer_id AND status ORDER BY created_at`.
>
> **Prisma:** `@@index([employerId, status])` in schema → migration creates index.

---

## Code

```prisma
model Application {
  id         String @id
  employerId String
  status     String
  createdAt  DateTime @default(now())

  @@index([employerId, status, createdAt(sort: Desc)])
}
```

```sql
EXPLAIN ANALYZE
SELECT * FROM applications
WHERE employer_id = 'acme' AND status = 'submitted'
ORDER BY created_at DESC LIMIT 20;
-- look for Index Scan vs Seq Scan
```

---

## Avoid

- Index on low-cardinality column alone without query proof (e.g. boolean `is_active`)
