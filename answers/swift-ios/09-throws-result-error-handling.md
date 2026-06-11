# throws, Result, and error handling in Swift?

**Target time:** 30–45 seconds

---

## Talk track

> **`throws` / `try` / `catch`** — typed errors via `Error` protocol; compiler forces callers to handle or propagate. Prefer **`enum` errors** with associated values for domain cases.
>
> **`Result<Success, Failure>`** — bundles success/failure in one value; great for **completion handlers** and bridging to async code (`Result { try await ... }`).
>
> **`try?`** → optional (swallow error). **`try!`** → crash on error (rare, tests only).
>
> **Production:** map low-level errors (URLError) to user-facing messages in the ViewModel; log underlying cause.

---

## Code

```swift
enum APIError: Error {
    case unauthorized
    case decodingFailed
}

func fetchUser() async throws -> User {
    let (data, response) = try await URLSession.shared.data(from: url)
    guard (response as? HTTPURLResponse)?.statusCode == 200 else {
        throw APIError.unauthorized
    }
    return try JSONDecoder().decode(User.self, from: data)
}

// Result in completion handler
func load(completion: @escaping (Result<User, Error>) -> Void) { ... }
```

---

## Avoid

- Empty `catch { }` blocks
- Using `try!` on network/decode paths
