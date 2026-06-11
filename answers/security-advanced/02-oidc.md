# OIDC — how is it different from OAuth2?

**Target time:** 60–90 seconds

---

## Talk track

> **OAuth2** answers: "Can this app access this API?"  
> **OIDC (OpenID Connect)** answers: "Who is this user?" — built **on top of** OAuth2.
>
> **Key addition:** **ID Token** (JWT) with identity claims — `sub`, `email`, `name`, `iss`, `aud`.
>
> ```
> OAuth2 alone  → access_token (call APIs)
> OIDC          → access_token + id_token (who logged in) + optional userinfo endpoint
> ```
>
> **Employer SSO (B2B SaaS):** Okta/Azure AD via OIDC — user lands in your app with `employerId` in claims or mapped from org.

---

## ID token vs access token

| Token | Purpose | Send to |
|-------|---------|---------|
| **ID token** | Prove authentication to **your app** | Your frontend/backend session setup only |
| **Access token** | Call **resource APIs** | API `Authorization` header |

> **Never** use ID token to call arbitrary APIs — wrong audience, wrong lifetime semantics.

---

## Validation checklist

- Verify signature (JWKS from `iss`)
- Check `aud` matches your client ID
- Check `exp`, `nonce` (replay)
- Map `sub` to internal user record

---

## How this connects

| File | Why |
|------|-----|
| `security-advanced/01` | OAuth2 foundation |
| `auth/01` | JWT structure same family as ID token |
| `auth/11` | Map OIDC org → tenant |

---

## Avoid

- Treating ID token as session forever — still short-lived; use your session or refresh
- Skipping `aud` validation — token meant for another app
