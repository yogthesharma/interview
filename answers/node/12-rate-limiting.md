# How do you rate limit an API?

**Target time:** 30–45 seconds

---

## Talk track

> **Rate limiting** caps requests per **IP / user / API key** in a time window — prevents abuse, protects DB, fair usage.
>
> **Implementations:**
> - **Middleware/plugin** — `@fastify/rate-limit`, `express-rate-limit` (often Redis-backed in multi-instance)  
> - **API Gateway / WAF** — AWS throttling at edge  
> - **Token bucket / sliding window** algorithms
>
> **Response:** `429 Too Many Requests` + `Retry-After` header.
>
> **Multi-server:** in-memory limiter per instance is wrong — use **Redis** for shared counters.

---

## Code (Fastify)

```ts
import rateLimit from "@fastify/rate-limit";

await fastify.register(rateLimit, {
  max: 100,
  timeWindow: "1 minute",
  keyGenerator: (req) => req.headers["x-api-key"] ?? req.ip,
});
```

---

## Tie to coding prep

> Same idea as `coding/functions-utilities/05-rate-limiter.js` — sliding window in memory for single instance.

---

## Avoid

- No rate limit on login endpoint (brute force risk)
