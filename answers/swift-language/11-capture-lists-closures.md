# Capture lists in closures — [weak self], [unowned self]?

**Target time:** 30–45 seconds

---

## Talk track

> Closures **capture** variables from surrounding scope. For **classes**, capturing `self` strongly in an **escaping** closure can create a **retain cycle** if `self` also holds the closure.
>
> **Capture list** at the start — `[weak self]`, `[unowned self]`, or `[x = someValue]` — controls how values are captured.
>
> **`[weak self]`** — optional `self` inside; use `guard let self else { return }` after async gaps.
>
> **`[unowned self]`** — non-optional `self` when lifetime guaranteed.
>
> **Capture copies:** `[count = self.count]` freezes value at closure creation — useful to avoid stale `self` in sync closures.

---

## Code

```swift
class ViewModel {
    var onUpdate: (() -> Void)?

    func start() {
        service.subscribe { [weak self] event in
            guard let self else { return }
            self.handle(event)
        }
    }

    func tick() {
        Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] _ in
            self?.refresh()
        }
    }
}
```

---

## Avoid

- Omitting capture list on stored escaping closures that reference `self`
- `guard let self` then strong capture in long async chain without re-checking
