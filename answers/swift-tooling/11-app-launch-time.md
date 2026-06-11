# App launch time — what do you measure and optimize?

**Target time:** 30–45 seconds

---

## Talk track

> **Measure:** Xcode **MetricKit** / Organizer **App Launch**; `os_signpost`; Instruments **App Launch** template. Track **cold start** (not in memory) — p50/p95.
>
> **Phases:** pre-main (dyld, static constructors), `main`/`App` init, first frame drawn.
>
> **Optimize:**
> - Less work in `application(_:didFinishLaunching)` — defer non-critical SDK init
> - Lazy singletons — don't init analytics/maps on launch path
> - Smaller binary / fewer dylibs — hurts pre-main
> - Avoid blocking sync IO on main at startup
>
> **Goal:** show UI fast, load data async — skeleton screen beats splash + 3s spinner.

---

## Code

```swift
@main
struct MyApp: App {
    init() {
        // minimal — defer heavy SDK setup
        Task { await SDKBootstrap.configure() }
    }
}
```

---

## Avoid

- Fetching full user profile synchronously before first frame
- 20 third-party SDKs initializing in `didFinishLaunching`
