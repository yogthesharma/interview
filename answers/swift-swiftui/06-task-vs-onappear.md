# .task vs .onAppear — which for async fetch and why?

**Target time:** 30 seconds

---

## Talk track

> **`.task { }`** — structured concurrency tied to view **lifetime**. Runs async work; **automatically cancelled** when view disappears or identity changes. **`task(id:)`** re-runs when `id` changes.
>
> **`.onAppear`** — synchronous callback; fires when view appears; **no auto-cancel**; easy to leak overlapping fetches if you spawn `Task { }` without tracking cancellation.
>
> **Prefer `.task`** for network loads, subscriptions with async sequences. Use **`onAppear`** for cheap sync setup (analytics ping, one-time UIKit bridge).
>
> Same idea as React Query fetch on mount with abort on unmount vs raw `useEffect` without cleanup.

---

## Code

```swift
struct OrdersView: View {
  @State private var vm = OrdersViewModel()

  var body: some View {
    List(vm.orders) { Text($0.name) }
      .task {
        await vm.load() // cancelled on disappear
      }
      .task(id: vm.filter) {
        await vm.reload(for: vm.filter) // re-fetch when filter changes
      }
  }
}
```

---

## Avoid

- `onAppear { Task { await load() } }` without cancellation handling
- Heavy fetch in `body` or `onAppear` on every tab switch without idempotency
