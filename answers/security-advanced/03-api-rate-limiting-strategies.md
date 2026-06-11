# API rate limiting strategies

**Target time:** 90 seconds

---

## Talk track

> **Rate limiting** protects APIs from abuse, noisy neighbors, and accidental retry storms.
>
> | Strategy | How | Best for |
> |----------|-----|----------|
> | **Fixed window** | N requests per minute | Simple; boundary burst at window edge |
> | **Sliding window** | Rolling count | Smoother; Redis `INCR` + TTL |
> | **Token bucket** | Refill tokens at rate R | Allows controlled bursts |
> | **Leaky bucket** | Queue + steady drain | Smooth output rate |
>
> **Scope limits separately:**
> - Per IP (anonymous)
> - Per API key / user
> - Per tenant (`employerId`) — multi-tenant fairness
> - Per endpoint (expensive vs cheap)

---

## Response contract

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 12
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1717841700
```

Return **429** not 403 — client knows to backoff (`javascript-async` exponential backoff).

---

## Where to enforce

```
Edge: API Gateway usage plan, CloudFront, WAF
App:  middleware (Fastify hook) — tenant-aware
Downstream: protect DB from N+1 fanout per request
```

---

## How this connects

| File | Why |
|------|-----|
| `node/12` | Node rate limiting basics |
| `performance-scalability/06` | Redis counters |
| `aws/05` | API Gateway throttling |

---

## Avoid

- Rate limiting only by IP behind corporate NAT — blocks innocent users
- 429 without `Retry-After` — clients hammer harder
