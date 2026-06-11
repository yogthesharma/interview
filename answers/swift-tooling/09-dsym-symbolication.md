# dSYM upload and crash symbolication?

**Target time:** 30 seconds

---

## Talk track

> **Release builds** strip debug symbols from the binary — crash logs show hex addresses without **dSYM** (debug symbol bundle).
>
> **Symbolication** maps addresses → function/file/line. Upload dSYM per build to **Crashlytics**, **Sentry**, or Apple Organizer.
>
> **CI step:** after `archive`, run `upload-symbols` / Fastlane `upload_symbols_to_crashlytics` with `GoogleService-Info.plist` or Sentry auth token.
>
> **Bitcode note:** Apple deprecated app bitcode — dSYM from **your** archive matches the shipped binary; keep artifacts per release tag.
>
> Without this, crash triage is guesswork.

---

## Code

```bash
# Fastlane / manual — Crashlytics upload-symbols
./Pods/FirebaseCrashlytics/upload-symbols -gsp GoogleService-Info.plist -p ios path/to/dSYMs
```

---

## Avoid

- Losing dSYM for build live in production
- Debugging Release-only crashes without matching dSYM version
