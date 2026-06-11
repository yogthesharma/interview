# Windowed apps vs menu bar apps — tradeoffs?

**Target time:** 30–45 seconds

---

## Talk track

> **Windowed apps** — standard `NSWindow` / SwiftUI `WindowGroup`. Full UI, dock icon, multi-window, good for editors, dashboards, tools with rich interaction.
>
> **Menu bar apps** — live in the **status item** (top-right); often `LSUIElement` hides dock icon. Great for quick utilities: clipboard, VPN toggle, timers, monitoring. UI is usually a small popover.
>
> **Tradeoffs:**
> - Menu bar: always accessible, minimal chrome; limited space, easy to forget when hidden
> - Windowed: room for complex UX; user must switch apps
>
> **Hybrid:** menu bar icon opens a full window (common pattern for pro utilities).

---

## Code

```swift
// SwiftUI — menu bar extra (macOS 13+)
MenuBarExtra("MyApp", systemImage: "bolt.fill") {
    SettingsView()
}

// Hide dock icon — Info.plist: Application is agent (UIElement) = YES
```

---

## Avoid

- Menu bar app with a complex multi-pane UI — wrong chrome
- Forgetting `LSUIElement` behavior when users expect a Dock icon
