# View controller containment — child VCs, when use?

**Target time:** 30–45 seconds

---

## Talk track

> **Container view controller** embeds **child** view controllers — parent's view holds child's `view`. Proper API: `addChild`, add subview, layout, `didMove(toParent:)`.
>
> **When to use:** tab-like UI inside one screen, pager (`UIPageViewController`), split master-detail, reusable screen chunks (map + bottom sheet), replacing child on state change.
>
> **Lifecycle:** child gets full VC lifecycle — `viewWillAppear` when container shows. Remove with `willMove(nil)`, remove view, `removeFromParent`.
>
> **vs subviews only:** use child VC when the chunk has **its own logic, lifecycle, or navigation** — not just static views.

---

## Code

```swift
func showDetail(_ detailVC: UIViewController) {
    children.forEach { removeChild($0) }

    addChild(detailVC)
    detailContainer.addSubview(detailVC.view)
    detailVC.view.frame = detailContainer.bounds
    detailVC.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    detailVC.didMove(toParent: self)
}

func removeChild(_ child: UIViewController) {
    child.willMove(toParent: nil)
    child.view.removeFromSuperview()
    child.removeFromParent()
}
```

---

## Avoid

- Adding child VC view without `addChild` — broken lifecycle, rotation bugs
- Nesting many levels without coordinator — spaghetti navigation
