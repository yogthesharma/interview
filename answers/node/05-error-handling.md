# How do you handle errors in Express?

**Target time:** 45 seconds — Fastify included

---

## Talk track

> **Goals:** consistent JSON errors, correct status codes, log with context, don't leak stack traces to clients in prod.
>
> **Patterns:**
> - **try/catch** in async handlers OR pass errors to `next(err)` (Express)  
> - **Central error middleware** — maps `AppError` → 400/404/409, unknown → 500  
> - **Fastify `setErrorHandler`** — same idea, built-in async support  
> - **Operational vs programmer errors** — validation = 400; bug = 500 + alert
>
> **Never** leave rejected promises unhandled in route handlers (Express 4 needs `async` wrapper or express-async-errors).

---

## Code (Express)

```js
app.use((err, req, res, next) => {
  const status = err.statusCode ?? 500;
  logger.error({ err, requestId: req.requestId }, err.message);
  res.status(status).json({
    error: err.expose ? err.message : "Internal server error",
    requestId: req.requestId,
  });
});
```

## Code (Fastify)

```ts
class AppError extends Error {
  constructor(public statusCode: number, message: string, public expose = true) {
    super(message);
  }
}

fastify.setErrorHandler((err, request, reply) => {
  const status = err instanceof AppError ? err.statusCode : 500;
  request.log.error(err);
  reply.status(status).send({
    error: status < 500 ? err.message : "Internal server error",
  });
});
```

---

## Avoid

- Sending full stack trace to client in production
