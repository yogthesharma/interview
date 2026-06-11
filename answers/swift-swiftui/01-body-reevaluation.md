# What triggers a SwiftUI view `body` re-evaluation?

**Target time:** 30–45 seconds

---

## Talk track

> SwiftUI re-runs a view's **`body`** when **dependencies change** — not on a timer, but when observed state invalidates the view.
>
> **Triggers:** `@State` / `@Binding` mutation, `@Observable` / `@Published` changes on observed objects, `@Environment` value changes, parent passes new **identity** or arguments, explicit `.id()` change.
>
> **Doesn't always mean full DOM redraw** — SwiftUI diffs the view tree and updates only what changed (like React reconciliation).
>
> **Performance:** keep `body` cheap — no network, no heavy computation; push work to ViewModel, use `EquatableView` or break into child views so only subtrees refresh.

---

## Code

```swift
struct CounterView: View {
    @State private var count = 0  // mutating this re-runs body

    var body: some View {
        Button("Count: \(count)") { count += 1 }
    }
}

// Parent passes new value → child body re-evaluates
struct Parent: View {
    @State private var filter = ""
    var body: some View {
        ChildView(filter: filter)
    }
}
```

---

## Avoid

- Side effects inside `body` (`print`, `URLSession.shared.dataTask`)
- One giant view — every state change rebuilds everything
