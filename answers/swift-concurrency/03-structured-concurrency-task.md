# Structured concurrency — Task, child tasks, cancellation?

**Target time:** 45–60 seconds

---

## Talk track

> **Structured concurrency** — async work forms a **tree**: parent `Task` owns **child tasks**; cancel parent → children cancel too. No orphaned fire-and-forget by default.
>
> **`Task { }`** — starts async work from sync context. **`Task.detached`** — no parent (use sparingly — loses automatic cancellation).
>
> **Cancellation** is **cooperative** — check `Task.isCancelled`, `try Task.checkCancellation()`, respect cancellation in `URLSession` via `task.cancel()`.
>
> **SwiftUI `.task`** creates a task cancelled on view disappear — structured link to UI lifecycle.
>
> Like AbortController in JS — signal propagates if you check it.

---

## Code

```swift
func refreshAll() async {
    await withTaskCancellationHandler {
        await withTaskGroup(of: Void.self) { group in
            group.addTask { await fetchProfile() }
            group.addTask { await fetchSettings() }
        }
    } onCancel: {
        api.cancelInFlight()
    }
}

// Cooperative cancel in long loop
for item in items {
    try Task.checkCancellation()
    await process(item)
}
```

---

## Avoid

- `Task.detached` for work that should stop when user leaves screen
- Assuming cancellation instantly stops CPU — must check flags
