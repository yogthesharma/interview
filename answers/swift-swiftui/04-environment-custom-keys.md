# Environment values and custom @Environment keys?

**Target time:** 30–45 seconds

---

## Talk track

> **`@Environment`** reads values propagated down the view tree — system values (`colorScheme`, `dismiss`, `dynamicTypeSize`) and custom app dependencies.
>
> **Custom environment:** define `EnvironmentKey` with `defaultValue`, extend `EnvironmentValues`, expose via `EnvironmentValues` property. Inject with `.environment(\.myKey, value)`.
>
> **Use for:** theme, feature flags, analytics, API client — avoid prop-drilling. Prefer **narrow** keys over one god `AppEnvironment` struct.
>
> **`@EnvironmentObject`** is separate — reference-type observable store, must be injected with `.environmentObject()`.

---

## Code

```swift
private struct APIClientKey: EnvironmentKey {
    static let defaultValue: APIClient = .live
}

extension EnvironmentValues {
    var apiClient: APIClient {
        get { self[APIClientKey.self] }
        set { self[APIClientKey.self] = newValue }
    }
}

// Inject at root
ContentView()
    .environment(\.apiClient, APIClient(baseURL: url))

// Consume deep in tree
struct OrdersView: View {
    @Environment(\.apiClient) private var api
}
```

---

## Avoid

- Storing mutable global singleton in environment without test override
- `@EnvironmentObject` when a simple value type `EnvironmentKey` suffices
