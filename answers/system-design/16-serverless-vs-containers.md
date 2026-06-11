# Serverless vs containers — tradeoffs?

**Target time:** 8–10 min

---

## Talk track

| | **Serverless (Lambda)** | **Containers (ECS/Fargate/K8s)** |
|--|-------------------------|----------------------------------|
| **Ops** | Minimal | Patch, scale config, more control |
| **Scale** | Auto per invoke | HPA, task count |
| **Cold start** | Yes | Warm pools |
| **Duration** | Max 15 min | Always-on |
| **Cost** | Pay per use | Pay for running tasks |
| **State** | Stateless | Can hold connections |

---

## Decision guide

```
Lambda:
  - Event handlers, cron, webhooks, SQS workers
  - Spiky traffic, low ops headcount
  - Short request/response (< 29s API GW)

Containers (Fastify on Fargate):
  - Main REST API, WebSockets, Prisma connection pool
  - Predictable latency (no cold start)
  - Long-running quote polling loops
```

> **My Atlys angle:** production API on long-running Node; Lambda for async edges — **both**, not either/or.

---

## Interview answer

> *"I'd put the enrollment API on **containers or a modular monolith** for consistent latency and Prisma pooling, and **Lambda + SQS** for quote requests, emails, and PDF generation that scale independently."*

---

## Avoid

- All-Lambda API with heavy cold starts for user-facing sync paths
