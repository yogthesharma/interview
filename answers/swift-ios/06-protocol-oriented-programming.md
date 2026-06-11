# What is protocol-oriented programming in Swift?

**Target time:** 30–45 seconds

---

## Talk track

> Swift favors **protocols + extensions** over deep class inheritance. Define **behavior contracts** (`Codable`, `Identifiable`, custom protocols), then conform **structs, classes, or enums**.
>
> **Protocol extensions** provide default implementations — share code without a base class. **Composition** over inheritance.
>
> **Example:** `Collection` algorithms work on Array, Set, custom types — same pattern as React "interface + composition" vs giant base components.
>
> **Associated types** make protocols generic (`IteratorProtocol`).

---

## Code

```swift
protocol Loggable {
    var logTag: String { get }
    func log(_ message: String)
}

extension Loggable {
    func log(_ message: String) {
        print("[\(logTag)] \(message)")
    }
}

struct APIService: Loggable {
    var logTag: String { "API" }
}
```

---

## Avoid

- Treating protocols as only for mocking — they're core to Swift design
- Over-abstracting with protocols everywhere on day one
