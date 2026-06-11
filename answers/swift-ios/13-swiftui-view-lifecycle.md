# What is the SwiftUI view lifecycle?

**Target time:** 30–45 seconds

---

## Talk track

> SwiftUI views are **structs** — `body` is a **description**, not a long-lived object. The framework creates/destroys backing storage as the tree changes.
>
> **Key hooks:**
> - **`onAppear` / `onDisappear`** — screen visible / leaving (fetch data, subscribe)
> - **`task { }`** — async work tied to view lifetime; **auto-cancelled** on disappear (prefer over `onAppear` + manual cancel)
> - **`scenePhase`** — app foreground/background at environment level
>
> No `viewDidLoad` equivalent — initialization in `init` or `.task`. **Identity** matters: changing `.id()` forces a fresh view state.

---

## Code

```swift
struct OrdersView: View {
    @StateObject private var vm = OrdersViewModel()

    var body: some View {
        List(vm.orders) { order in
            Text(order.title)
        }
        .task {
            await vm.load() // cancelled if view disappears
        }
        .onDisappear { vm.trackScreenExit() }
    }
}
```

---

## Avoid

- Heavy side effects in `body` — runs often; use `.task` or ViewModel
- Assuming `onAppear` runs only once — can fire multiple times
