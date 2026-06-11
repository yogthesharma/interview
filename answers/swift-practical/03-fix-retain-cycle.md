# Fix a retain cycle between a view controller and a network callback

**Target time:** 8–12 min

---

## Approach

> Identify **strong reference loop**: VC holds closure/service, closure captures `self` strongly, service holds closure.  
> Fix with **`[weak self]`** + `guard let self`, or weak delegate.

---

## Broken

```swift
final class OrdersViewController: UIViewController {
    private let client = NetworkClient()
    private var orders: [Order] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        client.onComplete = { result in
            self.orders = (try? result.get()) ?? [] // strong self + stored closure → cycle
            self.tableView.reloadData()
        }
        client.fetchOrders()
    }
}

final class NetworkClient {
    var onComplete: ((Result<[Order], Error>) -> Void)?

    func fetchOrders() {
        URLSession.shared.dataTask(with: url) { data, _, error in
            // ...
            self.onComplete?(.success(orders))
        }.resume()
    }
}
```

---

## Fixed

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    client.onComplete = { [weak self] result in
        guard let self else { return }
        self.orders = (try? result.get()) ?? []
        self.tableView.reloadData()
    }
    client.fetchOrders()
}

deinit { print("OrdersVC deallocated") } // verify in debug
```

**Better:** replace stored closure with `async` API — no cycle surface.

---

## Avoid

- `unowned self` if VC can dismiss before callback
- Forgetting to nil `onComplete` in `deinit` when not using weak
