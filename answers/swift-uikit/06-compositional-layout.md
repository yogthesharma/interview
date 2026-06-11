# UICollectionViewCompositionalLayout — when would you use it?

**Target time:** 30–45 seconds

---

## Talk track

> **Compositional layout** (iOS 13+) builds collection views from **composable sections** — items, groups, sections with orthogonal scrolling, fractional widths, estimated heights.
>
> **Use when:** App Store–style grids, mixed layouts (carousel + grid), Pinterest-like sections, sticky headers, **without** custom `UICollectionViewLayout` math.
>
> **Skip when:** single uniform grid — `UICollectionViewFlowLayout` is enough; or SwiftUI `LazyVGrid` on new screens.
>
> **`NSCollectionLayoutSection` + `NSCollectionLayoutGroup`** — declarative section definitions; swap layouts per section with `UICollectionViewCompositionalLayout(sectionProvider:)`.

---

## Code

```swift
let item = NSCollectionLayoutItem(layoutSize: .init(widthDimension: .fractionalWidth(0.5),
                                                    heightDimension: .fractionalHeight(1.0)))
let group = NSCollectionLayoutGroup.horizontal(layoutSize: .init(widthDimension: .fractionalWidth(1.0),
                                                                 heightDimension: .absolute(120)),
                                               subitems: [item, item])
let section = NSCollectionLayoutSection(group: group)
let layout = UICollectionViewCompositionalLayout(section: section)
```

---

## Avoid

- Custom flow layout subclass for problems compositional layout already solves
- Ignoring supplementary items (headers/footers) in section design
