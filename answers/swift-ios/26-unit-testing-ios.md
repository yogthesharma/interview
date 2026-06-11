# Unit testing on iOS — XCTest, mocking, UI tests?

**Target time:** 30–45 seconds

---

## Talk track

> **XCTest** — `XCTAssertEqual`, async tests with `async` test methods, `XCTExpectFailure` for known flakes.
>
> **Unit tests** target **ViewModels, parsers, use cases** — inject protocols (`APIClientProtocol`) and swap **mocks/stubs**. Keep SwiftUI views thin; test logic without rendering.
>
> **Mocking:** manual mocks, or libraries (Cuckoo, Mockingbird). Spy pattern — record calls + return canned `Result`.
>
> **UI tests (`XCUITest`):** slow, brittle — reserve for critical flows (login, checkout). Use **accessibility identifiers**, not label text.
>
> **Snapshot tests** (optional) — visual regression for key screens.

---

## Code

```swift
protocol UserAPI { func fetchUser(id: String) async throws -> User }

final class MockUserAPI: UserAPI {
    var userToReturn: User!
    func fetchUser(id: String) async throws -> User { userToReturn }
}

func test_loadUser_setsName() async {
    let mock = MockUserAPI()
    mock.userToReturn = User(name: "Ada")
    let vm = ProfileViewModel(api: mock)
    await vm.load(id: "1")
    XCTAssertEqual(vm.displayName, "Ada")
}
```

---

## Avoid

- Network calls in unit tests without `URLProtocol` stub
- 500 UI tests that break on every copy change
