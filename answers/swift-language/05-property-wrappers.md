# Property wrappers — @State, @Published, @AppStorage; how would you write a custom one?

**Target time:** 45–60 seconds

---

## Talk track

> **Property wrappers** add reusable **get/set behavior** to properties via `@Wrapper` syntax. Compiler desugars to `_property` storage + projected value (`$property`).
>
> **Built-ins:**
> - `@State` — SwiftUI view-local storage
> - `@Published` — emits `objectWillChange` on mutation
> - `@AppStorage` — UserDefaults-backed
>
> **Custom wrapper:** struct with `wrappedValue` (required), optional `projectedValue` for `$`.
>
> Use for validation, clamping, lazy init, dependency injection — DRY without subclassing.

---

## Code

```swift
@propertyWrapper
struct Clamped {
    private var value: Int
    let range: ClosedRange<Int>

    init(wrappedValue: Int, _ range: ClosedRange<Int>) {
        self.range = range
        self.value = min(max(wrappedValue, range.lowerBound), range.upperBound)
    }

    var wrappedValue: Int {
        get { value }
        set { value = min(max(newValue, range.lowerBound), range.upperBound) }
    }
}

struct Settings {
    @Clamped(0...100) var volume = 50
}
```

---

## Avoid

- Property wrappers for one-off logic used once
- Heavy side effects in `wrappedValue` setters without documenting it
