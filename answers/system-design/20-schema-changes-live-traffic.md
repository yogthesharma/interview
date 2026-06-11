# How do you handle schema changes with live traffic?

**Target time:** 8–10 min

---

## Talk track

> **Expand / contract** — never break running code during deploy window.

---

## Safe migration flow

```mermaid
flowchart LR
  E1[Expand: add nullable column] --> D1[Deploy code writing both]
  D1 --> B[Backfill data]
  B --> E2[Enforce NOT NULL + defaults]
  E2 --> C[Contract: remove old column]
```

---

## Example — rename `status` → add `submitted_at`

```
Phase 1 — EXPAND
  ADD COLUMN submitted_at TIMESTAMPTZ NULL;
  Deploy v2: writes submitted_at on submit, still reads old fields

Phase 2 — BACKFILL
  UPDATE applications SET submitted_at = updated_at WHERE status = 'submitted';

Phase 3 — ENFORCE
  Deploy v3: require submitted_at for submitted apps

Phase 4 — CONTRACT (later release)
  DROP deprecated columns
```

---

## Rules

- **Additive first** — new column nullable, new table, new index `CONCURRENTLY` (Postgres)  
- **Two-phase deploy** — migration before code OR code before drop, never both breaking at once  
- **Prisma:** `prisma migrate deploy` in CI — committed SQL (databases/15)  
- **Zero-downtime index:** `CREATE INDEX CONCURRENTLY` on large tables

---

## During traffic

- Old pods + new pods run simultaneously — schema must work for **both**  
- Long transactions — avoid table locks on hot tables in peak enrollment window

---

## Avoid

- `DROP COLUMN` in same release that still reads that column
