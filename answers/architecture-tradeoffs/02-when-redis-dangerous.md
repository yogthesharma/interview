# When does Redis become dangerous?

**Target time:** 90 seconds

---

## Talk track

> Redis is fast until it's your **single point of failure**, **source of truth**, or **consistency lie**.
>
> **Dangerous patterns:**
>
> | Pattern | Risk |
> |---------|------|
> | **Primary database** | No durable transactions you trust; memory limits; data loss on eviction |
> | **Cache without TTL/invalidation** | Stale quotes, wrong permissions, phantom "enrolled" status |
> | **Distributed lock without fencing** | Split-brain double-processing |
> | **Pub/sub for critical workflows** | No persistence — message gone if subscriber down |
> | **Session store with no HA** | Redis dies → everyone logged out |
> | **Rate limit as only abuse control** | Attacker rotates IPs; need WAF + auth too |
>
> **Memory pressure:** `allkeys-lru` evicts your "cache" that was secretly required state.

---

## Safer Redis usage

```
✓ Cache with TTL + explicit invalidation on write
✓ Ephemeral rate counters
✓ Short-lived distributed locks WITH TTL + idempotent workers
✓ Bull queue — but DLQ and monitoring required
✗ "We'll add Postgres later" for business data
```

---

## Your honest angle

> I know Redis patterns architecturally; hands-on depth is cache + rate limit concepts. I'd pair with platform on cluster sizing and persistence mode (AOF/RDB).

---

## How this connects

| File | Why |
|------|-----|
| `performance-scalability/06` | Legitimate Redis use cases |
| `architecture-tradeoffs/03` | Cache staleness bugs |
| `distributed-systems/06` | Locks vs leader election |

---

## Avoid

- `FLUSHALL` in shared instance — yes it happened to someone
- Infinite TTL on "cache" that business logic now depends on
