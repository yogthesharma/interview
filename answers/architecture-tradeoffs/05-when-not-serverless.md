# When would you NOT use serverless?

**Target time:** 90 seconds

---

## Talk track

> Serverless (Lambda) wins for **spiky, short, stateless** work. Skip it when constraints fight you.
>
> **Don't default to Lambda when:**
> - **Long-running** jobs (>15 min) — PDF batches, big ETL
> - **Steady high throughput** — always-on ECOS/container cheaper than per-invoke tax
> - **Cold start latency** matters on user-facing sync path (`aws/03`)
> - **Large dependencies** — 250MB package, slow cold starts
> - **Persistent connections** — WebSockets, heavy connection pools to DB
> - **Predictable CPU-bound** work — image processing cheaper on dedicated workers
> - **Local dev ergonomics** — team hates SAM emulation, wants Docker compose
>
> **Hybrid is normal:** API Gateway + Lambda for HTTP + ECS/Fargate for workers + SQS glue.

---

## Decision sketch

| Workload | Lean |
|----------|------|
| Webhook handler, cron, SQS consumer | Lambda |
| 24/7 API at steady 500 RPS | Containers + ALB |
| WebSocket chat | ECS / API GW WebSocket + DynamoDB |
| 30-min report generation | Fargate batch or Step Functions + Glue |

---

## Senior IC framing

> At Uniblox-style scale I'd still use Lambda for event handlers and keep a **modular monolith or container API** for complex synchronous flows — not 200 Lambdas for every route.

---

## How this connects

| File | Why |
|------|-----|
| `system-design/16` | Serverless vs containers tradeoffs |
| `aws/03-04` | Cold starts and limits |
| `architecture-tradeoffs/01` | Same "don't resume-drive" theme |

---

## Avoid

- Lambda calling Lambda calling Lambda synchronously — distributed monolith with cold starts
- One VPC-attached Lambda per route — ENI scaling pain
