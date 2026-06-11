# Crash reporting workflow — Crashlytics, Sentry, symbolicated stacks?

**Target time:** 30–45 seconds

---

## Talk track

> **Crash reporters** (Firebase Crashlytics, Sentry, Bugsnag) capture **fatal crashes** + non-fatal logged errors, device/OS, breadcrumbs, release version.
>
> **dSYM** — debug symbols; upload per build so stacks are **symbolicated** (human-readable function names). Xcode Organizer or CI script (`upload-symbols`).
>
> **Workflow:** crash spikes in dashboard → cluster by top frame → reproduce on build `1.2.3 (456)` → fix → ship → watch crash-free rate.
>
> **Add context:** user id hash, last screen, feature flags, network reachability — not PII.
>
> **My experience:** production incident debugging on web (Sentry, logs); same triage loop on mobile — symbolicated stack is non-negotiable.

---

## Checklist

| Step | Action |
|------|--------|
| Build | Archive with bitcode off, save dSYM |
| CI | Upload symbols to Crashlytics/Sentry |
| Triage | Key off `EXC_BAD_ACCESS` top frame |
| Verify | Crash-free users % after hotfix |

---

## Avoid

- Shipping without dSYM upload — useless stacks
- Logging secrets as crash breadcrumbs
