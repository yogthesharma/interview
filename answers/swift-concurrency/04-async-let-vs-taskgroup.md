# async let vs TaskGroup — when use each?

**Target time:** 30–45 seconds

---

## Talk track

> **`async let`** — fork **fixed, small number** of parallel tasks with known bindings at compile time. Syntax sugar for child tasks in scope. All must complete before scope ends.
>
> **`withTaskGroup` / `withThrowingTaskGroup`** — **dynamic parallelism** — add tasks in a loop, collect results, heterogeneous return types via `group.next()`.
>
> **Use `async let`:** 2–3 known parallel fetches (profile + settings).
>
> **Use TaskGroup:** N URLs, paginated batch workers, map over collection with concurrency limit.
>
> Both respect structured cancellation when parent task cancels.

---

## Code

```swift
// async let — fixed fan-out
func dashboard() async throws -> Dashboard {
    async let user = fetchUser()
    async let stats = fetchStats()
    return try await Dashboard(user: user, stats: stats)
}

// TaskGroup — dynamic
func fetchAll(urls: [URL]) async throws -> [Data] {
    try await withThrowingTaskGroup(of: Data.self) { group in
        for url in urls { group.addTask { try await fetch(url) } }
        var results: [Data] = []
        for try await data in group { results.append(data) }
        return results
    }
}
```

---

## Avoid

- `async let` in a loop (syntax doesn't scale — use TaskGroup)
- Unbounded TaskGroup size on 10k items — throttle with task limit pattern
