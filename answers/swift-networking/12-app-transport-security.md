# App Transport Security — when are exceptions acceptable?

**Target time:** 30 seconds

---

## Talk track

> **ATS (App Transport Security)** — default **requires HTTPS** with TLS 1.2+, forward secrecy, strong ciphers. Declared in **Info.plist**.
>
> **`NSAllowsArbitraryLoads`** — disables ATS globally — **App Store scrutiny**; avoid.
>
> **Exceptions:** `NSExceptionDomains` for specific host — legacy dev server, local hardware, CDN edge case — **document justification** for review.
>
> **Acceptable:** local dev (`localhost`), temporary migration with expiry plan, third-party SDK you can't control (minimize scope to domain).
>
> **Not acceptable:** lazy HTTP API in production because cert is hard.

---

## Code

```xml
<!-- Prefer domain-specific exception, not global -->
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>legacy.example.com</key>
    <dict>
      <key>NSExceptionAllowsInsecureHTTPLoads</key>
      <true/>
    </dict>
  </dict>
</dict>
```

---

## Avoid

- `NSAllowsArbitraryLoads` true in production shipping build
- ATS exception without HTTPS migration plan
