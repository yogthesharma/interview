# What is normalization?

**Target time:** 45 seconds

---

## Talk track

> **Normalization** = organize tables to **reduce redundancy** and **update anomalies**.
>
> **Example without normalization:** store employer name on every application row → rename employer = update thousands of rows.
>
> **Normal forms (know 1–3 in interview):**
> - **1NF** — atomic columns, no repeating groups  
> - **2NF** — no partial dependency on composite key  
> - **3NF** — no transitive dependency (city stored only on address table, not duplicated oddly)
>
> **Tradeoff:** highly normalized = more JOINs. Sometimes **denormalize** read-heavy fields (cache column, materialized view) for perf — consciously.

---

## Code

```sql
-- Normalized
employers (id, name)
employees   (id, employer_id, name, dob)
applications (id, employee_id, plan_id, status)

-- Denormalized read optimization (optional)
applications (..., employer_name_snapshot)  -- set at create, for list UI speed
```

---

## Avoid

- Denormalizing everything "for speed" without measuring
