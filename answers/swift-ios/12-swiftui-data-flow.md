# SwiftUI data flow — @State, @Binding, @ObservedObject, @StateObject, @EnvironmentObject?

**Target time:** 45–60 seconds

---

## Talk track

> **`@State`** — view-owned value type state; SwiftUI stores it. Private to the view.
>
> **`@Binding`** — two-way reference to someone else's state (`$name`).
>
> **`@StateObject`** — view **creates and owns** an `ObservableObject` ViewModel; survives view re-init. Use in the view that constructs the VM.
>
> **`@ObservedObject`** — view **observes** an object owned elsewhere (passed in). Don't create here — view rebuilds reset it.
>
> **`@EnvironmentObject`** — dependency injected down the tree (auth session, theme) — must be provided by ancestor `.environmentObject()`.
>
> **iOS 17+:** `@Observable` macro replaces much of `ObservableObject` boilerplate.

---

## Code

```swift
@MainActor
class ProfileViewModel: ObservableObject {
    @Published var name = ""
}

struct ProfileView: View {
    @StateObject private var vm = ProfileViewModel() // owner
    @EnvironmentObject var session: SessionStore

    var body: some View {
        TextField("Name", text: $vm.name)
        Text(session.userId)
    }
}
```

---

## Avoid

- `@StateObject` in a child that receives the VM from parent — use `@ObservedObject`
- `@EnvironmentObject` without `.environmentObject()` upstream — runtime crash
