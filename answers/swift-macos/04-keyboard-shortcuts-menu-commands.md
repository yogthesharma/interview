# How do you handle keyboard shortcuts and menu commands?

**Target time:** 30–45 seconds

---

## Talk track

> macOS users expect **menu bar commands** and **keyboard shortcuts** — not optional on desktop.
>
> **AppKit:** `NSMenu` / Main Menu in storyboard or code; `keyEquivalent` on `NSMenuItem` (`"s"` + Command for Save). **First Responder** chain routes actions to focused view.
>
> **SwiftUI:** `.commands { }` on `Scene` — `CommandGroup`, `CommandMenu`, `.keyboardShortcut()`. Buttons in toolbars get shortcuts via modifiers.
>
> **Patterns:** centralize actions in a **focused value** or shared `AppState`; disable menu items when action invalid (`canSave`). Show shortcuts in tooltips.
>
> **Discoverability:** every common action should appear in a menu with a visible shortcut.

---

## Code

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            EditorView()
        }
        .commands {
            CommandGroup(replacing: .saveItem) {
                Button("Save") { save() }
                    .keyboardShortcut("s", modifiers: .command)
            }
            CommandMenu("Tools") {
                Button("Format Document") { format() }
                    .keyboardShortcut("f", modifiers: [.command, .shift])
            }
        }
    }
}
```

---

## Avoid

- iOS-only patterns (no menus) on Mac
- Hardcoding shortcuts without respecting system-reserved keys where possible
