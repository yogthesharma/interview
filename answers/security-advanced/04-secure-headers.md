# Secure headers — which ones matter?

**Target time:** 60–90 seconds

---

## Talk track

> **HTTP security headers** = browser-enforced policies. Cheap win on any web app.
>
> | Header | What it does |
> |--------|--------------|
> | `Strict-Transport-Security` | Force HTTPS (max-age, includeSubDomains) |
> | `Content-Security-Policy` | Restrict script/style/load sources — **best XSS mitigation** |
> | `X-Content-Type-Options: nosniff` | Stop MIME sniffing |
> | `X-Frame-Options` / `frame-ancestors` | Clickjacking protection |
> | `Referrer-Policy` | Leak less URL data to third parties |
> | `Permissions-Policy` | Disable camera/mic/geolocation if unused |
>
> **Cookies:** `Secure`, `HttpOnly`, `SameSite=Lax` (or Strict for sensitive)

---

## Minimal CSP starter (tighten per app)

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-ancestors 'none'
```

Start report-only (`Content-Security-Policy-Report-Only`) before enforcing.

---

## API vs SPA

- **SPA static hosting (S3/CloudFront):** headers on CDN
- **JSON API:** HSTS + `X-Content-Type-Options`; CSP less critical on pure JSON
- **Don't** set `Access-Control-Allow-Origin: *` with credentials (`auth/05`)

---

## How this connects

| File | Why |
|------|-----|
| `auth/08` | CSP complements XSS prevention |
| `auth/09` | SameSite cookies vs CSRF |
| `auth/03` | HttpOnly for refresh tokens |

---

## Avoid

- `Access-Control-Allow-Origin: *` + `Allow-Credentials: true` — invalid and dangerous
- Copy-paste CSP from blog without testing — breaks inline scripts and third-party widgets
