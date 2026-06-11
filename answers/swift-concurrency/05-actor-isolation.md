# Actor isolation — what bugs does it prevent?

**Target time:** 30–45 seconds

---

## Talk track

> An **`actor`** serializes access to its **mutable state** — only one caller at a time, compiler enforces `await` for cross-actor calls.
>
> **Prevents data races** — two threads reading/writing the same `var` without synchronization → corrupted state, crashes, flaky UI counts.
>
> **Replaces** manual locks + serial `DispatchQueue` for shared caches, token stores, in-memory repositories.
>
> **Not a silver bullet** — CPU work inside actor still blocks other actor callers; offload heavy compute then return results. **`nonisolated`** for pure functions on actor types.

---

## Code

```swift
actor SessionStore {
    private var token: String?

    func setToken(_ token: String) { self.token = token }
    func bearerHeader() -> String? {
        token.map { "Bearer \($0)" }
    }
}

// Callers must await — compiler prevents unsynchronized access
await store.setToken("abc")
```

---

## Avoid

- Marking entire app `@MainActor` actor as dumping ground
- `@unchecked Sendable` class with `var` instead of using an actor
