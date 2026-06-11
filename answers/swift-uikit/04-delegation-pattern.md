# Delegation pattern — why is it everywhere in UIKit?

**Target time:** 30–45 seconds

---

## Talk track

> **Delegation** — one object **forwards events/decisions** to another via a **protocol** (`UITableViewDelegate`). UITableView doesn't know your business logic; your view controller implements callbacks.
>
> **Why UIKit loves it:** avoids subclassing framework classes, **single inheritance** limit, keeps reusable components generic, mirrors Cocoa patterns predating closures.
>
> **vs closures:** delegates scale for many optional callbacks; closures fine for one-shot completions. Modern APIs often add **async/await** or blocks alongside delegates.
>
> **Critical:** delegate on classes must be **`weak`** to avoid retain cycles (UIKit `weak` delegates for this reason on their side).

---

## Code

```swift
protocol OrderListDelegate: AnyObject {
    func orderList(_ list: OrderListVC, didSelect order: Order)
}

final class OrderListVC: UIViewController {
    weak var delegate: OrderListDelegate?
}

extension CheckoutVC: OrderListDelegate {
    func orderList(_ list: OrderListVC, didSelect order: Order) {
        navigationController?.pushViewController(OrderDetailVC(order: order), animated: true)
    }
}
```

---

## Avoid

- `strong` delegate references
- Massive delegate protocols — split or use coordinator
