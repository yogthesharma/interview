# Refactor callback-based API to async/await with withCheckedContinuation

**Target time:** 10–12 min

---

## Approach

> Wrap legacy callback once at boundary → app uses `async`.  
> Resume continuation **exactly once** on all paths.

---

## Before (callback)

```swift
final class LegacyLocationService {
    func requestLocation(completion: @escaping (Result<CLLocation, Error>) -> Void) {
        // CLLocationManager delegate eventually calls completion
    }
}
```

---

## After (continuation)

```swift
final class LocationService {
    private let legacy = LegacyLocationService()

    func requestLocation() async throws -> CLLocation {
        try await withCheckedThrowingContinuation { continuation in
            legacy.requestLocation { result in
                continuation.resume(with: result)
            }
        }
    }
}

// Usage
let location = try await locationService.requestLocation()
```

---

## URLSession pattern

```swift
func data(for request: URLRequest) async throws -> Data {
    try await withCheckedThrowingContinuation { continuation in
        URLSession.shared.dataTask(with: request) { data, _, error in
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

- Double `resume` on success + error paths
- Leaving continuation never resumed on cancel — wire `Task.isCancelled` if API supports abort
