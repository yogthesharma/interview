# UITableView / UICollectionView cell reuse — how does dequeuing work?

**Target time:** 30–45 seconds

---

## Talk track

> Only **visible cells** exist in memory. UITableView maintains a **reuse pool** keyed by **reuse identifier**.
>
> **`dequeueReusableCell(withIdentifier:for:)`** — returns recycled cell off-screen or creates new if pool empty. **Always configure** in `cellForRow` — never assume clean state.
>
> **Register** once: `register(UITableViewCell.self, forCellReuseIdentifier:)` or nib registration.
>
> **Performance:** reuse avoids allocating thousands of cells; reset images, cancel async image loads, clear text on configure to prevent flicker/wrong data.

---

## Code

```swift
tableView.register(OrderCell.self, forCellReuseIdentifier: OrderCell.reuseID)

func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: OrderCell.reuseID, for: indexPath) as! OrderCell
    cell.configure(with: orders[indexPath.row])
    return cell
}
```

---

## Avoid

- `UITableViewCell(style:)` every row without reuse — memory blowup on long lists
- Leaving old `UIImage` on cell when new row has no image
