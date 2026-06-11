# Why can caching cause bugs?

**Target time:** 90 seconds

---

## Talk track

> Caching trades **freshness** for **speed**. Bugs happen when code **forgets** something is cached.
>
> **Classic failure modes:**
>
> 1. **Stale reads** — user updates profile, UI shows old name until TTL expires  
> 2. **Cache invalidation miss** — write path updates DB but not cache key  
> 3. **Thundering herd** — TTL expires, 1000 requests hit DB at once  
> 4. **Personalization leak** — cache key missing `userId`/`tenantId` → user A sees user B data (**SEV1**)  
> 5. **Negative caching** — cache "user not found" after typo — real user can't register  
> 6. **Double source of truth** — React Query + Redis + DB disagree
>
> **Hard part:** invalidation is "one of the two hard problems in CS."

---

## Prevention habits

```
- Cache key includes tenant + resource version
- Write-through or delete-on-write for mutable data
- Short TTL + stale-while-revalidate for read-heavy
- Never cache authz decisions without tenant in key
- Document what's cached in API contract
```

---

## Frontend angle (your strength)

> React Query `staleTime` / `queryKey` with `employerId` — same mental model as server cache keys. I've debugged stale UI from wrong invalidation after mutation.

---

## How this connects

| File | Why |
|------|-----|
| `performance-scalability/05` | Caching strategies |
| `react-conceptual/` | React Query cache behavior |
| `architecture-tradeoffs/02` | Redis-specific dangers |

---

## Avoid

- Caching POST responses
- Global cache key `applications` in multi-tenant app
