# Calling UIKit/AppKit from a background thread — what breaks?

**Target time:** 30 seconds

---

## Talk track

> **UIKit and AppKit are main-thread only.** Updating views, view controllers, `NSWindow`, layout, most `UIImage`/`NSImage` drawing assumptions → **undefined behavior** from background: visual glitches, missed updates, **`EXC_BAD_ACCESS`**, purple Main Thread Checker warnings in debug.
>
> **Safe on background:** pure Swift parsing, `Codable`, image **decode** (then assign image on main), file IO, network bytes.
>
> **Rule:** compute off main → **one hop** to main for mutation. Main Thread Checker in Xcode catches violations early.
>
> **SwiftUI:** `@MainActor` on ViewModels enforces same rule at compile time in Swift 6.

---

## Code

```swift
Task {
    let data = await downloadImageData()        // background OK
    let image = UIImage(data: data)             // decode OK off main (usually)
    await MainActor.run {
        self.imageView.image = image            // UI — main only
    }
}
```

---

## Avoid

- `DispatchQueue.global { self.tableView.reloadData() }`
- `@Published` updates from URLSession callback queue without main hop
