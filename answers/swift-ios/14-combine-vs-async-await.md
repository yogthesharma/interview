# What is Combine? When would you use it vs async/await?

**Target time:** 30–45 seconds

---

## Talk track

> **Combine** — Apple's **reactive** framework: publishers emit values over time, subscribers react. Great for **streams** — text field debounce, KVO, NotificationCenter, binding UI to changing events.
>
> **`async/await`** — better for **one-shot async** work: fetch user, save file, sequential API calls. Simpler mental model, less boilerplate.
>
> **Use Combine when:** multiple event sources merge, throttle/debounce UI, legacy `ObservableObject` + `@Published` pipelines, or integrating reactive APIs.
>
> **Use async/await when:** network layer, most new concurrency code. **SwiftUI `.task`** pairs naturally with async/await.
>
> **Trend:** new code leans async/await; Combine still valuable for reactive UI bindings.

---

## Code

```swift
// Combine — debounced search
searchPublisher
    .debounce(for: .milliseconds(300), scheduler: RunLoop.main)
    .sink { query in self.search(query) }
    .store(in: &cancellables)

// async/await — one-shot fetch
func search(_ query: String) async throws -> [Item] {
    try await api.fetch(query: query)
}
```

---

## Avoid

- Rewriting simple async calls as Combine chains
- Ignoring `AnyCancellable` storage — subscriptions die immediately
