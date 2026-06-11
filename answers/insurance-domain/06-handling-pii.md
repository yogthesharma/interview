# How do you handle PII in applications?

**Target time:** 30–45 seconds

---

## Talk track

> **Collect minimum** — only fields you need; don't store extras "just in case."
>
> **At rest & in transit** — HTTPS everywhere; encrypted storage where platform provides it (KMS, etc.).
>
> **Access control** — authn/authz on APIs; tenant isolation in multi-tenant setups at this scale.
>
> **Logs & errors** — never log SSN, health answers, full DOB in plain text; use IDs and redaction. Sentry: scrub sensitive fields.
>
> **Secrets** — env vars / secret managers, not repo. Learned this hard on Boson — local `.env`, pre-commit checks.
>
> **Frontend** — don't leak PII in URLs or localStorage longer than needed; clear on logout where applicable.
>
> **Third parties** — data processing agreements, minimal payload to vendors.

---

## Avoid

- "We logged everything for debugging"
- No mention of multi-tenant isolation for B2B platform
