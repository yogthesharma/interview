# Brownfield vs greenfield — integrating Swift into an Obj-C codebase?

**Target time:** 30–45 seconds

---

## Talk track

> **Brownfield** — existing Obj-C app; add Swift incrementally via **bridging header** (Obj-C → Swift) and **generated `-Swift.h`** (Swift → Obj-C).
>
> **Strategy:** new features in Swift modules; wrap legacy in adapters; don't big-bang rewrite. `@objc` + `NSObject` subclasses where Obj-C must call Swift.
>
> **Greenfield** — Swift + SwiftUI from day one; SPM modules; skip storyboard legacy.
>
> **Risk areas:** mixed memory models, nullable Obj-C APIs, naming (`@objc(name:)`), build times as Swift surface grows.
>
> Same as TS migration at IQM — strangle fig pattern, module at a time.

---

## Code

```swift
@objcMembers
final class OrderBridge: NSObject {
    @objc func refreshOrders(completion: @escaping ([NSDictionary]) -> Void) {
        Task {
            let orders = try await repo.orders(forceRefresh: true)
            completion(orders.map { $0.asNSDictionary })
        }
    }
}
```

---

## Avoid

- Rewriting stable Obj-C core for aesthetics only
- Swift structs exposed to Obj-C without bridge class
