# Design a production networking layer — protocol, session, decode, errors?

**Target time:** 60–90 seconds

---

## Talk track

> **Layers:**
> 1. **`APIClient` protocol** — `get/post` typed endpoints; app depends on protocol
> 2. **`URLSession`** wrapper — builds `URLRequest`, auth headers, timeouts
> 3. **Decoder** — `JSONDecoder` config (snake_case, dates)
> 4. **Error mapper** — HTTP status + decode failures → domain `APIError`
> 5. **Repository** — feature-facing API above client
>
> **Production extras:** request/response logging (redacted), retry idempotent GETs, correlation id header, inject session for tests (`URLProtocol` stub).
>
> Same shape as Fastify + typed client on Node — thin transport, fat mapping at edges.

---

## Code

```swift
protocol APIClient: Sendable {
    func send<T: Decodable>(_ request: APIRequest) async throws -> T
}

actor LiveAPIClient: APIClient {
    private let session: URLSession
    private let decoder: JSONDecoder
    private let auth: AuthProvider

    func send<T: Decodable>(_ request: APIRequest) async throws -> T {
        var urlRequest = try request.asURLRequest(baseURL: baseURL)
        urlRequest.setValue(await auth.bearerToken(), forHTTPHeaderField: "Authorization")
        let (data, response) = try await session.data(for: urlRequest)
        try validate(response: response, data: data)
        return try decoder.decode(T.self, from: data)
    }
}
```

---

## Avoid

- ViewModels building `URLRequest` directly
- `[String: Any]` JSON parsing in production paths
