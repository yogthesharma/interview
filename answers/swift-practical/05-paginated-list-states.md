# Build a paginated list with loading, empty, and error states

**Target time:** 15–20 min

---

## Approach

> Model UI with enum or parallel flags.  
> First page vs load-more. Handle empty after success, error with retry.

---

## Solution

```swift
enum ListState: Equatable {
    case idle
    case loading
    case loaded
    case empty
    case error(String)
}

@MainActor
@Observable
final class OrdersViewModel {
    var orders: [Order] = []
    var state: ListState = .idle
    var isLoadingMore = false
    private var nextCursor: String?
    private let api: OrderAPI

    init(api: OrderAPI) { self.api = api }

    func loadFirst() async {
        state = .loading
        orders = []
        nextCursor = nil
        await fetchPage()
    }

    func loadMoreIfNeeded(current: Order) async {
        guard current.id == orders.last?.id, nextCursor != nil, !isLoadingMore else { return }
        isLoadingMore = true
        defer { isLoadingMore = false }
        await fetchPage()
    }

    private func fetchPage() async {
        do {
            let page = try await api.fetchOrders(cursor: nextCursor)
            orders.append(contentsOf: page.items)
            nextCursor = page.nextCursor
            state = orders.isEmpty ? .empty : .loaded
        } catch {
            state = orders.isEmpty ? .error(error.localizedDescription) : .loaded
        }
    }
}

struct OrdersView: View {
    @State private var vm = OrdersViewModel(api: LiveOrderAPI())

    var body: some View {
        Group {
            switch vm.state {
            case .loading where vm.orders.isEmpty:
                ProgressView("Loading…")
            case .empty:
                ContentUnavailableView("No orders", systemImage: "tray")
            case .error(let message):
                ContentUnavailableView("Error", systemImage: "wifi.exclamationmark", description: Text(message))
                Button("Retry") { Task { await vm.loadFirst() } }
            default:
                List(vm.orders) { order in
                    Text(order.title)
                        .task { await vm.loadMoreIfNeeded(current: order) }
                }
            }
        }
        .task { await vm.loadFirst() }
    }
}
```

---

## Avoid

- Only `ProgressView` with no empty/error
- Load-more without `isLoadingMore` guard
