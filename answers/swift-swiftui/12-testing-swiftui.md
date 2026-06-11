# Testing SwiftUI views — snapshot tests, ViewInspector, or logic-only tests?

**Target time:** 45–60 seconds

---

## Talk track

> **Default recommendation: logic-only tests** — test **ViewModels**, parsers, reducers, navigation route mapping. SwiftUI views stay thin; XCTest async tests on `@MainActor` VMs. Best ROI, least brittleness.
>
> **Snapshot tests** (point-in-time / swift-snapshot-testing) — catch visual regressions on key screens; brittle to font/OS changes; good for design-system components with controlled environment.
>
> **ViewInspector** — introspect view hierarchy in tests; fragile across SwiftUI versions; use sparingly for critical bindings.
>
> **UI tests (`XCUITest`)** — end-to-end flows; slow; login/checkout level.
>
> My bias from React: test hooks/VM, not every component render — same on iOS.

---

## Code

```swift
@MainActor
func test_loadOrders_setsState() async {
    let vm = OrdersViewModel(api: MockAPI(orders: [.fixture]))
    await vm.load()
    XCTAssertEqual(vm.orders.count, 1)
    XCTAssertFalse(vm.isLoading)
}
```

---

## Avoid

- Snapshot-testing every screen on every PR without tolerance config
- Testing SwiftUI layout instead of user-visible behavior when UI test is more appropriate
