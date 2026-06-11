# What are optionals? How do you unwrap them safely?

**Target time:** 30–45 seconds

---

## Talk track

> An **optional** (`String?`) means "value **or nil**" — Swift forces you to handle absence at compile time instead of null pointer crashes.
>
> **Safe unwrap:** `if let`, `guard let`, optional chaining (`user?.name`), nil coalescing (`name ?? "Guest"`).
>
> **Avoid force unwrap (`!`)** in production — crashes if nil. Use `!` only when you can prove non-nil (IBOutlets after `viewDidLoad`, hardcoded URLs).
>
> **Optional binding** narrows the type inside a scope — compiler knows it's non-optional there.

---

## Code

```swift
func greet(_ name: String?) {
    guard let name, !name.isEmpty else { return }
    print("Hello, \(name)")
}

let display = user?.profile?.displayName ?? "Anonymous"
```

---

## Avoid

- Force-unwrapping API responses or user input
- Optional chaining when you need the value — use `if let` instead
