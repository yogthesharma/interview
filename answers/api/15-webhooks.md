# What are webhooks? How do you design them?

**Target time:** 45 seconds

---

## Talk track

> **Webhooks** = server **pushes** events to your URL when something happens (application approved, quote ready) — opposite of client polling.
>
> **Design:**
> - **Event types** — `application.submitted`, `quote.completed`  
> - **Payload** — event id, type, timestamp, resource id + minimal data (fetch full detail via API)  
> - **Signing** — HMAC signature header (`X-Webhook-Signature`) so receiver verifies sender  
> - **Retries** — exponential backoff, dead-letter after N failures  
> - **Idempotency** — receiver dedupes on `eventId`  
> - **Ordering** — don't assume; use timestamps + versioning if order matters
>
> **Receiver:** return **2xx fast**, process async (queue).

---

## Code

```http
POST https://partner.com/webhooks/company
X-Webhook-Signature: sha256=abc...
X-Webhook-Id: evt_789

{
  "id": "evt_789",
  "type": "application.approved",
  "createdAt": "2026-06-08T12:00:00Z",
  "data": { "applicationId": "app_42" }
}
```

```ts
const expected = hmac(secret, rawBody);
if (signature !== expected) throw 401;
// if already processed evt_789 → 200 OK, skip
```

---

## Avoid

- Heavy work in webhook handler before 200 — partner will retry storm
