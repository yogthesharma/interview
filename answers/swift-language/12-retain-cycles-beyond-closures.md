# What is a retain cycle? Common iOS/macOS causes beyond closures?

**Target time:** 30–45 seconds

---

## Talk track

> **Retain cycle** — objects reference each other strongly; ARC count never hits zero → leak.
>
> **Beyond closures:**
> - **Delegate** stored `strong` instead of `weak` (UIViewController ↔ child coordinator)
> - **Parent/child** both holding strong refs
> - **Timer / DisplayLink** targeting `self` without `weak`
> - **NotificationCenter** observer that isn't removed and holds `self`
> - **Combine** subscriptions stored on `self` where publisher also retains subscriber graph incorrectly
> - **Core Data** contexts or parent/child relationships mismanaged (less common but possible)
>
> **Fix:** `weak` delegates, invalidate timers in `deinit`/`onDisappear`, `[weak self]` in callbacks, break references in teardown.

---

## Code

```swift
protocol DetailDelegate: AnyObject {
    func didFinish()
}

class ListVC {
    weak var delegate: DetailDelegate? // MUST be weak
}

// Timer leak pattern
timer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] _ in
    self?.poll()
}
```

---

## Avoid

- `delegate` without `AnyObject` + `weak` in protocol
- Forgetting to `removeObserver` for legacy NotificationCenter APIs
