# How do you fetch data from a REST API on iOS (URLSession)?

**Target time:** 30–45 seconds

---

## Talk track

> **`URLSession`** is the standard HTTP client — `shared` for simple cases, custom `URLSessionConfiguration` for timeouts, caching, background transfers.
>
> **Modern pattern:** `async/await` with `URLSession.data(for:)` — clean error handling + decode with `Codable`.
>
> **Layers:** View → ViewModel (`@MainActor`) → **APIClient** / Repository → URLSession. Keeps views dumb.
>
> **Production:** auth headers, retry on 401 refresh, request timeouts, map HTTP status to domain errors, log correlation IDs.

---

## Code

```swift
actor APIClient {
    func get<T: Decodable>(_ path: String) async throws -> T {
        var request = URLRequest(url: baseURL.appendingPathComponent(path))
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")

        let (data, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse, (200...299).contains(http.statusCode) else {
            throw APIError.badStatus
        }
        return try JSONDecoder().decode(T.self, from: data)
    }
}
```

---

## Avoid

- Parsing JSON on the main thread for large payloads
- Hardcoding URLs — use schemes / xcconfig per environment
