# How does async/await work in Swift?

**Target time:** 30–45 seconds

---

## Talk track

> **`async`** marks a function that can suspend; **`await`** marks a suspension point where the thread is freed for other work.
>
> Replaces nested completion handlers with **linear, readable** code — same mental model as JS `async/await`.
>
> **`Task { }`** starts async work from sync context. **`async let`** runs parallel child tasks. Errors propagate with **`try await`**.
>
> UI updates still need **`@MainActor`** or `await MainActor.run { }` after network work.

---

## Code

```swift
func loadProfile() async throws -> Profile {
    async let user = fetchUser()
    async let settings = fetchSettings()
    return try await Profile(user: user, settings: settings)
}

// Call site
Task {
    do {
        let profile = try await loadProfile()
        await MainActor.run { self.profile = profile }
    } catch {
        await MainActor.run { self.error = error }
    }
}
```

---

## Avoid

- Blocking the main thread with `DispatchSemaphore` to "await" synchronously
- Ignoring cancellation — check `Task.isCancelled` in long loops
