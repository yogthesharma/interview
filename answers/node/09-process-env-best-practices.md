# `process.env` best practices?

**Target time:** 30 seconds

---

## Talk track

> - **Parse once at boot** into typed `config` — don't scatter `process.env.X` everywhere  
> - **Validate** required vars — Zod, envalid, `@t3-oss/env-core`  
> - **Defaults** only for non-secrets (`PORT=3000`)  
> - **Never log** secrets — redact in logger config  
> - **Strings only** — `process.env.PORT` is string; coerce to number/boolean  
> - **Don't mutate** `process.env` in app logic except tests  
> - **Document** required vars in `.env.example` (no real values)

---

## Code

```ts
// ❌ Everywhere
const port = process.env.PORT || 3000; // string | number confusion

// ✅ Once
const port = env.PORT; // number from schema

// .env.example (committed)
DATABASE_URL=postgres://localhost:5432/app
JWT_SECRET=change-me-in-local-only
```

---

## Avoid

- `process.env.JWT_SECRET!` non-null assertion with no startup check
