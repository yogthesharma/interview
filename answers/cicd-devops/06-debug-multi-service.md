# How do you debug an issue across multiple services?

**Target time:** 45 seconds

---

## Talk track

> My approach:
>
> 1. **Reproduce** — know the user action and environment (staging vs prod).  
> 2. **Find the boundary** — UI bug, API 500, async job stuck? Check network tab + API response first.  
> 3. **Correlation ID** — search logs across services for one requestId.  
> 4. **Narrow** — which service logged the first error? Follow the chain forward or backward.  
> 5. **Mitigate** — rollback, feature flag off, or workaround while fixing root cause.  
> 6. **Fix + verify** — PR, deploy, confirm in staging, monitor after prod.
>
> At Atlys/IQM I often debugged **frontend ↔ Node API** — not 20 microservices, but same skills: follow the request, read structured logs, don't assume which layer is guilty.

---

## Tie to experience

> Hardest bugs were often **async races** or **stale state** — looked like "backend wrong" until you traced timing across client and server.

---

## Avoid

- "I only debug my service" — sounds siloed for full-stack role
