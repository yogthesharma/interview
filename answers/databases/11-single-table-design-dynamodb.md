# What is single-table design in DynamoDB?

**Target time:** 60 seconds

---

## Talk track

> **Single-table design** = one DynamoDB table stores **multiple entity types** using composite PK/SK and optional **GSI** (Global Secondary Index) for alternate access patterns.
>
> **Why:** DynamoDB has no JOINs — colocate related data or duplicate with GSIs instead of multiple SQL tables.
>
> **Pattern:**
> - Same table: employers, employees, applications as different SK prefixes under related PKs  
> - **GSI1:** inverted keys for "lookup application by id globally" (`gsi1pk = APP#42`)

> **Tradeoff:** powerful at scale, **steep learning curve** — overkill for small apps. Postgres + Prisma is simpler for relational core.

---

## Code

```
Table: AppCore

pk              sk                  type        data
EMP#acme        META                employer    name, ...
EMP#acme        EMP#e1              employee    name, email
EMP#acme        APP#app_42          application status, planId

GSI1 (ApplicationIdIndex):
gsi1pk          gsi1sk
APP#app_42      META                → find app without knowing employer pk
```

```ts
// Write application under employer partition
await put({
  pk: "EMP#acme",
  sk: "APP#app_42",
  gsi1pk: "APP#app_42",
  gsi1sk: "META",
  status: "draft",
});
```

---

## Avoid

- Single-table design before you've listed all access patterns (databases/12)
