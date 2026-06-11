# What is idempotency? Why does it matter?

**Target time:** 30–45 seconds

---

## Talk track

> **Idempotent** = performing the same operation **multiple times** has the **same effect** as once — no duplicate side effects.
>
> **Why it matters:**
> - Clients **retry** on timeout/network blip  
> - Mobile apps **double-tap** submit  
> - Webhooks delivered **at-least-once**
>
> Without idempotency, retry creates **duplicate applications, charges, emails**.
>
> **How:** `Idempotency-Key: <uuid>` header on POST — server stores key → response mapping; replay returns same result without re-processing.

---

## Code

```http
POST /v1/applications
Idempotency-Key: 7f3c8b2a-...

{ "employeeId": "e1" }
```

```ts
// Server: INSERT idempotency_keys (key, response, status) ON CONFLICT return cached
```

---

## Role-specific angle

> EOI submit from employer portal — network retry must not create two applications for same employee + enrollment window.

---

## Avoid

- Assuming POST is safe to retry without a key
