# Value types vs reference types — struct vs class?

**Target time:** 30–45 seconds

---

## Talk track

> **Structs** (and enums) are **value types** — copied on assignment. **Classes** are **reference types** — shared instance, identity matters (`===`).
>
> **Default to struct** for models and data — thread-safer copies, predictable mutation. Use **class** when you need **shared mutable state**, inheritance, or UIKit types (UIView subclasses must be classes).
>
> **Structs** get automatic memberwise init; **classes** need `init`, support `deinit`, and participate in ARC reference counting.

---

## Code

```swift
struct Point { var x, y: Int }
var a = Point(x: 0, y: 0)
var b = a
b.x = 10
// a.x still 0 — independent copy

class Counter { var count = 0 }
let c1 = Counter()
let c2 = c1
c2.count = 5
// c1.count is 5 — same instance
```

---

## Avoid

- "Always use classes for models" — Swift convention is struct-first
- Forgetting `mutating` on struct methods that change `self`
