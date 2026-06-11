# Repository pattern for networking + persistence?

**Target time:** 30–45 seconds

---

## Talk track

> **Repository** — single API for a domain resource (`OrderRepository`) hiding **where** data lives — REST, Core Data cache, mock.
>
> **ViewModel** calls `repository.fetchOrders()` — doesn't know URLSession vs SwiftData.
>
> **Implementation** may: network-first with local cache, offline read from DB, write-through on save.
>
> **Benefits:** swap data sources in tests, migrate persistence without VM changes, one place for retry/dedup.
>
> Same pattern as React Query + repository on Node — VM/UI is consumer, repo is source of truth orchestrator.

---

## Code

```swift
protocol OrderRepository {
    func orders(forceRefresh: Bool) async throws -> [Order]
    func save(_ order: Order) async throws
}

final class DefaultOrderRepository: OrderRepository {
    private let api: APIClient
    private let store: LocalOrderStore

    func orders(forceRefresh: Bool) async throws -> [Order] {
        if !forceRefresh, let cached = try await store.load() { return cached }
        let remote = try await api.fetchOrders()
        try await store.save(remote)
        return remote
    }
}
```

---

## Avoid

- ViewModel calling URLSession and Core Data directly
- Repository that knows about `UITableView`
