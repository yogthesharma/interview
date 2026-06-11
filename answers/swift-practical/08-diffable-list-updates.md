# Parse and display diffable list updates (insert/delete/move)

**Target time:** 12–18 min

---

## Approach

> Server returns patch or new list — use **`UITableViewDiffableDataSource`** or compute diff and **`apply` snapshot**.  
> Items must be **`Hashable`** with stable `id`.

---

## Solution (UIKit diffable)

```swift
enum Section { case main }

struct Order: Hashable, Identifiable {
    let id: String
    let title: String
}

final class OrdersViewController: UIViewController {
    private var tableView: UITableView!
    private var dataSource: UITableViewDiffableDataSource<Section, Order>!

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView = UITableView(frame: view.bounds)
        view.addSubview(tableView)

        dataSource = UITableViewDiffableDataSource(tableView: tableView) { tableView, indexPath, order in
            let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
            cell.textLabel?.text = order.title
            return cell
        }
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
    }

    func apply(orders: [Order], animating: Bool = true) {
        var snapshot = NSDiffableDataSourceSnapshot<Section, Order>()
        snapshot.appendSections([.main])
        snapshot.appendItems(orders, toSection: .main)
        dataSource.apply(snapshot, animatingDifferences: animating)
    }

    // After API returns updated list:
    func handleSyncResponse(_ orders: [Order]) {
        apply(orders: orders) // UIKit diffs insert/delete/move
    }
}
```

---

## SwiftUI note

> SwiftUI `List` + `Identifiable` handles many updates; for explicit moves use `.onMove` or drive from snapshot-like state.

---

## Avoid

- `reloadData()` for single-row insert — loses animations
- Unstable `Hashable` — duplicate IDs break diffing
