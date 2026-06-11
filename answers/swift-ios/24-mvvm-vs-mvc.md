# MVVM vs MVC — which patterns have you used on iOS?

**Target time:** 30–45 seconds

---

## Talk track

> **MVC (Apple's default):** View + ViewController + Model — problem: **Massive View Controller** when VC holds networking, formatting, and UI logic.
>
> **MVVM:** View (SwiftUI/UIKit) binds to **ViewModel** — exposes state + intents; Model is domain/data. ViewModel has no UIKit imports in ideal form. SwiftUI + `@Published` / `@Observable` fits MVVM naturally.
>
> **VIPER / Coordinator** — larger apps add routing and use-case layers.
>
> **My angle:** production depth is **React + hooks** (component ↔ ViewModel-like separation, server state in React Query). iOS MVVM maps cleanly — ViewModel ≈ custom hook + store, View ≈ component. I've studied/shipped smaller SwiftUI prototypes with MVVM; enterprise iOS I'd lean same separation of concerns.

---

## Code

```swift
@MainActor
final class LoginViewModel: ObservableObject {
    @Published var email = ""
    @Published var isLoading = false
    @Published var error: String?

    func submit() async {
        isLoading = true
        defer { isLoading = false }
        do { try await auth.login(email: email) }
        catch { error = error.localizedDescription }
    }
}
```

---

## Avoid

- Putting URLSession calls directly in SwiftUI `body`
- Claiming VIPER experience without being able to explain routing layer
