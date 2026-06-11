# Redis use cases?

**Target time:** 30 seconds — honest if limited hands-on

---

## Talk track

> **Redis** = in-memory data store, very fast, often used as:
>
> - **Cache** — hot DB query results, API responses  
> - **Session store** — shared across app servers  
> - **Rate limiting** — sliding window counters  
> - **Pub/sub** — lightweight messaging (not primary queue for heavy jobs)  
> - **Distributed locks** — short-lived coordination  
> - **Job queues** — with Bull/BullMQ on top of Redis
>
> **Honest:** I understand these patterns from architecture; most direct experience is **client-side + React Query** caching. I'd pair with platform team on Redis on the team scale.

---

## Code (rate limit key pattern)

```ts
// Conceptual: INCR key with EXPIRE window
// key: `ratelimit:${userId}:${minute}`
```

---

## Avoid

- Using Redis as primary database for all data
