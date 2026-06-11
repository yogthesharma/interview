# What is ARC? How does memory management work in Swift?

**Target time:** 30–45 seconds

---

## Talk track

> **ARC** — Automatic Reference Counting. Swift tracks **strong references** to class instances; when count hits zero, `deinit` runs and memory is freed.
>
> **Not a garbage collector** — deterministic, compile-time inserts retain/release. **Value types** (structs) live on the stack or inline — no ARC.
>
> **Weak / unowned** break retain cycles: `weak` becomes nil when target deallocates; `unowned` assumes target outlives you (crash if wrong).
>
> **Closures** capture references strongly by default — use `[weak self]` in async UI code.

---

## Code

```swift
class NetworkClient {
    deinit { print("freed") }
}

var client: NetworkClient? = NetworkClient()
client = nil // prints "freed"

// Break cycle in closure
load { [weak self] in
    self?.updateUI()
}
```

---

## Avoid

- Saying Swift has no memory concerns — retain cycles are real
- Using `unowned` when `weak` is safer
