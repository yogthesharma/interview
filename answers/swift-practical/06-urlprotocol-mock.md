# Write a URLProtocol mock or protocol-based mock for unit tests

**Target time:** 10–15 min

---

## Approach

> **Protocol mock** — simplest for ViewModel tests.  
> **`URLProtocol`** — integration-style test of real `URLSession` stack.

---

## Protocol mock (preferred for VM)

```swift
protocol OrderAPI {
    func fetchOrders() async throws -> [Order]
}

struct MockOrderAPI: OrderAPI {
    var result: Result<[Order], Error> = .success([.fixture])

    func fetchOrders() async throws -> [Order] {
        try result.get()
    }
}

@MainActor
func test_load_success() async throws {
    let vm = OrdersViewModel(api: MockOrderAPI(result: .success([.fixture])))
    await vm.loadFirst()
    XCTAssertEqual(vm.orders.count, 1)
}
```

---

## URLProtocol stub

```swift
final class MockURLProtocol: URLProtocol {
    static var handler: ((URLRequest) throws -> (HTTPURLResponse, Data))?

    override class func canInit(with request: URLRequest) -> Bool { true }
    override class func canonicalRequest(for request: URLRequest) -> URLRequest { request }

    override func startLoading() {
        guard let handler = MockURLProtocol.handler else {
            client?.urlProtocol(self, didFailWithError: URLError(.badURL))
            return
        }
        do {
            let (response, data) = try handler(request)
            client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)
            client?.urlProtocol(self, didLoad: data)
            client?.urlProtocolDidFinishLoading(self)
        } catch {
            client?.urlProtocol(self, didFailWithError: error)
        }
    }

    override func stopLoading() {}
}

func makeMockSession() -> URLSession {
    let config = URLSessionConfiguration.ephemeral
    config.protocolClasses = [MockURLProtocol.self]
    return URLSession(configuration: config)
}
```

---

## Avoid

- Hitting real network in unit tests
- Global handler without reset between tests — use `setUp`/`tearDown`
