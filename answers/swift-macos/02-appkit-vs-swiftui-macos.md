# AppKit vs SwiftUI on macOS — when do you use each?

**Target time:** 30–45 seconds

---

## Talk track

> **AppKit** — mature macOS UI framework (`NSView`, `NSWindow`, `NSTableView`). Full control over menus, toolbars, complex table views, drag-and-drop, accessibility. Legacy Mac apps are AppKit-heavy.
>
> **SwiftUI on macOS** — declarative, fast for new features, shared with iOS. Good for settings panels, simple editors, multi-platform products. Gaps still exist for advanced AppKit behaviors.
>
> **When SwiftUI:** greenfield Mac app, cross-platform UI, standard forms/lists/windows.
>
> **When AppKit:** deep table/outline customization, legacy codebase, APIs not exposed in SwiftUI — or **`NSViewRepresentable`** bridge.
>
> **Real teams:** SwiftUI shell + AppKit islands, same pattern as UIKit on iOS.

---

## Code

```swift
// SwiftUI macOS window content
struct PreferencesView: View {
    var body: some View {
        Form {
            Toggle("Launch at login", isOn: $launchAtLogin)
        }
        .padding()
    }
}

// AppKit bridge for custom NSView
struct LegacyChart: NSViewRepresentable {
    func makeNSView(context: Context) -> CustomChartView { CustomChartView() }
    func updateNSView(_ nsView: CustomChartView, context: Context) {}
}
```

---

## Avoid

- "SwiftUI makes AppKit obsolete on Mac" — many pro apps still mix both
- Tiny click targets copied from iOS — Mac needs larger, keyboard-focusable controls
