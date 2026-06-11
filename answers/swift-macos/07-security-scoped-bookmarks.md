# File system access — security-scoped bookmarks?

**Target time:** 30–45 seconds

---

## Talk track

> Sandboxed Mac apps can't freely read arbitrary paths. User picks a file/folder via **open panel** → you get a **security-scoped URL**.
>
> **Bookmark** — serialized token (`Data`) that remembers that permission across launches. Store in UserDefaults or your DB.
>
> **Flow:** user selects URL → `startAccessingSecurityScopedResource()` → read/write → `stopAccessingSecurityScopedResource()` → save bookmark with `.withSecurityScope`.
>
> **Stale bookmarks:** user moved/deleted file — handle `resolveBookmarkData` failures gracefully, re-prompt.
>
> Same idea as iOS document picker, but Mac apps rely on it more for persistent project folders.

---

## Code

```swift
let bookmarkData = try url.bookmarkData(
    options: .withSecurityScope,
    includingResourceValuesForKeys: nil,
    relativeTo: nil
)
// Later:
var isStale = false
let resolved = try URL(
    resolvingBookmarkData: bookmarkData,
    options: .withSecurityScope,
    relativeTo: nil,
    bookmarkDataIsStale: &isStale
)
guard resolved.startAccessingSecurityScopedResource() else { return }
defer { resolved.stopAccessingSecurityScopedResource() }
// read/write file
```

---

## Avoid

- Forgetting `stopAccessing` — leaks scoped access
- Storing raw path strings instead of bookmarks for sandboxed apps
