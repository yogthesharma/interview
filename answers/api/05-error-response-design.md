# How do you design error responses?

**Target time:** 30–45 seconds

---

## Talk track

> **Consistent shape** across the API — clients parse predictably.
>
> **Include:**
> - `error` or `message` — human-readable summary  
> - `code` — machine-readable (`APPLICATION_ALREADY_SUBMITTED`)  
> - `fieldErrors` — validation per field  
> - `requestId` — support/debug correlation  
> - **Never** stack traces in prod
>
> **RFC 7807** (`application/problem+json`) — optional standard format for problem details.
>
> Same pattern I use in Fastify `setErrorHandler` — map `AppError` to status + JSON body.

---

## Code

```json
{
  "error": "Validation failed",
  "code": "VALIDATION_ERROR",
  "requestId": "req_abc123",
  "fieldErrors": {
    "dateOfBirth": "Must be in the past"
  }
}
```

```ts
reply.status(409).send({
  error: "Application already submitted",
  code: "APPLICATION_ALREADY_SUBMITTED",
  requestId: request.id,
});
```

---

## Avoid

- Different JSON shape per endpoint
