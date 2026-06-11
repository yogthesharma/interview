# How do you optimize API latency?

**Target time:** 45 seconds

---

## Talk track

> **Reduce work per request:** indexes on DB, avoid N+1 queries, select only needed columns, pagination not full dumps.
>
> **Reduce round trips:** batch endpoints, `Promise.all` for independent calls, GraphQL/BFF only if it actually reduces chatter.
>
> **Cache** hot reads (in-memory, Redis, CDN for GET).
>
> **Async** slow paths — return 202 + job id for PDF generation (B2B SaaS-style), not block HTTP 30s.
>
> **Edge/regions** — deploy API close to users and DB when latency matters.
>
> **Client:** React Query `staleTime` avoids hammering same endpoint.

---

## Code

```ts
// Parallel independent calls — wall clock = slowest, not sum
const [user, settings] = await Promise.all([
  fetchUser(id),
  fetchSettings(id),
]);

// Pagination — don't SELECT * FROM applications LIMIT 100000
GET /applications?page=1&pageSize=20
```

---

## Avoid

- Caching mutations or personalized data incorrectly
