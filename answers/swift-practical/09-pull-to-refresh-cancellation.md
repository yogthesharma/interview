# Add pull-to-refresh and cancellation for an in-flight request

**Target time:** 10–15 min

---

## Approach

> Store `Task` or `URLSessionTask`; cancel on refresh or disappear.  
> SwiftUI: `.refreshable` + `.task` cancellation.

---

## Solution

```swift
@MainActor
@Observable
final class FeedViewModel {
    var items: [Item] = []
    private var loadTask: Task<Void, Never>?

    func refresh() async {
        loadTask?.cancel()
        loadTask = Task {
            await load()
        }
        await loadTask?.value
    }

    private func load() async {
        do {
            items = try await api.fetchFeed()
        } catch is CancellationError {
            return
        } catch {
            // handle error
        }
    }

    func cancel() {
        loadTask?.cancel()
    }
}

struct FeedView: View {
    @State private var vm = FeedViewModel()

    var body: some View {
        List(vm.items) { Text($0.title) }
            .refreshable { await vm.refresh() }
            .task { await vm.refresh() }
            .onDisappear { vm.cancel() }
    }
}
```

---

## URLSession cancel

```swift
private var dataTask: URLSessionDataTask?

func fetch() {
    dataTask?.cancel()
    dataTask = session.dataTask(with: url) { ... }
    dataTask?.resume()
}
```

---

## Avoid

- Refresh stacking 5 parallel identical requests
- Ignoring `CancellationError` as user-visible failure
