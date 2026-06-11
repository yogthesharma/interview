# Connection pooling — SQLAlchemy pool size tuning basics?

**Target time:** 30–45 seconds

---

## Talk track

> **Pool** — reuse DB connections instead of TCP+auth per query.
>
> **Key settings (`create_engine`):**
> - `pool_size` — steady connections kept open
> - `max_overflow` — extra connections under burst
> - `pool_pre_ping` — test connection before use (stale connection recovery)
> - `pool_recycle` — recycle connections after N seconds (RDS idle timeout)
>
> **Sizing rule of thumb:**  
> `pool_size + max_overflow` per process × **number of worker processes** ≤ Postgres `max_connections` (minus admin margin).
>
> **Example:** Gunicorn 4 workers, `pool_size=5`, `max_overflow=10` → up to 60 connections — know your DB limit.
>
> **Symptom of too small:** `TimeoutError: QueuePool limit reached`. **Too large:** DB rejects connections, hurts Postgres.

---

## Code

```python
engine = create_engine(
    settings.DATABASE_URL,
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True,
    pool_recycle=1800,
)
```

---

## Avoid

- Default pool × 20 Uvicorn workers without checking RDS `max_connections`
