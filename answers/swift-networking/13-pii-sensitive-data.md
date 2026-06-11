# Handling sensitive / PII data on device?

**Target time:** 45–60 seconds

---

## Talk track

> **Minimize** — don't download/store PII you don't need; redact logs and crash breadcrumbs.
>
> **At rest:** Keychain for secrets; encrypted Core Data / file protection `NSFileProtectionComplete` for sensitive files; no PII in UserDefaults, screenshots, or app switcher (hide sensitive fields).
>
> **In transit:** HTTPS, cert validation, optional pinning for high risk.
>
> **In memory:** clear buffers after use; avoid global caches of SSN/passport; background snapshot blur for sensitive screens (`isSecureTextEntry`, privacy screen overlay).
>
> **Compliance:** GDPR delete flows, data retention TTL, export user data. **Insurance/visa domain** — treat application payloads like production secrets (relevant to Uniblox-style roles).

---

## Checklist

- [ ] PII out of logs/analytics
- [ ] Keychain for tokens
- [ ] File protection on exports/PDFs
- [ ] Remote wipe / logout clears local cache

---

## Avoid

- Storing full application JSON with SSN in plain Documents folder
- Analytics properties with email/phone
