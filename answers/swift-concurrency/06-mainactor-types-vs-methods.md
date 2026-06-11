# @MainActor on types vs individual methods?

**Target time:** 30 seconds

---

## Talk track

> **`@MainActor` on a class/struct** — entire type is main-thread isolated; all methods and properties require main actor unless `nonisolated`.
>
> **Use on type:** ViewModels driving UI, `ObservableObject` state, UI coordinators — default safe.
>
> **`@MainActor` on single method** — rest of type can run on background; method hops to main when called from elsewhere.
>
> **`nonisolated` method** on `@MainActor` type — pure helpers, read-only constants, formatting that doesn't touch UI state.
>
> Swift 6 pushes explicit isolation — choose smallest surface that keeps UI safe.

---

## Code

```swift
@MainActor
final class FeedViewModel: ObservableObject {
    @Published var items: [Item] = []

    func load() async {
        let fetched = await api.fetchItems() // suspension frees thread
        items = fetched // back on main — safe
    }

    nonisolated func itemCountLabel(count: Int) -> String {
        "\(count) items"
    }
}
```

---

## Avoid

- `@MainActor` on heavy network/parser service — blocks UI thread if methods don't suspend
- Calling `@MainActor` methods from sync background without `await` (compile error in strict mode)
