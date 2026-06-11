# App Store / TestFlight submission — your experience?

**Target time:** 30–45 seconds

---

## Talk track

> **High-level pipeline:**
> 1. **Archive** in Xcode (Release, correct scheme/signing)
> 2. Upload to **App Store Connect** (Organizer → Distribute)
> 3. **TestFlight** — internal testers (team) instant; external needs brief Beta App Review
> 4. **App Store** — metadata, screenshots, privacy nutrition labels, export compliance
> 5. Submit for review → release manual or automatic
>
> **Signing:** certificates, provisioning profiles, or **automatic signing**. **Version** (`CFBundleShortVersionString`) + **build** (`CFBundleVersion`) must increment each upload.
>
> **CI:** Fastlane `match` + `gym` + `pilot` automates upload.
>
> **My angle:** no App Store **primary** shipping on my resume — my release experience is **web deploys** (CI/CD, feature flags, rollbacks at Atlys/IQM). I understand the iOS pipeline from side projects and docs; first production iOS ship I'd pair with someone on signing/review gotchas (privacy manifest, ATT, background modes).

---

## Checklist (if pressed)

| Step | Gotcha |
|------|--------|
| Archive | Release config, bitcode off (deprecated) |
| Connect | Privacy policy URL, encryption export |
| Review | Login demo account, clear permissions copy |
| TestFlight | 90-day build expiry |

---

## Avoid

- Claiming years of App Store ownership without a shipped app
- Forgetting Privacy Manifest (`PrivacyInfo.xcprivacy`) for required APIs
