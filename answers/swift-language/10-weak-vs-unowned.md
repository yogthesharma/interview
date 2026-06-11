# weak vs unowned — when is unowned safe?

**Target time:** 30 seconds

---

## Talk track

> Both break **strong** reference cycles. **`weak`** — optional, becomes **`nil`** when target deallocates. Safe when referenced object may disappear first.
>
> **`unowned`** — **non-optional**, no runtime nil check; assumes referenced object **outlives** the referrer. Access after dealloc → **crash**.
>
> **Use `unowned` when:** relationship is mandatory and lifetime is guaranteed — e.g. closure in `self` where `self` owns the closure's lifetime and always dies after owner, or parent-child where child never survives parent.
>
> **Default to `weak`** in async/UI — safer when unsure.

---

## Code

```swift
class Customer {
    var card: CreditCard?
}

class CreditCard {
    unowned let owner: Customer // card never outlives customer
    init(owner: Customer) { self.owner = owner }
}

// Prefer weak in escaping closures
loader.fetch { [weak self] in
    self?.refresh()
}
```

---

## Avoid

- `unowned self` in network callbacks where view controller may dismiss first
- `weak` on value types — only classes participate in ARC
