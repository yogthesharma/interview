# Continuations — bridging callback APIs to async/await?

**Target time:** 30–45 seconds

---

## Talk track

> **`withCheckedContinuation` / `withCheckedThrowingContinuation`** — suspend async function until legacy **callback** fires once. Resume exactly **once** or runtime trap (checked) / undefined (unsafe).
>
> **`withUnsafeContinuation`** — when you guarantee single resume (performance-sensitive).
>
> **Pattern:** wrap URLSession completion handler, Core Location, Bluetooth, older SDKs → expose `async throws` API to app layer.
>
> **Store continuation**, call `resume(returning:)` or `resume(throwing:)` in callback; handle cancel if API supports it.

---

## Code

```swift
func fetchData(from url: URL) async throws -> Data {
    try await withCheckedThrowingContinuation { continuation in
        URLSession.shared.dataTask(with: url) { data, _, error in
            if let error { continuation.resume(throwing: error); return }
            guard let data else {
                continuation.resume(throwing: URLError(.badServerResponse))
                return
            }
            continuation.resume(returning: data)
        }.resume()
    }
}
```

---

## Avoid

- Resuming continuation twice (double callback bug)
- Forgetting to `.resume()` task on error paths — leaked suspended task
