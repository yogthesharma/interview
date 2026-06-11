# What makes a senior Flask engineer hirable — your bar?

**Target time:** 45–60 seconds

---

## Talk track

> **My bar for senior backend / Flask IC:**
>
> 1. **Production hygiene** — factory pattern, config by env, Gunicorn, structured logs, safe errors, health checks
> 2. **Clear layering** — thin routes, testable services, no SQL in views
> 3. **Data discipline** — transactions, migrations (Alembic), N+1 awareness, tenant isolation
> 4. **Security defaults** — secrets out of repo, auth on every mutating route, input validation
> 5. **Operability** — request IDs, knows what breaks first under load, Celery for long jobs
> 6. **Pragmatism** — Flask vs FastAPI tradeoff honest; won't rewrite working WSGI stack for hype
> 7. **Communication** — explains request lifecycle and deploy path; reviews for correctness not bikeshedding
>
> **How I'd position myself:** deepest shipped depth is **Node/Fastify + React** at product scale; Flask patterns are the **same senior habits** — I'd ramp fast on your Python specifics in the first sprint.
>
> **Red flags:** debug mode in prod, global mutable state, no tests on money paths, "we'll add auth later."

---

## Bullet spine

- Structure + factory + blueprints
- WSGI deploy + Docker + logging
- DB sessions + auth + scaling instincts
- Honest about primary stack, strong transferable IC bar

---

## Avoid

- Pretending 10 years Flask if your depth is Node — interviewers prefer honest transfer
