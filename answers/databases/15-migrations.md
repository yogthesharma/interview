# How do you handle migrations?

**Target time:** 45–60 seconds

---

## Talk track

> **Schema evolves** — new columns, indexes, tables. **Migrations** = versioned, repeatable SQL (or Prisma migration files).

> **Prisma flow:**
> 1. Edit `schema.prisma`  
> 2. `prisma migrate dev` — generates SQL migration locally  
> 3. Commit migration folder to git  
> 4. CI/CD: `prisma migrate deploy` on release — applies pending migrations to prod

> **Safe production practices:**
> - **Backward-compatible steps** — add nullable column first, backfill, then enforce NOT NULL  
> - **Expand/contract** — deploy code that writes new column before removing old  
> - **Avoid** locking rewrites on huge tables in peak hours — use online index creation  
> - **Never** edit applied migration history — new migration to fix

> **Rollback:** prefer forward-fix migration over reversing prod DB.

---

## Code

```bash
# Local
npx prisma migrate dev --name add_application_submitted_at

# Production deploy step
npx prisma migrate deploy
```

```sql
-- Safe add column pattern
ALTER TABLE applications ADD COLUMN submitted_at TIMESTAMPTZ;
-- deploy app that sets submitted_at
-- backfill: UPDATE applications SET submitted_at = updated_at WHERE status = 'submitted';
-- ALTER TABLE applications ALTER COLUMN submitted_at SET NOT NULL;  -- later
```

---

## Avoid

- `prisma db push` in production instead of migrate deploy
