# Concurrency in Swift — actors, Task, Sendable?

**Target time:** 45–60 seconds

---

## Talk track

> **`Task`** — unit of async work; structured concurrency with parent/child cancellation.
>
> **`actor`** — reference type with **serialized access** — only one caller at a time, prevents data races on mutable state (like a lock, but compiler-checked). Use for shared caches, token stores.
>
> **`Sendable`** — marker that a type is safe to pass across concurrency domains (structs with Sendable fields, actors, `@unchecked Sendable` when you vouch manually).
>
> **Global actors:** `@MainActor` is the common one for UI.
>
> **vs GCD:** prefer async/await + actors for new code; GCD still under the hood.

---

## Code

```swift
actor ImageCache {
    private var storage: [URL: Data] = [:]

    func data(for url: URL) -> Data? { storage[url] }
    func store(_ data: Data, for url: URL) { storage[url] = data }
}

Task {
    await cache.store(data, for: url)
}
```

---

## Avoid

- `nonisolated(unsafe)` everywhere to silence Swift 6 warnings
- Using actors for pure CPU work with no shared state — overhead without benefit
