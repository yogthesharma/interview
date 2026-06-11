# What is Codable? How do you decode JSON from an API?

**Target time:** 30–45 seconds

---

## Talk track

> **`Codable`** = `Encodable` + `Decodable`. Compiler synthesizes encode/decode for structs when all properties are Codable and keys match JSON.
>
> **`JSONDecoder`** / **`JSONEncoder`** — `keyDecodingStrategy` (`.convertFromSnakeCase`), `dateDecodingStrategy` (`.iso8601`).
>
> **Custom keys:** `CodingKeys` enum when API uses different names. **`decodeIfPresent`** for optional fields.
>
> Flow: `URLSession` → `Data` → `JSONDecoder().decode(Model.self, from: data)`.

---

## Code

```swift
struct User: Codable {
    let id: String
    let fullName: String

    enum CodingKeys: String, CodingKey {
        case id
        case fullName = "full_name"
    }
}

let decoder = JSONDecoder()
decoder.keyDecodingStrategy = .convertFromSnakeCase
let user = try decoder.decode(User.self, from: data)
```

---

## Avoid

- `[String: Any]` dictionaries when a typed model is feasible
- Forgetting `Codable` breaks when API adds fields — use optional or custom `init(from:)`
