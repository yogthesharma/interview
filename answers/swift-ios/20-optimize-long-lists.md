# How do you optimize long lists — UITableView, UICollectionView, or SwiftUI List?

**Target time:** 30–45 seconds

---

## Talk track

> All three **cell reuse** — only visible rows exist in memory.
>
> **UIKit `UITableView` / `UICollectionView`:** `dequeueReusableCell`, prefetching (`UITableViewDataSourcePrefetching`), diffable data source for animated updates, avoid heavy work in `cellForRow`.
>
> **SwiftUI `List` / `LazyVStack`:** lazy loading built in. For 10k+ rows or complex cells, **`LazyVStack`** in `ScrollView` or UIKit bridge. iOS 17+ `scrollTargetLayout` helps.
>
> **General rules:** lightweight cell models, async image loading with cache, precompute heights or use self-sizing carefully, profile with Instruments (Time Profiler, Core Animation).

---

## Code

```swift
// UIKit reuse
func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
  // configure from lightweight view model
    return cell
}

// SwiftUI — stable identity
List(items) { item in
    RowView(item: item)
}
```

---

## Avoid

- Loading full-res images synchronously in `cellForRow`
- Unstable `id` in SwiftUI lists causing full reloads
