# Protocols with `associatedtype` — when do you need them?

**Target time:** 30–45 seconds

---

## Talk track

> An **`associatedtype`** is a **placeholder type** inside a protocol — like a generic parameter the conforming type decides.
>
> Use when behavior depends on a **related type** that varies per implementation: `Collection.Element`, `IteratorProtocol.Element`, repository `Model` type.
>
> **Can't** use a protocol with associated types (PAT) as a plain variable type without **type erasure** or `some`/`any` — `var repo: Repository` fails if `Repository` has `associatedtype Model`.
>
> **Fixes:** generics `func load<R: Repository>(repo: R)`, `some Repository` (opaque), `any Repository` (boxed, Swift 5.7+).

---

## Code

```swift
protocol Cache {
    associatedtype Key: Hashable
    associatedtype Value
    func get(_ key: Key) -> Value?
    func set(_ value: Value, for key: Key)
}

struct MemoryCache<K: Hashable, V>: Cache {
    typealias Key = K
    typealias Value = V
    private var store: [K: V] = [:]
    func get(_ key: K) -> V? { store[key] }
    func set(_ value: V, for key: K) { store[key] = value }
}
```

---

## Avoid

- Associated types when a simple generic struct would suffice
- Storing PAT-typed properties without `any` or a wrapper type
