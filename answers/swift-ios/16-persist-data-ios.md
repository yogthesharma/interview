# How do you persist data on iOS — UserDefaults, Keychain, Core Data, SwiftData?

**Target time:** 45–60 seconds

---

## Talk track

> Pick storage by **sensitivity**, **size**, and **query needs**:
>
> **UserDefaults** — small preferences (theme, last tab, flags). Not for PII or large data. Plist-backed, not encrypted.
>
> **Keychain** — **secrets**: tokens, passwords, API keys. Encrypted, survives reinstall depending on accessibility class.
>
> **Core Data** — relational local DB, migrations, complex queries, offline-first. Mature, UIKit-era patterns.
>
> **SwiftData** — Swift-native persistence (iOS 17+), `@Model` macros, integrates with SwiftUI. Simpler than Core Data for new apps.
>
> **FileManager** — documents, caches, downloaded files. Good for blobs (PDFs, images).

---

## Quick reference

| Store | Use for |
|-------|---------|
| UserDefaults | Settings, onboarding flags |
| Keychain | Auth tokens, credentials |
| Core Data / SwiftData | Structured app data, offline cache |
| Files | Media, exports, large JSON cache |

---

## Avoid

- UserDefaults for auth tokens
- Core Data for three boolean flags
