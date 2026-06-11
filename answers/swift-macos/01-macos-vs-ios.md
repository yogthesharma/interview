# macOS vs iOS development — key differences?

**Target time:** 30–45 seconds

---

## Talk track

> Same **Swift** language and increasingly shared **SwiftUI**, but platform constraints differ a lot.
>
> **macOS:** windowed multi-window UI, **mouse + keyboard** first, resizable layouts, menu bar, file system access (with sandbox rules), longer-running background work, no tight suspend like iOS.
>
> **iOS:** single-window (mostly), **touch** + safe areas, aggressive background suspension, App Store review stricter on permissions, smaller screens, cellular/battery concerns.
>
> **Frameworks:** iOS = UIKit; macOS = **AppKit** (+ SwiftUI on both). Lifecycle: iOS `UIApplication` / scenes; macOS `NSApplication` / `NSWindow`.
>
> **Shared code:** business logic, networking, models in SPM modules; UI often needs platform-specific polish.

---

## Quick comparison

| Area | iOS | macOS |
|------|-----|-------|
| Input | Touch, gestures | Mouse, keyboard, menus |
| Windows | One (mostly) | Many |
| Background | Tightly limited | More permissive |
| Distribution | App Store primary | App Store or direct |

---

## Avoid

- Assuming identical SwiftUI layouts work unchanged on both — hit targets and spacing differ
- Porting iOS file-picker flows without sandbox/bookmark awareness on Mac
