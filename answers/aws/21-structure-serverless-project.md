# How do you structure a serverless project with many functions?

**Target time:** 45–60 seconds

---

## Talk track

> **Goal:** shared code, clear boundaries, deployable units — not 50 copy-paste handlers.

```
src/
  handlers/           # thin Lambda entrypoints only
    submit-application.ts
    process-quote.ts
    send-webhook.ts
  services/           # business logic (testable)
    application.ts
    quote.ts
  lib/                # shared utilities
    db.ts
    logger.ts
    errors.ts
  types/
events/               # sample payloads for local test
tests/
serverless.yml        # or cdk/ infra
```

> **Principles:**
> - **Handler thin** — parse event, call service, return response  
> - **Shared layer** or bundled monorepo package for DB client, validation (Zod)  
> - **One queue / one concern** per worker function  
> - **Env validation** at cold start (Zod on `process.env`)  
> - **Domain folders** optional at scale: `applications/`, `quotes/`

> **Monorepo variant:** `packages/core`, `packages/infra`, `services/submit` — for large teams.

---

## Code

```ts
// handlers/submit-application.ts — thin
import { submitApplication } from "../services/application";

export const handler = async (event: APIGatewayEvent) => {
  const body = JSON.parse(event.body ?? "{}");
  const result = await submitApplication(body, event.requestContext.authorizer);
  return { statusCode: 201, body: JSON.stringify(result) };
};
```

---

## Avoid

- 2000-line handler files with business logic + AWS calls intertwined
