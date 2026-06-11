# Dark mode and dynamic colors — UIColor semantic colors?

**Target time:** 30 seconds

---

## Talk track

> **Dark mode** — `traitCollection.userInterfaceStyle` `.light` / `.dark`. Views get `traitCollectionDidChange` when appearance flips.
>
> **Semantic colors** — `UIColor.label`, `.secondaryLabel`, `.systemBackground`, `.separator` — auto-adapt. Prefer over hardcoded `.black`/`.white`.
>
> **Asset catalog colors** — define **Any Appearance** + **Dark** variants; reference by name `UIColor(named: "BrandPrimary")`.
>
> **Images:** template rendering + `alwaysTemplate` for tint; provide dark variants in asset catalog when needed.
>
> **SwiftUI:** `Color.primary`, `.background` — same idea.

---

## Code

```swift
view.backgroundColor = .systemBackground
titleLabel.textColor = .label

// Asset catalog dynamic color
let accent = UIColor(named: "Accent")!

override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
    super.traitCollectionDidChange(previousTraitCollection)
    if traitCollection.hasDifferentColorAppearance(comparedTo: previousTraitCollection) {
        updateCustomBorderColors()
    }
}
```

---

## Avoid

- `#FFFFFF` backgrounds that blind in dark mode
- Forgetting elevated surfaces (`secondarySystemBackground`) for cards
