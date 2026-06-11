# Swift 6 / strict concurrency — Sendable, data-race safety (awareness)?

**Target time:** 45–60 seconds

---

## Talk track

> **Swift 6** pushes **strict concurrency checking** — compile-time detection of **data races** when mutable state crosses actors/tasks unsafely.
>
> **`Sendable`** — protocol marking types safe to share across concurrency domains: value types with Sendable fields, actors, immutable classes, `@unchecked Sendable` when you vouch manually.
>
> **`@MainActor`** — UI isolation. **`actor`** — serialized mutable state.
>
> **Migration pain:** legacy singletons, `var` globals, delegate callbacks from background — need isolation or `nonisolated` carefully.
>
> **Modes:** Swift 5 targets can enable **complete** checking incrementally before Swift 6 language mode.
>
> Awareness is enough for interviews — show you know UI = main actor, shared mutable state = actor or locks.

---

## Code

```swift
actor TokenStore: Sendable {
    private var token: String?

    func set(_ token: String) { self.token = token }
    func current() -> String? { token }
}

@MainActor
final class DashboardViewModel: ObservableObject {
    @Published var items: [Item] = []
}
```

---

## Avoid

- Sprinkling `@unchecked Sendable` to silence warnings without audit
- Updating `@Published` from background thread in strict mode
