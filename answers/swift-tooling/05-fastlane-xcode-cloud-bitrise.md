# Fastlane, Xcode Cloud, or Bitrise — experience or ideal pipeline?

**Target time:** 45–60 seconds

---

## Talk track

> **Ideal mobile CI pipeline:**
> 1. PR → lint + unit tests on simulator
> 2. Merge → archive Release → upload TestFlight
> 3. dSYM upload → Crashlytics/Sentry
> 4. Tag release → App Store submit (manual or automated)
>
> **Fastlane** — Ruby lanes (`match`, `gym`, `scan`, `pilot`); flexible, industry standard; you own Mac runners or use Mac CI.
>
> **Xcode Cloud** — Apple-native, tight Xcode integration; less glue code; Apple ecosystem lock-in.
>
> **Bitrise / GitHub Actions + Mac** — customizable, good monorepo support.
>
> **My experience:** GitHub Actions for web/Rust/Node at Boson and prior roles; would mirror that for iOS with Fastlane or Xcode Cloud — same gates, different artifact (`.ipa`).

---

## Avoid

- Manual Archive-only releases without reproducible CI
- Signing certs on one engineer's laptop only
