# @ViewBuilder — what is it doing under the hood?

**Target time:** 30 seconds

---

## Talk track

> **`@ViewBuilder`** is a **result builder** — transforms multiple statements in a closure into **one composite `View`** type without explicit `Group` wrapping.
>
> `var body: some View { Text("A"); Text("B") }` — compiler builds `_ConditionalContent` or `TupleView` tree via ViewBuilder.
>
> **`if`/`switch`/`ForEach`** in builders become conditional branches in the view type — each branch must return a View.
>
> **Custom containers:** `init(@ViewBuilder content: () -> Content)` — same pattern as `VStack`, `NavigationStack`.
>
> Limit: **~10 direct children** in older builders — split into subviews if compiler complains.

---

## Code

```swift
struct Card<Content: View>: View {
    @ViewBuilder let content: () -> Content

    var body: some View {
        VStack {
            content()
        }
        .padding()
        .background(.background)
    }
}

// Usage — trailing closure is ViewBuilder
Card {
    Text("Title")
    if showDetail {
        Text("Detail")
    }
}
```

---

## Avoid

- `AnyView` erasure everywhere to fix builder errors — refactor into `Group` or subviews
- Non-View statements directly in builder without `let _ = ...` workaround
