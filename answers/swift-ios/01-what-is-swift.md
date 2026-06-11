# What is Swift? How does it compare to Objective-C?

**Target time:** 30–45 seconds

---

## Talk track

> **Swift** is Apple's modern, type-safe language for iOS, macOS, watchOS, and tvOS — open source since 2015.
>
> vs **Objective-C:** Swift has **cleaner syntax**, **optionals** built in, **value types** (structs) by default, and **stronger compile-time safety**. Obj-C is dynamic C-based — message passing, manual memory before ARC, lots of `@` syntax.
>
> **Interop:** Swift and Obj-C call each other via a **bridging header** — most real codebases are mixed during migration.
>
> **Today:** greenfield iOS = Swift + SwiftUI; legacy apps still have UIKit/Obj-C pockets.

---

## Code (syntax contrast)

```swift
// Swift — concise, safe
let name: String? = user?.profile.name

// Objective-C — verbose, nullable pointers
NSString *name = user.profile.name; // may be nil
```

---

## Avoid

- Saying Obj-C is "dead" — many production apps still maintain it
- Claiming deep Obj-C expertise if you haven't shipped it
