# Objective-C interoperability — @objc, bridging headers, when is Obj-C still in the stack?

**Target time:** 30–45 seconds

---

## Talk track

> Swift ↔ Obj-C **interop** lets mixed codebases coexist during migration.
>
> **`@objc`** — expose Swift class/method to Obj-C runtime (must inherit `NSObject` for classes). **`@objcMembers`** on class for bulk export.
>
> **Bridging header** — `#import` Obj-C headers into Swift target. **Reverse** — Swift exposed via generated **`ProjectName-Swift.h`** for Obj-C `.m` files.
>
> **Obj-C still in stack:** legacy UIKit apps, SDKs only shipping Obj-C headers, Core Animation / some Apple internals, gradual rewrites.
>
> **Swift-only types** (structs, generics, enums with associated values) don't bridge — wrap in `NSObject` subclasses or use `Any`.

---

## Code

```swift
@objc class LegacyBridge: NSObject {
    @objc func notifyDone(_ title: String) {
        NotificationCenter.default.post(name: .done, object: title)
    }
}

// Bridging header (Comment in header file):
// #import "LegacyAnalytics.h"
```

---

## Avoid

- `@objc` on Swift structs — not supported
- Renaming Swift APIs without `@objc(name:)` when Obj-C callers depend on old names
