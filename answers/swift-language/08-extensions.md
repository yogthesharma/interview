# Extensions — what can you extend, and what are you not allowed to extend?

**Target time:** 30 seconds

---

## Talk track

> **Extensions** add methods, computed properties, nested types, protocol conformance, and convenience initializers to existing types — including types you don't own (`String`, `Array`, UIKit types).
>
> **Cannot add:** stored properties (no new ivars), **override** existing methods, change memory layout, add deinitializers to non-class types you didn't define as class.
>
> **Use for:** organizing code (`User+Networking.swift`), protocol conformance split across files, default implementations via protocol extensions.
>
> **@retroactive** (Swift 5.9+) — attach conformance to stdlib/third-party types when needed.

---

## Code

```swift
extension String {
    var trimmed: String { trimmingCharacters(in: .whitespacesAndNewlines) }
}

extension Array where Element == Int {
    var sum: Int { reduce(0, +) }
}

// Conformance in extension
extension URL: Identifiable {
    public var id: String { absoluteString }
}
```

---

## Avoid

- Extensions that hide complexity — god-file `String+Everything.swift`
- Trying to add stored state via associated objects in Swift (Obj-C pattern, avoid)
