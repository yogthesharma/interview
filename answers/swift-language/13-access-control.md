# final, open, public, internal — how do you think about API surface?

**Target time:** 30–45 seconds

---

## Talk track

> Swift access control defines **module boundary** — default is **`internal`** (app target / SPM module).
>
> | Level | Meaning |
> |-------|---------|
> | `private` | File or enclosing declaration |
> | `fileprivate` | Same source file |
> | `internal` | Module — default |
> | `public` | Visible outside module; **subclassing/overriding outside blocked** unless `open` |
> | `open` | Public + subclassable/overrideable outside module (classes/methods) |
> | `final` | No further overrides/subclasses |
>
> **SPM libraries:** mark stable API `public`; keep implementation `internal`. Use `final` on classes not designed for inheritance.
>
> **`@_exported import`** rare — prefer explicit imports for consumers.

---

## Code

```swift
public protocol APIClient {
    func fetch() async throws -> Data
}

public final class DefaultAPIClient: APIClient {
    public init() {}
    public func fetch() async throws -> Data { ... }
}

// internal — hidden from other modules
struct RequestSigner { ... }
```

---

## Avoid

- Making everything `public` in a framework — locks API surface
- `open` when `public` + `final` is enough
