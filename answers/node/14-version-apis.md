# How do you version APIs?

**Target time:** 30–45 seconds

---

## Talk track

> **Common strategies:**
>
> 1. **URL path** — `/v1/users`, `/v2/users` — clearest, easy routing, what I see most in B2B APIs  
> 2. **Header** — `Accept: application/vnd.api.v2+json` — cleaner URLs, harder to test in browser  
> 3. **Query** — `?version=2` — rare, easy to forget
>
> **Practice:** ship **v1**, additive changes in v1 when backward compatible; **breaking changes** → v2, deprecate v1 with timeline.
>
> **Document** deprecation in changelog + `Sunset` header for clients.
>
> Multi-tenant B2B B2B — carriers integrate once; **stable versioning** matters.

---

## Code

```ts
// Fastify — separate route plugins
await fastify.register(v1Routes, { prefix: "/v1" });
await fastify.register(v2Routes, { prefix: "/v2" });
```

---

## Avoid

- Breaking changes without version bump silently
