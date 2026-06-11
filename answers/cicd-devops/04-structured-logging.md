# What is structured logging?

**Target time:** 20–30 seconds

---

## Talk track

> **Structured logging** means logs as **machine-readable key-value data** (usually JSON), not just `console.log("error happened")`.
>
> Example: `{ "level": "error", "message": "Payment failed", "userId": "...", "orderId": "...", "requestId": "abc-123" }`
>
> **Why it matters:** you can **search, filter, and alert** in CloudWatch/Datadog — "show all errors for orderId X" — instead of grep-ing prose strings across services.
>
> In Node/Fastify work I've used **pino** or similar — log objects, not concatenated strings. Same idea applies across Lambda services on the team scale.

---

## Avoid

- Only describing `console.log` without structure
