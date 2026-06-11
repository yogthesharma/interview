# How do you test async Swift code?

**Target time:** 30–45 seconds

---

## Talk track

> **XCTest async tests** — mark test `async throws`, `await` directly. No `XCTestExpectation` needed for simple cases.
>
> **Inject dependencies** — `APIClientProtocol` with mock returning canned data or controlled delays.
>
> **Cancellation tests** — start `Task`, cancel, assert cleanup via `Task.checkCancellation` paths.
>
> **`@MainActor` tests** — annotate test class/method when testing ViewModels.
>
> **Clocks / time** — inject `DateProvider` or use `Task.sleep` sparingly; prefer deterministic mocks over real sleeps.
>
> Same patterns as testing async JS with injected fetch mocks.

---

## Code

```swift
final class MockAPI: APIClient {
    var orders: [Order] = [.fixture]
    func fetchOrders() async throws -> [Order] { orders }
}

@MainActor
func test_load_populatesOrders() async throws {
    let vm = OrdersViewModel(api: MockAPI())
    await vm.load()
    XCTAssertEqual(vm.orders.count, 1)
}

func test_cancel_stopsProcessing() async {
    let task = Task { await processor.runAll() }
    task.cancel()
    let result = await task.value
    XCTAssertTrue(result.wasCancelled)
}
```

---

## Avoid

- `sleep(5)` in unit tests for timing
- Hitting production network in XCTest
