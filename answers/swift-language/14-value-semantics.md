# Value semantics — why does Swift prefer structs for models?

**Target time:** 30 seconds

---

## Talk track

> **Value semantics** — assignment copies independent data (with COW optimization); no shared mutable state by accident.
>
> **Why structs for models:** predictable behavior in multithreaded/async code, easier reasoning (mutation is local), works with SwiftUI state, `Codable`, `Equatable` synthesis.
>
> **Reference semantics (class)** when you need **identity** — two variables must mean the same live object (view models tied to lifecycle, UIKit objects, shared mutable cache with coordination).
>
> Swift's stance: **default struct**, reach for class deliberately — opposite of Java/C# OOP default.

---

## Code

```swift
struct OrderItem {
    var sku: String
    var quantity: Int
}

var cartA = [OrderItem(sku: "A", quantity: 1)]
var cartB = cartA
cartB[0].quantity = 2
// cartA unchanged — safe copy semantics
```

---

## Avoid

- Class for every DTO "because OOP"
- Large struct with constant COW copies in hot paths without profiling
