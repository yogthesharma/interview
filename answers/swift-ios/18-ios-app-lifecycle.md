# iOS app lifecycle states — what happens on background / foreground?

**Target time:** 30–45 seconds

---

## Talk track

> **States:** Not Running → **Inactive** (transitioning) → **Active** (foreground, receiving events) → **Background** (code may run briefly) → **Suspended** (frozen in memory) → terminated.
>
> **Background:** iOS gives ~**30 seconds** to finish work via `applicationDidEnterBackground` / scene callbacks. Then **suspended** — no CPU unless you requested background modes (audio, location, fetch).
>
> **Foreground return:** `sceneWillEnterForeground` → `sceneDidBecomeActive` — refresh stale data, restart timers, re-subscribe.
>
> **SwiftUI:** observe `@Environment(\.scenePhase)` — `.active`, `.inactive`, `.background`.

---

## Code

```swift
@Environment(\.scenePhase) private var scenePhase

.onChange(of: scenePhase) { _, phase in
    switch phase {
    case .active: viewModel.refreshIfStale()
    case .background: viewModel.flushDraft()
    default: break
    }
}
```

---

## Avoid

- Assuming network sockets stay alive in background without background task
- Saving critical state only on terminate — may never fire
