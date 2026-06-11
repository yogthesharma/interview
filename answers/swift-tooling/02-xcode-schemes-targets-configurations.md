# Xcode schemes, targets, and build configurations?

**Target time:** 30–45 seconds

---

## Talk track

> **Target** — something that builds (app, extension, test bundle, framework). Owns sources, linked deps, signing.
>
> **Scheme** — recipe: which target to build, run, test, archive; maps **Run/Test/Archive** to a **build configuration**.
>
> **Build configurations** — `Debug` vs `Release` (+ custom `Staging`): compiler flags, `API_BASE_URL`, optimization, `DEBUG` defines.
>
> **Pattern:** `Debug` → dev API; `Release` → prod; optional `Staging` scheme for TestFlight pointing at staging backend.
>
> **xcconfig files** — inject settings per configuration without editing project.pbxproj by hand.

---

## Code

```swift
#if DEBUG
let baseURL = URL(string: "https://api.dev.example.com")!
#else
let baseURL = URL(string: "https://api.example.com")!
#endif
```

---

## Avoid

- One scheme for everything with hardcoded URLs in Swift
- Committing conflicting `.pbxproj` merges — document who owns project file
