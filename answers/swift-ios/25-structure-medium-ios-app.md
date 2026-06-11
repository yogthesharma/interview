# How do you structure a medium-sized iOS app?

**Target time:** 45–60 seconds

---

## Talk track

> **Feature modules** by domain — `Features/Orders/`, `Features/Profile/` — each with Views, ViewModels, local models. Shared code in `Core/` or packages.
>
> **Layers:**
> - **App** — entry, DI container, deep links, push registration
> - **Features** — UI + feature ViewModels
> - **Domain** — use cases, business rules (pure Swift)
> - **Data** — APIClient, repositories, persistence (Core Data/SwiftData)
>
> **Navigation:** Coordinator or SwiftUI `NavigationStack` + router enum — views don't hardcode push/present.
>
> **Dependencies:** protocol-based injection — test doubles for API. **SPM** for internal modules as app grows.
>
> Mirrors how I'd structure a **medium Node + React** app — feature folders, shared lib, thin views.

---

## Folder sketch

```
App/
Features/
  Orders/
    OrdersView.swift
    OrdersViewModel.swift
  Auth/
Core/
  Networking/
  Models/
  DesignSystem/
```

---

## Avoid

- Single flat folder at 50+ files
- God `AppDelegate` holding all services
