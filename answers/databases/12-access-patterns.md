# What are access patterns?

**Target time:** 45–60 seconds

---

## Talk track

> **Access pattern** = how your app **reads/writes** data — list the queries **before** schema design.
>
> **SQL:** schema first, queries flexible with indexes.  
> **DynamoDB:** **access patterns first**, schema follows — each pattern needs PK/SK or GSI support.

> **Example — enrollment platform:**
> 1. Get application by id  
> 2. List applications for employer, filter status, sort by date  
> 3. List quotes for application  
> 4. Idempotency lookup by key  
> 5. Audit events by application (time-ordered)

> **Mapping:**
> - 1, 2, 3 → Postgres + indexes (Prisma) — natural fit  
> - 4, 5 → DynamoDB or Postgres depending on volume  
> - DynamoDB: pattern 1 needs GSI if PK is employer-scoped

> **Interview line:** "I'd write access patterns on the whiteboard, then choose SQL vs DynamoDB per pattern."

---

## Code

```markdown
| Pattern | Operation | Store | Key / Index |
|---------|-----------|-------|-------------|
| List apps | Query | Postgres | idx (employerId, status, createdAt) |
| Get app by id | Get | Postgres | PK id |
| Idempotency | Get/Put | DynamoDB | pk = KEY#uuid |
| Webhook dedup | Get/Put | DynamoDB | pk = EVT#id |
```

---

## Avoid

- Designing DynamoDB then discovering you need full-table scan for reports
