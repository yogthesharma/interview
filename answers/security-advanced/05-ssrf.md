# SSRF — Server-Side Request Forgery

**Target time:** 90 seconds

---

## Talk track

> **SSRF** = attacker tricks **your server** into making HTTP requests to URLs **they** choose — often internal (`169.254.169.254` AWS metadata, `localhost`, internal admin APIs).
>
> **Common entry points:**
> - "Import from URL" feature (PDF, image, webhook tester)
> - Webhook callback URL supplied by user
> - PDF/HTML renderers fetching remote resources
> - Proxy/gateway that forwards requests
>
> **Impact:** steal cloud credentials (IMDS), scan internal network, hit admin endpoints without auth from outside.

---

## Defenses

```
1. Allowlist destinations — not blocklist (blocklists lose)
2. Disable redirects or limit hops
3. Resolve DNS then check IP is public (beware DNS rebinding)
4. No raw user URL — use pre-signed uploads instead
5. Network: egress firewall, IMDSv2 on EC2, private subnets
6. Separate fetch service with no IAM role
```

---

## AWS metadata example (why it matters)

```
Attacker sets webhook URL = http://169.254.169.254/latest/meta-data/iam/security-credentials/
Your server fetches it → attacker gets temp AWS keys
```

**Mitigation:** IMDSv2 (session-oriented), block link-local in egress, never pass user URLs to server-side fetch.

---

## How this connects

| File | Why |
|------|-----|
| `api/15` | Webhook design — validate callback URLs |
| `auth/07` | Input validation extends to URLs |
| `aws/14` | IAM blast radius if SSRF succeeds |

---

## Avoid

- `fetch(userSuppliedUrl)` in admin tools without sandboxing
- Assuming "internal" hostnames are safe — attacker uses DNS rebinding
