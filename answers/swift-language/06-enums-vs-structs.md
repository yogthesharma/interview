# Enums with associated values vs structs — when is each a better model?

**Target time:** 30–45 seconds

---

## Talk track

> **Enums with associated values** model **closed variants** — fixed set of cases, each carrying different data. Perfect for **state machines**, API results, AST nodes: `.success(User)` vs `.failure(Error)`.
>
> **Structs** model **one shape** — all instances have the same fields. Better for **records**, DTOs, config objects.
>
> **Choose enum when:** mutually exclusive states, `switch` exhaustiveness helps correctness, adding a case is a compile-time checkpoint.
>
> **Choose struct when:** homogeneous data, no variant logic, Codable to flat JSON objects.

---

## Code

```swift
// Enum — variants
enum LoadState {
    case idle
    case loading
    case loaded([Item])
    case failed(String)
}

// Struct — single shape
struct Address {
    let line1: String
    let city: String
    let postalCode: String
}
```

---

## Avoid

- Stringly-typed `"status": "loading"` when an enum is clearer
- Enum with 20 cases that all share the same fields — use struct + enum discriminator
