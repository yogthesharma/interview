# Monolith vs microservices — tradeoffs?

**Target time:** 8–10 min

---

## Talk track

| | **Monolith** | **Microservices** |
|--|--------------|-------------------|
| **Deploy** | One unit | Independent services |
| **Complexity** | Lower early | Network, observability, versioning |
| **Scale** | Scale whole app | Scale hot service only |
| **Team** | Small team wins | Many teams, clear boundaries |
| **Data** | One DB, transactions easy | Distributed transactions hard |
| **Debug** | Stack trace in one repo | Distributed tracing needed |

> **Senior IC take:** start **modular monolith** (clear modules: applications, quotes, notifications) — split to services when **team size, scale, or deploy cadence** force it. At startup scale may be monolith + async workers, not 50 microservices day one.

---

## B2B SaaS-style pragmatic split

```
Modular monolith API (Fastify + Prisma)
  + async workers (Lambda or same repo workers on SQS)
  + EventBridge for cross-cutting notify
Split later: quote service if carrier integration team owns it
```

---

## When microservices make sense

- Independent deploy cadence per domain  
- Different scaling (PDF gen vs API)  
- Polyglot needs (rare)

---

## Avoid

- Microservices on day 1 for resume-driven architecture
