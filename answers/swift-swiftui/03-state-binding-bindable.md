# @State vs @Binding vs @Bindable — ownership rules?

**Target time:** 45–60 seconds

---

## Talk track

> **`@State`** — view **owns** value-type state; SwiftUI stores it across `body` re-runs. Private to the view. Source of truth for local UI state.
>
> **`@Binding`** — **borrowed** two-way connection to someone else's state (`$parentState`). Child doesn't own it.
>
> **`@Bindable`** (Observation) — creates bindings (`$vm.name`) from **`@Observable`** objects passed in. Use when child needs `$` on observable reference type.
>
> **Ownership cheat sheet:**
> - Create VM/state here → `@State` / `@StateObject` / `@State` with `@Observable`
> - Passed from parent → `@Binding`, `@ObservedObject`, `@Bindable`, or plain `let vm`
> - App-wide → `@EnvironmentObject`

---

## Code

```swift
struct Parent: View {
    @State private var text = ""

    var body: some View {
        ChildEditor(text: $text) // binding — parent owns
    }
}

struct ChildEditor: View {
    @Binding var text: String
    var body: some View { TextField("Edit", text: $text) }
}

@Observable class FormModel { var title = "" }
struct FormView: View {
    @Bindable var model: FormModel
    var body: some View { TextField("Title", text: $model.title) }
}
```

---

## Avoid

- `@StateObject` in child that receives VM from parent
- `@State` on reference-type ViewModel (use `@State` wrapper for `@Observable` in iOS 17: `@State private var vm = Model()`)
