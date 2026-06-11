# What is middleware in Express (or similar)?

**Target time:** 30–45 seconds

---

## Talk track

> **Middleware** = functions that sit **in the request pipeline** — each receives `(req, res, next)` in Express or `request/reply` hooks in **Fastify** — can read/modify request, short-circuit with response, or pass on.
>
> **Uses:** auth, logging, parsing JSON body, CORS, rate limits, request IDs, error wrapping.
>
> **Order matters** — first registered runs first. Auth before route handler; error handler last.
>
> At Atlys we used **Fastify plugins/hooks** — same concept as Express middleware, often faster and schema-first.

---

## Code (Express)

```js
app.use((req, res, next) => {
  req.requestId = crypto.randomUUID();
  next();
});

app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));
```

## Code (Fastify)

```ts
fastify.addHook("onRequest", async (request) => {
  request.requestId = crypto.randomUUID();
});

fastify.register(require("@fastify/rate-limit"), { max: 100, timeWindow: "1 minute" });
```

---

## Avoid

- Forgetting to call `next()` in Express (request hangs)
