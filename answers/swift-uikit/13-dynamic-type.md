# Dynamic Type — supporting accessible text sizes?

**Target time:** 30–45 seconds

---

## Talk track

> Users scale text via **Settings → Accessibility → Larger Text**. Apps must remain usable at **AX5** sizes.
>
> **UIKit:** use **text styles** — `UIFont.preferredFont(forTextStyle: .body)` with **`adjustsFontForContentSizeCategory`** on labels. **`UIFontMetrics`** scales custom fonts: `metrics.scaledFont(for: customFont)`.
>
> **Layout:** multi-line labels, stack views, self-sizing table cells — avoid fixed heights. Test with Xcode **Environment Overrides**.
>
> **SwiftUI:** `.font(.body)`, `@Environment(\.dynamicTypeSize)` to cap layouts if needed.
>
> **Accessibility** is App Store expectation — truncated critical copy fails review UX bar.

---

## Code

```swift
titleLabel.font = UIFont.preferredFont(forTextStyle: .headline)
titleLabel.adjustsFontForContentSizeCategory = true
titleLabel.numberOfLines = 0

let custom = UIFont(name: "Brand-Regular", size: 17)!
titleLabel.font = UIFontMetrics(forTextStyle: .body).scaledFont(for: custom)
```

---

## Avoid

- Fixed `frame.height` on labels with `.caption2` at AX sizes
- Icons-only buttons with no accessibility labels
