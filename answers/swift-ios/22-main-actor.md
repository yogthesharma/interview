# What is @MainActor? Why does UI work belong on the main thread?

**Target time:** 30–45 seconds

---

## Talk track

> **UIKit / SwiftUI** are not thread-safe — all layout, touch handling, and view updates must run on the **main thread** (main queue).
>
> **`@MainActor`** marks a class/function as main-thread-isolated — compiler enforces it. ViewModels that drive UI are often `@MainActor`.
>
> **Pattern:** fetch on background/async context → `await MainActor.run { self.items = data }` or mark ViewModel `@MainActor` and call `async` APIs with `await`.
>
> **Swift 6** strict concurrency catches accidental background UI access at compile time.

---

## Code

```swift
@MainActor
final class FeedViewModel: ObservableObject {
    @Published var posts: [Post] = []

    func load() async {
        let fetched = try? await api.fetchPosts() // off main during await
        self.posts = fetched ?? [] // back on MainActor — safe UI update
    }
}
```

---

## Avoid

- `DispatchQueue.main.async` spaghetti when `@MainActor` / `await` is clearer
- Heavy JSON parsing on main thread — only UI mutations need main
