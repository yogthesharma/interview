# When is DispatchQueue.main.async still the right tool?

**Target time:** 30 seconds

---

## Talk track

> **`DispatchQueue.main.async`** still fits when:
> - **Legacy callback** APIs (NSURLConnection-era, some Core Bluetooth) with no async wrapper yet
> - **Inside `UIViewController`** without `@MainActor` annotation — hop to main for UI
> - **Combine** `receive(on: DispatchQueue.main)` for UI binding
> - **Interop** with Obj-C completion handlers before you wrap in `withCheckedContinuation`
>
> **Prefer instead when possible:** `@MainActor` functions, `await MainActor.run { }`, SwiftUI `@MainActor` ViewModels — compiler-enforced, clearer than manual dispatch.
>
> Use `async` not `sync` for main queue always.

---

## Code

```swift
// Legacy callback
legacyFetcher.load { result in
    DispatchQueue.main.async {
        self.apply(result)
    }
}

// Modern equivalent
func load() async {
    let result = await modernFetcher.load()
    await MainActor.run { apply(result) }
}
```

---

## Avoid

- New greenfield code defaulting to GCD when async/await is available
- Forgetting main dispatch in third-party SDK callbacks
