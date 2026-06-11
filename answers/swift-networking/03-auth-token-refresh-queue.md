# Auth token refresh — how do you queue requests during refresh?

**Target time:** 45–60 seconds

---

## Talk track

> **Problem:** access token expires → many parallel requests get **401** → must **refresh once**, not N times.
>
> **Pattern:** `AuthInterceptor` / `TokenRefresher` actor with **single-flight** refresh:
> 1. Request fails 401 (or proactive expiry check)
> 2. If refresh not in progress → start refresh, await new tokens
> 3. If refresh in progress → await same `Task`/continuation queue
> 4. Retry original request with new token; on refresh fail → logout
>
> Store **refresh token** in Keychain; access token in memory.
>
> Same as axios interceptors + mutex on Node — one refresh, queued callers.

---

## Code

```swift
actor TokenRefresher {
    private var refreshTask: Task<String, Error>?

    func validAccessToken() async throws -> String {
        if let cached = memoryToken, !cached.isExpired { return cached.value }
        if let refreshTask { return try await refreshTask.value }

        let task = Task { try await performRefresh() }
        refreshTask = task
        defer { refreshTask = nil }
        return try await task.value
    }
}
```

---

## Avoid

- Every 401 independently calling `/refresh` — race and invalidates refresh token
- Refresh token in UserDefaults
