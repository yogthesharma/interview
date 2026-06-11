# Multi-window support in SwiftUI on macOS?

**Target time:** 30–45 seconds

---

## Talk track

> macOS is inherently **multi-window**. SwiftUI models this with **Scenes**:
>
> - **`WindowGroup`** — document-style; "+" in title bar opens new window; each window gets its own state when tied to a model
> - **`Window`** — single-instance utility windows (settings, about)
> - **`DocumentGroup`** — file-based apps open/save documents, one window per file
>
> **State:** pass identity via `WindowGroup(id:)` or document `FileDocument`. Use `@Environment(\.openWindow)` to open programmatically.
>
> **Restoration:** system can restore windows on relaunch if configured.

---

## Code

```swift
@main
struct NotesApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: NoteDocument()) { file in
            NoteEditor(document: file.$document)
        }

        Settings {
            PreferencesView()
        }
    }
}

// Open settings window
@Environment(\.openSettings) private var openSettings
Button("Preferences…") { openSettings() }
```

---

## Avoid

- Single shared `@StateObject` blindly across all windows — documents need per-window models
- Forgetting `Settings` scene — users expect Cmd+, preferences
