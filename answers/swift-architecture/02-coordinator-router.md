# Coordinator (or router) pattern for navigation — benefits?

**Target time:** 30–45 seconds

---

## Talk track

> **Problem:** view controllers / SwiftUI views shouldn't know **how** to build the next screen or present modals — leads to spaghetti `pushViewController` everywhere.
>
> **Coordinator / Router** — owns navigation graph; views emit **routes** (`showDetail(id:)`, `presentLogin`); coordinator pushes/presents/dismisses.
>
> **Benefits:** testable navigation, reuse flows, deep links land in one place, child coordinators per feature tab.
>
> **SwiftUI:** `NavigationPath` + enum `Route` + `navigationDestination` is a lightweight router. UIKit: `Coordinator` protocol with child array.
>
> Same as a central React Router or Next.js app router — screens don't hardcode URLs.

---

## Code

```swift
enum AppRoute: Hashable {
    case orderDetail(id: String)
    case settings
}

@Observable
final class AppRouter {
    var path = NavigationPath()

    func showOrder(_ id: String) { path.append(AppRoute.orderDetail(id: id)) }
    func pop() { path.removeLast() }
}
```

---

## Avoid

- Every view holding `UINavigationController` reference
- Coordinator that also fetches network data — keep navigation separate
