# How do you manage environment variables?

**Target time:** 30–45 seconds

---

## Talk track

> **Config via environment** — 12-factor app style. Different values per **dev / staging / prod** without code changes.
>
> **Local:** `.env` file (gitignored), loaded by `dotenv` or framework. **Never commit secrets.**
>
> **Prod:** platform injects env — AWS Lambda config, ECS task def, Vercel, etc. Or **Secrets Manager / Parameter Store** for sensitive values, referenced at deploy.
>
> **Validate at startup** — parse with Zod/env-schema; **fail fast** if `DATABASE_URL` missing, not on first request.
>
> Boson lesson: pre-commit / doctor checks for leaked `.env`.

---

## Code

```ts
// config/env.ts
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

export const env = envSchema.parse(process.env);
```

---

## Avoid

- Hardcoding API keys in source
- Different secret per developer committed to repo
