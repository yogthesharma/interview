# What is horizontal vs vertical scaling?

**Target time:** 30 seconds

---

## Talk track

> **Vertical scaling (scale up):** bigger machine — more CPU/RAM on one server. Simpler until you hit hardware limits.
>
> **Horizontal scaling (scale out):** **more instances** behind a load balancer. Better for cloud/serverless — Lambda auto-scales instances; ECS/K8s adds pods.
>
> **Tradeoffs:** horizontal needs **stateless apps**, shared session/cache (Redis), connection pooling, idempotent handlers. Vertical is quick fix but has a ceiling.
>
> B2B SaaS-style **event-driven Lambdas** = horizontal by default.

---

## Code (mental model)

```text
Vertical:   1 server 4GB → 1 server 32GB

Horizontal: 1 server → 10 servers + ALB
            Lambda: concurrency limit 1000 → AWS spins more execution environments
```

---

## Avoid

- "Serverless doesn't scale" — it scales horizontally with limits/concurrency config
