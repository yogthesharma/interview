# What are closures? What does @escaping mean?

**Target time:** 30–45 seconds

---

## Talk track

> A **closure** is a self-contained function value — captures variables from surrounding scope (like JS closures).
>
> **Non-escaping** (default): closure must run **before** the function returns — e.g. `map`, synchronous callbacks.
>
> **`@escaping`**: closure may outlive the function — stored on a property, dispatched async, completion handlers. Compiler requires `self.` explicitly and warns about retain cycles.
>
> **Trailing closure syntax** — last closure arg can sit outside parens: `fetch { result in ... }`.

---

## Code

```swift
func load(completion: @escaping (Result<Data, Error>) -> Void) {
    URLSession.shared.dataTask(with: url) { data, _, error in
        // escapes — runs later on URLSession queue
        completion(.success(data ?? Data()))
    }.resume()
}

let doubled = [1, 2, 3].map { $0 * 2 } // non-escaping
```

---

## Avoid

- Forgetting `[weak self]` in escaping UI/network closures
- Marking everything `@escaping` when it's synchronous
