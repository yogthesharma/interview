# some Protocol vs any Protocol — what's the difference?

**Target time:** 30–45 seconds

---

## Talk track

> **`some Protocol`** (opaque type) — caller knows it **conforms** to the protocol, but the **concrete type is fixed** and hidden. Compiler can inline and optimize. Return type `some View` in SwiftUI — always one concrete view type at compile time.
>
> **`any Protocol`** (existential) — **boxed** runtime type that conforms to the protocol. Heterogeneous collections: `[any Drawable]`. Small dynamic dispatch cost; required when storing mixed conformers.
>
> **Rule of thumb:** prefer **`some`** for return types and parameters when one concrete type is fine; use **`any`** when you need mixed types in one container or stored property with varying conformers.
>
> Swift 5.7+ made `any` explicit — `Protocol` alone as a type now means `any Protocol`.

---

## Code

```swift
// Opaque — caller sees Shape, implementer picks Circle or Rectangle
func makeShape() -> some Shape {
    Circle()
}

// Existential — mixed types in one array
var shapes: [any Shape] = [Circle(), Rectangle()]

// PAT + any (Swift 5.7+)
var caches: [any Cache] = [] // if Cache uses associatedtype, need any
```

---

## Avoid

- `some` in stored properties (except `@State` etc.) — use `any` or concrete type
- `any` everywhere when `some` would be faster and clearer
