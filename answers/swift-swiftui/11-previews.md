# Previews — how do you use them effectively in a team workflow?

**Target time:** 30–45 seconds

---

## Talk track

> **Previews** (`#Preview` / `PreviewProvider`) render views in Xcode without running the full app — fast UI iteration.
>
> **Team workflow:**
> - **Preview-specific mocks** — stub ViewModels, `.environmentObject` test doubles
> - **Multiple preview states** — loading, error, empty, dark mode, large Dynamic Type
> - **`.previewDisplayName`** for clarity in canvas
> - **Don't** require network in previews — inject fixed data
> - CI optional: **preview tests** (snapshot) on release branches; not every team runs them on every PR
>
> Previews are **developer productivity**, not a substitute for unit tests or device QA.

---

## Code

```swift
#Preview("Loaded") {
    OrdersView(vm: .previewLoaded)
        .environment(\.apiClient, .mock)
}

#Preview("Empty state") {
    OrdersView(vm: .previewEmpty)
}

#Preview("Dark + AX") {
    OrdersView(vm: .previewLoaded)
        .preferredColorScheme(.dark)
        .dynamicTypeSize(.accessibility3)
}
```

---

## Avoid

- Previews that only work signed into production API
- Checking in preview assets with secrets
