# Request signing — when and how?

**Target time:** 90 seconds

---

## Talk track

> **Request signing** proves a request came from a **known partner** and wasn't tampered with in transit — common for **webhooks**, **B2B APIs**, and **AWS SigV4**.
>
> **Pattern:**
> 1. Shared secret or asymmetric key pair
> 2. Canonical string: method + path + timestamp + body hash
> 3. HMAC-SHA256 (symmetric) or RSA/ECDSA (asymmetric)
> 4. Receiver recomputes signature — mismatch → reject
>
> **Always include:** timestamp + nonce/replay window — prevents replay attacks.

---

## Webhook verification (symmetric)

```ts
import { createHmac, timingSafeEqual } from "crypto";

function verifyWebhook(payload: string, signature: string, secret: string) {
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
```

**Stripe/Svix pattern:** `t=timestamp,v1=signature` — reject if timestamp > 5 min old.

---

## Symmetric vs asymmetric

| | Symmetric (HMAC) | Asymmetric (RSA/ECDSA) |
|--|------------------|------------------------|
| **Keys** | One shared secret | Public verify, private sign |
| **Use** | Webhooks between two parties | Many verifiers, one signer |
| **Rotation** | Rotate secret, dual-verify window | Key IDs in header |

---

## How this connects

| File | Why |
|------|-----|
| `api/15` | Outbound/inbound webhooks |
| `auth/10` | Secrets not in code — rotate via Secrets Manager |
| `aws/14` | SigV4 is AWS's request signing |

---

## Avoid

- MD5 or plain SHA1 without HMAC — not a secret MAC
- Comparing signatures with `===` — use timing-safe compare
- No replay window — stolen signed request works forever
