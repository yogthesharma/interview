# What causes retain cycles in iOS? How do you fix them?

**Target time:** 30–45 seconds

---

## Talk track

> A **retain cycle** — two+ objects hold **strong** references to each other; ARC never hits zero → memory leak.
>
> **Common causes:**
> - **Escaping closures** capturing `self` strongly (network, timers, Combine)
> - **Delegate** marked `strong` instead of `weak` (parent ↔ child)
> - **Closure stored on `self`** that references `self`
>
> **Fixes:** `[weak self]` / `[unowned self]` in closures; `weak var delegate`; break cycles in `deinit` / `onDisappear` by nil-ing callbacks.
>
> **Detect:** Instruments **Leaks** / **Memory Graph** in Xcode; watch `deinit` not firing.

---

## Code

```swift
class DetailViewModel {
    var onComplete: (() -> Void)?

    func load() {
        api.fetch { [weak self] result in
            guard let self else { return }
            self.handle(result)
            self.onComplete?()
        }
    }

    deinit { print("VM deallocated") } // should run when view dismissed
}
```

---

## Avoid

- `unowned self` in async code where `self` may deallocate first
- Strong delegate between view controller and coordinator
