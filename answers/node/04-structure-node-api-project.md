# How do you structure a Node API project?

**Target time:** 45 seconds

---

## Talk track

> **Layered, boring, clear** — scales better than "everything in server.js":
>
> ```
> src/
>   app.ts          # build server, register plugins
>   server.ts       # listen()
>   routes/         # HTTP handlers by domain (users, applications)
>   services/       # business logic
>   repositories/   # DB access (Prisma)
>   plugins/        # auth, db, swagger
>   schemas/        # request/response validation
>   utils/
>   config/         # env parsing
> ```
>
> **Routes thin** — parse input, call service, map errors to HTTP. **Services** hold rules. **Repos** talk to DB.
>
> **Per-domain modules** in larger apps — `modules/eoi/`, `modules/users/`.
>
> Matches how we organized **Fastify APIs** at Atlys — testable services, routes as adapters.

---

## Code (route → service)

```ts
// routes/applications.ts
fastify.post("/applications", { schema: createAppSchema }, async (req, reply) => {
  const app = await applicationService.create(req.body);
  return reply.code(201).send(app);
});

// services/applicationService.ts
export async function create(input: CreateApplicationInput) {
  return db.application.create({ data: input });
}
```

---

## Avoid

- 2000-line `index.js` with SQL inline
