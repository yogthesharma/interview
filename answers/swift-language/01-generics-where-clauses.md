# Generics and generic constraints (`where` clauses) — give an example?

**Target time:** 30–45 seconds

---

## Talk track

> **Generics** let you write one implementation for many types — `Array<Element>`, `Optional<Wrapped>`. The compiler generates specialized code per concrete type.
>
> **Constraints** limit what types can be used: `func sort<T: Comparable>(_ items: [T])` — `T` must support `<`.
>
> **`where` clauses** add finer rules on associated types or multiple generics: "T and U must both be Equatable" or "Iterator.Element == Item".
>
> Same idea as TypeScript generics with `extends` — but Swift enforces at compile time with zero runtime cost.

---

## Code

```swift
func merge<C1: Collection, C2: Collection>(_ a: C1, _ b: C2) -> [C1.Element]
    where C1.Element == C2.Element, C1.Element: Comparable
{
    Array(a + b).sorted()
}

// Associated type constraint
protocol Container {
    associatedtype Item
    func contains(_ item: Item) -> Bool
}

extension Container where Item: Equatable {
    func contains(_ item: Item) -> Bool {
        // default impl when Item is Equatable
        false
    }
}
```

---

## Avoid

- Erasing to `Any` when a generic constraint would keep type safety
- Over-constraining — only require what the function actually needs
