# Mac Catalyst — what is it? When would you use it?

**Target time:** 30–45 seconds

---

## Talk track

> **Mac Catalyst** — run an **iPad/iOS app** on macOS with minimal changes. Xcode adds a Mac target; UIKit runs in a Mac window with menu bar adaptations.
>
> **Good when:** you already have a solid **iPad app**, want Mac presence fast, UI is UIKit-based, don't need pro Mac UX yet.
>
> **Not good when:** Mac-native UX matters (keyboard shortcuts, menus, multi-window, AppKit integrations), performance-sensitive Mac-only features, or you're **greenfield** — **native SwiftUI Mac** or AppKit is often cleaner.
>
> **Apple trend:** Catalyst still exists but **Universal iOS + native Mac SwiftUI** via shared codebase is the modern default for new products.

---

## Tradeoffs

| Catalyst | Native Mac |
|----------|------------|
| Fast port | Best Mac UX |
| iOS-like UI on Mac | Menus, windows, shortcuts |
| UIKit constraints | AppKit / SwiftUI full access |

---

## Avoid

- Catalyst for a Mac-first pro tool users expect to feel native
- Assuming Catalyst gets you App Store Mac without sandbox compliance
