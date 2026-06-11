# Equatable / Hashable — when must you implement them manually?

**Target time:** 30–45 seconds

---

## Talk track

> Compiler **synthesizes** `Equatable` / `Hashable` when **all stored properties** conform (and for enums, all associated values).
>
> **Implement manually when:**
> - Only **subset of fields** define equality (identity by `id` only)
> - **Floating point** tolerance needed — synthesized uses exact `==`
> - **Reference types** where identity vs equality differs
> - Synthesis **fails** — property doesn't conform, or you have `@objc` / unavailable requirements
>
> **`Hashable` contract:** equal values → same hash; don't mutate hashed fields while in a `Set`/`Dictionary` key.
>
> Use `==` for business equality; `===` only for class identity.

---

## Code

```swift
struct User: Equatable, Hashable {
    let id: String
    var name: String
    var updatedAt: Date

    // Equal by id only — ignore name/date for set membership
    static func == (lhs: User, rhs: User) -> Bool { lhs.id == rhs.id }
    func hash(into hasher: inout Hasher) { hasher.combine(id) }
}
```

---

## Avoid

- Including mutable display fields in `Hashable` if object lives in a `Set`
- Manual `Hashable` that doesn't match `==` — breaks dictionaries
