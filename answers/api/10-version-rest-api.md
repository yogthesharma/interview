# How do you version a REST API?

**Target time:** 30 seconds

---

## Talk track

> Same as `node/14-version-apis.md` — quick recap:
>
> **URL path `/v1/`** — most common in B2B; easy for carriers integrating once.  
> **Breaking change** → new major version; keep v1 on deprecation timeline.  
> **Non-breaking** — add optional fields, new endpoints in same version.
>
> Document changes in **changelog**; return `Sunset` / `Deprecation` headers when retiring.

---

## Code

```ts
fastify.register(v1Routes, { prefix: "/v1" });
fastify.register(v2Routes, { prefix: "/v2" });
```

---

## Avoid

- Silent breaking change on live integrators
