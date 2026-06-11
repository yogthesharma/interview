# How do you validate request bodies?

**Target time:** 45 seconds

---

## Talk track

> **Never trust client input** — validate **shape, types, ranges** before business logic.
>
> **Approaches:**
> - **Fastify JSON Schema** — declarative, auto 400 responses, fast (AJV)  
> - **Zod / Joi / Yup** — parse in handler or middleware  
> - **OpenAPI** — contract + validation aligned with docs
>
> **Return 400** with clear field errors — `{ "fieldErrors": { "email": "Invalid" } }`.
>
> **Separate:** validation (400) vs auth (401/403) vs business rules (409).

---

## Code (Fastify + JSON Schema)

```ts
const createUserSchema = {
  body: {
    type: "object",
    required: ["email", "name"],
    properties: {
      email: { type: "string", format: "email" },
      name: { type: "string", minLength: 1, maxLength: 100 },
    },
    additionalProperties: false,
  },
};

fastify.post("/users", { schema: createUserSchema }, handler);
```

## Code (Zod)

```ts
const body = createUserSchema.parse(request.body); // throws → map to 400
```

---

## Avoid

- `if (!body.email) return` ad-hoc only on complex payloads
