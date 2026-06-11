# What makes a senior FastAPI engineer hirable — your bar?

**Target time:** 45–60 seconds

---

## Talk track

> **My bar for senior FastAPI / Python API IC:**
>
> 1. **Correct async model** — no blocking loop; async HTTP + async DB or intentional sync routes
> 2. **DI + boundaries** — Pydantic at edge, services for rules, repos for SQL; `response_model` for outbound safety
> 3. **Operability** — lifespan for shared clients, structured logs, request IDs, safe exception mapping
> 4. **Auth + multi-tenant** — Depends-based auth; tenant on every query
> 5. **Job hygiene** — Celery for durable work; `BackgroundTasks` only for trivial post-response chores
> 6. **API product** — OpenAPI accurate, versioning, consistent errors — partners can integrate
> 7. **Pragmatism** — knows when Flask/WSGI is fine; doesn't async-for-fashion
>
> **How I'd position myself:** production depth on **Fastify + TypeScript** — validation, plugins, thin routes. FastAPI feels like the same architecture with Pydantic instead of Zod. I'd be productive quickly on your Python services.
>
> **Red flags:** sync ORM in every `async def`, secrets in repo, no `response_model`, giant endpoints.

---

## Bullet spine

- Lifecycle + DI + Pydantic contracts
- Async discipline + tenant isolation
- Durable jobs vs BackgroundTasks
- Honest Fastify transfer + senior IC bar

---

## Avoid

- Overselling Python years — sell transferable API engineering instead
