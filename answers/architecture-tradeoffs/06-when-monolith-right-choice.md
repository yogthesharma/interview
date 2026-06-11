# When is a monolith the right long-term choice?

**Target time:** 90 seconds

---

## Talk track

> Monolith isn't a sin — **bad boundaries** are. Many profitable products run modular monoliths for years.
>
> **Monolith stays right when:**
> - Core domain is **tightly coupled** — insurance application + quote + enrollment share invariants
> - Team can **ship daily** from one repo without coordination tax
> - **Transactions** across entities are common — one Postgres commit beats saga
> - Traffic fits **vertical scale + read replicas + cache**
> - You optimize for **developer speed** over independent blast radius
>
> **Modular monolith discipline:**
> - Clear modules (`applications/`, `quotes/`, `notifications/`)
> - No cross-module DB table access — use internal APIs/events
> - Extract service **only** when module has stable API + separate owner

---

## Extract triggers (from `system-design/15`)

```
□ Team boundary — separate squad owns quotes
□ Scale — PDF service needs 8GB RAM
□ Compliance — audit-isolated data plane
□ Deploy — quote rules ship 10x/day, core API monthly
```

Until then: **one deployable, many modules**.

---

## Your projects map

| Project | Shape |
|---------|-------|
| Atlys / IQM | Monolith or few services — honest |
| Boson | Local-first single binary + UI — extreme monolith win |

---

## Avoid

- "We'll microservice later" with spaghetti imports — modularize **now**
- Splitting on technical layer (API service + DB service) instead of domain
