# MVVM on iOS — what goes in the ViewModel?

**Target time:** 45–60 seconds

---

## Talk track

> **View** — SwiftUI/UIKit; layout, bindings, navigation triggers; **no** URLSession, minimal logic.
>
> **ViewModel** — presentation state (`@Published` / `@Observable`), user **intents** (`submit`, `loadMore`), maps domain → UI models, handles loading/error/empty; `@MainActor` when driving UI.
>
> **Model / Use cases / Repository** — business rules, API, persistence; VM calls protocols, not concrete SDKs.
>
> **Not in VM:** Auto Layout, `UIColor`, view hierarchy. **Avoid Massive VM** — extract use cases when VM exceeds ~200 lines.
>
> Maps to React: component = View, custom hook + store = ViewModel, API layer = repository.

---

## Code

```swift
@MainActor
@Observable
final class CheckoutViewModel {
    var items: [LineItem] = []
    var isSubmitting = false
    var errorMessage: String?

    private let orders: OrderRepository

    init(orders: OrderRepository) { self.orders = orders }

    func submit() async {
        isSubmitting = true
        defer { isSubmitting = false }
        do { try await orders.placeOrder(items: items) }
        catch { errorMessage = error.localizedDescription }
    }
}
```

---

## Avoid

- ViewModel importing SwiftUI (except previews)
- Duplicating API DTOs forever — map to display models
