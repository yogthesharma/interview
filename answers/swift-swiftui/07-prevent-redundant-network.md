# How do you prevent redundant network calls on re-render?

**Target time:** 30–45 seconds

---

## Talk track

> SwiftUI re-renders don't always need new network data. Strategies:
>
> 1. **Fetch in ViewModel once** — guard `if loaded { return }` or track `LoadState`
> 2. **`.task(id:)`** — only refetch when meaningful input changes (user id, filter)
> 3. **Repository cache** — in-memory or URLCache; stale-while-revalidate
> 4. **Debounce** search — Combine or async sleep before API
> 5. **Don't fetch in `body`** — ever
>
> Parallels **React Query** — `staleTime`, keyed queries, deduped in-flight requests. On iOS, centralize in an actor or service layer.

---

## Code

```swift
@MainActor
final class OrdersViewModel: ObservableObject {
    @Published private(set) var orders: [Order] = []
    private var hasLoaded = false

    func loadIfNeeded() async {
        guard !hasLoaded else { return }
        hasLoaded = true
        orders = try await api.fetchOrders()
    }
}

// View
.task { await vm.loadIfNeeded() }
```

---

## Avoid

- New `URLSession` call every `body` evaluation
- Multiple `.onAppear` on nested views all fetching the same resource
