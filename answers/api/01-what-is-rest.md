# What is REST?

**Target time:** 30–45 seconds

---

## Talk track

> **REST** (Representational State Transfer) is a **style** for designing networked APIs using **HTTP** as the protocol.
>
> Core ideas:
> - **Resources** identified by **URLs** (`/applications/123`)  
> - **HTTP verbs** express action (GET read, POST create, etc.)  
> - **Stateless** — each request has enough context; server doesn't rely on session memory between calls  
> - **Representations** — usually JSON body; client and server agree on format  
> - Standard **status codes** communicate outcome
>
> Most "REST APIs" are **pragmatic REST** — not every Fielding constraint (HATEOAS) strictly applied.
>
> B2B SaaS-style: resources like **applications**, **employers**, **quotes** — JSON over HTTPS, event-driven behind the scenes.

---

## Code

```http
GET    /v1/applications/42     → fetch application
POST   /v1/applications        → create
PATCH  /v1/applications/42     → partial update
DELETE /v1/applications/42     → remove
```

---

## Avoid

- Calling any JSON API "REST" without resources/verbs/status discipline
