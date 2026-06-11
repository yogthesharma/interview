# Diffable data source — what problems does it solve?

**Target time:** 30–45 seconds

---

## Talk track

> **`UITableViewDiffableDataSource` / `UICollectionViewDiffableDataSource`** (iOS 13+) — you apply a **snapshot** of sections + items; UIKit **diffs** and animates changes automatically.
>
> **Solves:** manual `insertRows`/`deleteRows` bugs, index path crashes, inconsistent state after updates, boilerplate `numberOfSections`/`numberOfRows`.
>
> **Item type** must be **`Hashable`** — usually struct with stable `id`.
>
> **Pattern:** mutate data → build `NSDiffableDataSourceSnapshot` → `apply(snapshot, animatingDifferences: true)`.

---

## Code

```swift
var dataSource: UITableViewDiffableDataSource<Section, Order>!

func apply(orders: [Order], animating: Bool = true) {
    var snapshot = NSDiffableDataSourceSnapshot<Section, Order>()
    snapshot.appendSections([.main])
    snapshot.appendItems(orders, toSection: .main)
    dataSource.apply(snapshot, animatingDifferences: animating)
}
```

---

## Avoid

- Non-stable `Hashable` identity — rows jump or duplicate
- Applying snapshot from background thread — update on main
