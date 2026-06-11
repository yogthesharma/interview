# Code signing and notarization — high-level steps?

**Target time:** 45–60 seconds

---

## Talk track

> **Code signing** proves the app came from you and wasn't tampered with. Needs **Apple Developer ID** cert (direct) or **Mac App Distribution** (App Store).
>
> **Steps (direct download):**
> 1. Enable **Hardened Runtime** + correct entitlements
> 2. **Archive** / `xcodebuild` → sign with Developer ID Application
> 3. **Notarize** — upload to Apple (`notarytool submit`), Apple scans for malware/policy
> 4. **Staple** ticket to `.app` (`stapler staple`) so offline Gatekeeper passes
> 5. Distribute `.dmg` or `.pkg`
>
> **Gatekeeper:** unsigned or unnotarized apps show scary dialogs — notarization is mandatory for smooth UX outside the Store.
>
> **CI:** Fastlane `notarize` + `sign_app`.

---

## Avoid

- Shipping unsigned builds to non-dev users
- Notarization failing due to disallowed entitlements or embedded unsigned binaries
