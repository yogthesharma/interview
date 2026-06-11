# Protocol extensions — how do they enable default behavior?

**Target time:** 30–45 seconds

---

## Talk track

> **Protocol extensions** add methods and computed properties to **all conforming types** without a base class — default implementations.
>
> Conforming type **inherits defaults** but can **override** with a more specific implementation in the type itself (static dispatch) vs protocol witness table for defaults.
>
> Powers **protocol-oriented programming**: shared algorithms on `Collection`, `Identifiable` helpers, logging defaults.
>
> **Constraint extensions** — `extension Array where Element: Numeric` — defaults only when extra requirements met.

---

## Code

```swift
protocol Describable {
    var label: String { get }
    func describe() -> String
}

extension Describable {
    // Default — conformers get this free
    func describe() -> String { "Item: \(label)" }
}

struct User: Describable {
    let label: String
    // uses default describe()
}

struct Order: Describable {
    let label: String
    func describe() -> String { "Order #\(label)" } // override
}
```

---

## Avoid

- Putting stored properties in protocol extensions (not allowed)
- Surprise overrides — document when conformers should replace defaults
