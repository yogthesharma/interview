# How do you document APIs?

**Target time:** 30–45 seconds

---

## Talk track

> **OpenAPI (Swagger)** — machine-readable spec → interactive docs, client SDK generation, contract tests.
>
> **What to document:**
> - Endpoints, methods, auth  
> - Request/response schemas + examples  
> - Status codes and error shapes  
> - Pagination, filtering, rate limits  
> - Changelog / deprecation policy
>
> **Fastify:** `@fastify/swagger` + `@fastify/swagger-ui` from route schemas (JSON Schema / Zod → schema).
>
> **Living docs** beat wiki — spec generated from code or validated in CI against implementation.

---

## Code

```ts
fastify.get("/v1/applications/:id", {
  schema: {
    params: { type: "object", properties: { id: { type: "string" } } },
    response: {
      200: { type: "object", properties: { id: { type: "string" }, status: { type: "string" } } },
      404: { $ref: "Error#" },
    },
  },
}, handler);
```

---

## Avoid

- Docs that drift from production — validate spec in CI
