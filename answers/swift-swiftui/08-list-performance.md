# List performance with large data sets — pitfalls?

**Target time:** 30–45 seconds

---

## Talk track

> **`List`** is lazy — similar to UITableView. Pitfalls still happen:
>
> - **Unstable identity** — `ForEach(items, id: \.self)` on non-unique data causes full reloads; use stable `Identifiable.id`
> - **Heavy `body` per row** — shadows, blurs, nested `List`, remote images without cache
> - **Whole-array state updates** — replacing 10k array triggers big diff; paginate or window
> - **Main-thread decode** of huge JSON before display
>
> **Fixes:** pagination / `onAppear` on last row, `LazyVStack` in `ScrollView` for custom layouts, thumbnail images, `Equatable` row views, move filtering off main thread.
>
> Same playbook as **virtualized-react** — only render visible, stable keys, light rows.

---

## Code

```swift
List {
    ForEach(viewModel.visiblePage) { item in
        OrderRow(item: item)
            .onAppear { viewModel.loadNextPageIfNeeded(current: item) }
    }
}

struct OrderRow: View, Equatable {
    let item: Order
    static func == (lhs: OrderRow, rhs: OrderRow) -> Bool { lhs.item.id == rhs.item.id }
    var body: some View { Text(item.title) }
}
```

---

## Avoid

- `List(0..<100_000)` with complex cells and no pagination
- Using array index as `id` for reorderable/deletable lists
