# Deep linking / universal links — basics?

**Target time:** 30–45 seconds

---

## Talk track

> **URL schemes** (`myapp://order/123`) — easy, but any app can claim; used for custom schemes and legacy.
>
> **Universal Links** (`https://yourdomain.com/order/123`) — **HTTPS** links that open the app if installed, else Safari. Verified via **`apple-app-site-association`** file on your domain + **Associated Domains** entitlement.
>
> **Flow:** user taps link → iOS checks AASA → opens app → `scene(_:continue:)` or SwiftUI `.onOpenURL` → router parses path → navigates to screen.
>
> **Push + links:** notification `userInfo` or category actions trigger same router.
>
> **Testing:** validate AASA with Apple's CDN tool; handle cold start vs warm start.

---

## Code

```swift
// SwiftUI
.onOpenURL { url in
    router.handle(url) // e.g. /orders/123 → OrderDetailView
}

// Router
func handle(_ url: URL) {
    guard url.pathComponents.count >= 2 else { return }
    switch url.pathComponents[1] {
    case "orders": showOrder(id: url.lastPathComponent)
    default: break
    }
}
```

---

## Avoid

- Universal Links opening Safari in-app without Associated Domains configured
- Duplicating routing logic in every view
