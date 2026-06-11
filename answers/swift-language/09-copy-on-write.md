# Copy-on-write in Array / Dictionary — why does it matter for performance?

**Target time:** 30–45 seconds

---

## Talk track

> Swift `Array`, `Dictionary`, `Set` use **copy-on-write (COW)**: assignment copies the **reference** cheaply; actual buffer copy happens only when one copy **mutates** while sharing storage.
>
> **Why it matters:** passing large arrays to functions is O(1) until someone writes — great for value semantics without constant duplication.
>
> **Watch out:** **read-only** sharing is cheap; frequent **independent mutations** of copies trigger full buffer copies. Struct holding a huge array — each mutating method may copy if `self` was shared.
>
> **Detect:** `isKnownUniquelyReferenced` for custom COW types; Instruments for unexpected copies.

---

## Code

```swift
var a = [1, 2, 3, 4, 5]
var b = a          // shares buffer — no copy yet
b.append(6)        // COW — b gets its own buffer; a unchanged

// Custom COW pattern (simplified)
final class Storage { var items: [Int] = [] }
struct MyList {
    private var storage = Storage()
    mutating func append(_ x: Int) {
        if !isKnownUniquelyReferenced(&storage) {
            storage = Storage()
            storage.items = self.storage.items
        }
        storage.items.append(x)
    }
}
```

---

## Avoid

- Assuming `var copy = array` is always a full deep copy immediately
- Mutating shared struct copies in hot loops without awareness
