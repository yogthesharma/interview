# Dependency injection — constructor injection vs service locator vs factories?

**Target time:** 30–45 seconds

---

## Talk track

> **Constructor injection** — pass protocols into `init`; **preferred**; dependencies explicit, testable, immutable.
>
> **Service locator** — global registry `Container.shared.resolve()`; convenient but hides deps, hard to trace, singleton abuse.
>
> **Factories** — build graphs (VM + repo + api) per feature; composition root in `App` / `@main`.
>
> **SwiftUI:** `.environment(\.apiClient)` for cross-cutting; constructor for feature VMs.
>
> **Tests:** inject mocks via init — no network in XCTest.
>
> Same as Fastify `decorate` vs passing `prisma` into handlers — explicit wins at scale.

---

## Code

```swift
protocol APIClient { func fetchOrders() async throws -> [Order] }

@MainActor
final class OrdersViewModel {
    private let api: APIClient
    init(api: APIClient) { self.api = api }
}

// Composition root
let api = LiveAPIClient(session: .shared)
let vm = OrdersViewModel(api: api)
```

---

## Avoid

- `APIClient.shared` everywhere in view models
- EnvironmentObject for everything when only one subtree needs it
