# guard let vs if let — when do you use each?

**Target time:** 20–30 seconds

---

## Talk track

> Both unwrap optionals. **`if let`** — use when unwrap is **conditional logic** and you stay in the same flow (happy path inside the block).
>
> **`guard let`** — use for **early exit** preconditions: invalid input, missing dependencies, failed auth. Unwrapped bindings are available for the **rest of the function** after the guard.
>
> **Rule of thumb:** guard for "must have this to continue"; if let for "sometimes we have this."

---

## Code

```swift
func process(order: Order?) {
    guard let order, order.isPaid else { return }
    // order is non-optional here for entire function
    ship(order)
}

func format(_ value: Int?) -> String {
    if let value { return "\(value)" }
    return "—"
}
```

---

## Avoid

- Nesting many `if let` when `guard let` would flatten the happy path
- Using `guard` in a context where you need the else branch to do real work (not just exit)
