# Error modeling — typed errors vs generic Error?

**Target time:** 30 seconds

---

## Talk track

> **Typed errors** (`enum AppError: Error`) — cases with associated values: `.unauthorized`, `.validation(field:)`, `.network(underlying)`. ViewModel maps to user-facing strings and retry actions.
>
> **Generic `Error`** — fine at boundaries; lose `switch` exhaustiveness.
>
> **Layers:** low level throws `URLError` / `DecodingError` → repository maps to domain → VM exposes `errorMessage` or `AlertState`.
>
> **Result type** for callback bridges; `throws` for async.
>
> Don't show raw `localizedDescription` for unknown errors — log detail, show friendly copy.

---

## Code

```swift
enum OrderError: Error {
    case notFound
    case paymentDeclined(reason: String)
    case offline
}

func userMessage(for error: OrderError) -> String {
    switch error {
    case .notFound: return "Order not found."
    case .paymentDeclined(let reason): return reason
    case .offline: return "You're offline. Try again when connected."
    }
}
```

---

## Avoid

- One `handleError(_ error: Error)` that only logs
- Throwing strings
