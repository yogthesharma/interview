# Fetch and decode JSON with URLSession + Codable + async/await

**Target time:** 10–15 min live coding

---

## Approach (say while coding)

> 1. Define a `Codable` model matching API shape  
> 2. `URLSession.shared.data(from:)` with `async/await`  
> 3. Validate HTTP status  
> 4. `JSONDecoder` with snake_case if needed  
> 5. Map errors to a small enum

---

## Solution

```swift
struct User: Codable {
    let id: String
    let fullName: String

    enum CodingKeys: String, CodingKey {
        case id
        case fullName = "full_name"
    }
}

enum APIError: Error {
    case badStatus(Int)
    case decodingFailed
}

func fetchUser(id: String) async throws -> User {
    let url = URL(string: "https://api.example.com/users/\(id)")!
    let (data, response) = try await URLSession.shared.data(from: url)

    guard let http = response as? HTTPURLResponse else {
        throw APIError.badStatus(-1)
    }
    guard (200...299).contains(http.statusCode) else {
        throw APIError.badStatus(http.statusCode)
    }

    let decoder = JSONDecoder()
    decoder.keyDecodingStrategy = .convertFromSnakeCase

    do {
        return try decoder.decode(User.self, from: data)
    } catch {
        throw APIError.decodingFailed
    }
}
```

---

## SwiftUI usage

```swift
.task {
    do { user = try await fetchUser(id: userId) }
    catch { errorMessage = "Failed to load" }
}
```

---

## Avoid

- Force-unwrap `URL(string:)!` in production without validation
- Decoding on main thread for huge payloads in a tight loop
