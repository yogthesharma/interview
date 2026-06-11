# Identifiable and Codable synthesis — when does the compiler fail to synthesize?

**Target time:** 30–45 seconds

---

## Talk track

> **`Identifiable`** — synthesized `id` if struct has `id` property matching type, or enum cases get implicit ids in some SwiftUI contexts. Manual when `id` is computed from multiple fields.
>
> **`Codable` synthesis** works when all stored properties are `Codable` and you don't need custom key mapping.
>
> **Synthesis fails / needs manual `Codable` when:**
> - Property types aren't `Codable`
> - JSON keys differ — need `CodingKeys` or `@CodingKey`
> - **Enums** with associated values need custom logic for discriminated unions
> - **Class** inheritance hierarchies — must implement in superclass chain
> - `@Published`, computed-only properties, `[String: Any]` dictionaries
> - **Optional strategy** for unknown API fields — custom `init(from:)`

---

## Code

```swift
struct User: Codable, Identifiable {
    let id: String
    let fullName: String

    enum CodingKeys: String, CodingKey {
        case id
        case fullName = "full_name"
    }
}

// Manual when API shape varies
enum APIResult: Codable {
    case ok(User)
    case error(code: Int, message: String)

    init(from decoder: Decoder) throws { /* keyed container */ }
    func encode(to encoder: Encoder) throws { /* ... */ }
}
```

---

## Avoid

- Relying on synthesis then adding non-Codable property without custom implementation
- Changing `CodingKeys` without migration plan for cached data
