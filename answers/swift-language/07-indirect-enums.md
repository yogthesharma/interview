# indirect enums — what problem do they solve?

**Target time:** 20–30 seconds

---

## Talk track

> Swift enums are **value types** with known size. **Recursive** enums (e.g. expression trees, linked-list style AST) would be infinitely sized without indirection.
>
> **`indirect`** tells the compiler to store the associated value **behind a reference** (heap box) — breaks the infinite size cycle.
>
> Use on **recursive cases** only — `enum Expr { case literal(Int); indirect case add(Expr, Expr) }`.
>
> Alternative: wrap recursion in a **class** or use `indirect enum` at the enum level (all cases indirect).

---

## Code

```swift
indirect enum ArithmeticExpression {
    case number(Int)
    case addition(ArithmeticExpression, ArithmeticExpression)
    case multiplication(ArithmeticExpression, ArithmeticExpression)
}

let expr = ArithmeticExpression.addition(
    .number(2),
    .multiplication(.number(3), .number(4))
)
```

---

## Avoid

- `indirect` on non-recursive cases — unnecessary heap allocation
- Deep trees without considering stack/heap — very deep recursion can still blow stack in evaluation
