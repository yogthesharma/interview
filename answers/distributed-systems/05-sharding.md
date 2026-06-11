# Sharding — when and how?

**Target time:** 90 seconds

---

## Talk track

> **Sharding** = split data across nodes by a **shard key** so no single DB holds everything.
>
> **When you need it:** single-node limits — storage, write throughput, hot indexes. Don't shard day one.
>
> **Shard key matters most:**
> - Good: `tenantId`, `userId` — spreads load, keeps tenant data co-located
> - Bad: `createdAt` only — hot shard on "today"
>
> **Costs:**
> - Cross-shard queries become expensive (scatter-gather)
> - Resharding is painful — plan key space upfront
> - Joins across shards → application-level joins or denormalize
>
> **DynamoDB angle:** partition key **is** your shard key — design access patterns first (`databases/12`).

---

## vs alternatives

```
Before sharding:
  1. Vertical scale (bigger instance)
  2. Read replicas
  3. Cache hot paths (Redis)
  4. Archive cold data
Then shard when metrics prove you must
```

---

## How this connects

| File | Why |
|------|-----|
| `databases/10-11` | DynamoDB partition/sort keys |
| `aws/22` | Multi-tenant isolation patterns |
| `architecture-tradeoffs/06` | Monolith + one DB often enough longer than people admit |

---

## Avoid

- Sharding because it's trendy — operational tax is real
- Shard key you can't query on — every request becomes multi-shard
