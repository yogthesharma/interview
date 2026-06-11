# When is DynamoDB a bad fit?

**Target time:** 45 seconds

---

## Talk track

> **Bad fit when:**
> - **Ad-hoc analytics** — complex aggregations, GROUP BY, JOINs across entities → use **warehouse** (Redshift, BigQuery) or Postgres reports  
> - **Unpredictable query patterns** — need flexible filters on many columns → SQL + indexes  
> - **Strong relational model** — many FKs, referential integrity central → Postgres  
> - **Small app / low traffic** — DynamoDB modeling overhead not worth it; RDS/Postgres simpler  
> - **Multi-item consistency across many entities** — limited vs SQL transactions  
> - **Large items / heavy blob storage** — use S3; metadata in DB

> **Good fit recap:** known keys, high scale, serverless, event/idempotency stores.

> **Example:** core enrollment relational; events/webhooks/scaling edges on DynamoDB + queues.

---

## Code

```sql
-- This is painful in DynamoDB — easy in SQL
SELECT e.name, COUNT(a.id), AVG(q.premium)
FROM employers e
JOIN employees emp ON emp.employer_id = e.id
JOIN applications a ON a.employee_id = emp.id
JOIN quotes q ON q.application_id = a.id
WHERE e.region = 'US'
GROUP BY e.id, e.name;
```

---

## Avoid

- "We're on AWS so everything in DynamoDB"
