# How do you handle uncaught exceptions?

**Target time:** 30–45 seconds

---

## Talk track

> **Uncaught exception** = bug escaped try/catch — process may be in **undefined state**.
>
> **Node best practice:**
> - `process.on("uncaughtException")` — **log, graceful shutdown**, don't pretend you can continue safely for long  
> - `process.on("unhandledRejection")` — log Promise rejections; in modern Node may terminate  
> - **Prevent** — global error handler in HTTP layer, `async` routes wrapped, lint rules
>
> **Production:** let process manager (**PM2, K8s, Lambda**) restart clean instance. **Alert** on crash.
>
> **Lambda:** unhandled rejection fails invocation → CloudWatch error → DLQ if configured.

---

## Code

```ts
process.on("uncaughtException", (err) => {
  logger.fatal(err, "uncaughtException");
  shutdown().finally(() => process.exit(1));
});

process.on("unhandledRejection", (reason) => {
  logger.fatal({ reason }, "unhandledRejection");
  shutdown().finally(() => process.exit(1));
});
```

---

## Avoid

- Empty handler that swallows errors and keeps running corrupted state
