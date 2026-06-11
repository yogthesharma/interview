# NavigationStack / navigationDestination vs older navigation APIs?

**Target time:** 30–45 seconds

---

## Talk track

> **Legacy `NavigationView`** — deprecated pattern; ambiguous double-column on iPad; `NavigationLink(destination:)` **eagerly** built destinations — perf and state bugs.
>
> **`NavigationStack` + `navigationDestination(for:)`** (iOS 16+) — **value-based** navigation; push by appending to a path `NavigationPath` or typed array; destinations built when needed. Deep linking and programmatic pop (`path.removeLast()`) are clean.
>
> **`NavigationSplitView`** — master-detail on iPad/Mac.
>
> **Migration:** replace inline `NavigationLink(destination:)` with `NavigationLink(value:)` + `navigationDestination`; hold `path` in `@State` for coordinator-style routing.

---

## Code

```swift
enum Route: Hashable {
    case detail(id: String)
}

struct RootView: View {
    @State private var path = NavigationPath()

    var body: some View {
        NavigationStack(path: $path) {
            List(orders) { order in
                NavigationLink(value: Route.detail(id: order.id)) {
                    Text(order.title)
                }
            }
            .navigationDestination(for: Route.self) { route in
                switch route {
                case .detail(let id): OrderDetailView(id: id)
                }
            }
        }
    }
}
```

---

## Avoid

- New code with `NavigationView` in 2026
- Hidden `NavigationLink(isActive:)` hacks — use path binding
