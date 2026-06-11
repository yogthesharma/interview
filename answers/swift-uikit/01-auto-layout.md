# Auto Layout — constraints, intrinsic content size, compression resistance?

**Target time:** 45–60 seconds

---

## Talk track

> **Auto Layout** solves view position/size with **constraints** — relationships like "leading = superview + 16", "width = 100", "aspect ratio 1:1". Engine finds satisfying layout (or conflicts).
>
> **Intrinsic content size** — view's natural size from content (`UILabel` text, `UIImageView` image). Constraints can pin edges; intrinsic size fills the other dimension unless you override.
>
> **Content hugging** — resistance to **growing** beyond intrinsic size (low priority = stretches).
>
> **Compression resistance** — resistance to **shrinking** below intrinsic size (low priority = truncates/clips first).
>
> **Fight layout bugs** with Xcode constraint debugger, `ambiguous layout` warnings, and prefer **stack views** for simple rows/columns.

---

## Code

```swift
titleLabel.setContentHuggingPriority(.required, for: .horizontal)
subtitleLabel.setContentCompressionResistancePriority(.defaultLow, for: .horizontal)

NSLayoutConstraint.activate([
    titleLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
    titleLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 8)
])
```

---

## Avoid

- Mixing translated autoresizing masks with constraints without `translatesAutoresizingMaskIntoConstraints = false`
- 40 individual constraints when a `UIStackView` would work
