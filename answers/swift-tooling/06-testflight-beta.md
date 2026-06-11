# TestFlight distribution and beta feedback loops?

**Target time:** 30–45 seconds

---

## Talk track

> **TestFlight** — Apple's beta channel after upload to App Store Connect.
>
> **Internal testers** (App Store Connect team) — up to 100, instant access, no Beta App Review.
>
> **External testers** — groups, public link; requires **Beta App Review** (usually lighter than full review); builds expire in **90 days**.
>
> **Feedback loop:** What to Test notes, crash reports in Organizer, TestFlight screenshots/feedback, Slack channel with build number + changelog, tie crashes to `CFBundleVersion`.
>
> **Practice:** bump build every upload; semantic version for user-facing; dogfood staging build before store submit.

---

## Checklist

- [ ] Build notes for testers
- [ ] Demo account credentials if login-gated
- [ ] Feature flags default safe for beta
- [ ] Monitor crash-free rate first 24h

---

## Avoid

- Same build number re-uploaded
- External beta without privacy policy URL when required
