# Caching strategies — where and what to cache?

**Target time:** 45 seconds

---

## Talk track

> **Layers:**
>
> 1. **Browser** — `Cache-Control`, ETag for static assets; React Query for API response cache in memory  
> 2. **CDN** — static JS/CSS/images, some public GET APIs  
> 3. **Application** — in-process cache for config, feature flags (short TTL)  
> 4. **Redis** — shared cache across instances: sessions, rate limits, hot DB reads  
> 5. **Database** — query result cache / materialized views (DB-specific)
>
> **What to cache:** read-heavy, relatively stable, expensive to compute. **TTL + invalidation** on writes.
>
> **What not to cache:** user-specific sensitive data without careful keys, rapidly changing data without invalidation strategy.

---

## Code

```ts
// HTTP cache header (static asset)
Cache-Control: public, max-age=31536000, immutable

// React Query — client cache
useQuery({
  queryKey: ["tenant", tenantId, "config"],
  queryFn: () => fetchConfig(tenantId),
  staleTime: 5 * 60 * 1000,
});
```

---

## Avoid

- Cache forever with no invalidation story
