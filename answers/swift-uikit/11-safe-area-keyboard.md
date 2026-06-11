# Safe area, layout margins, and keyboard avoidance?

**Target time:** 30–45 seconds

---

## Talk track

> **Safe area** — inset from notches, home indicator, status bar. Pin to `view.safeAreaLayoutGuide`, not raw `view.topAnchor`.
>
> **Layout margins** — additional readable padding (`directionalLayoutMargins`); respect for readable content guides on iPad.
>
> **Keyboard avoidance:**
> - Listen `keyboardWillChangeFrameNotification` — adjust `scrollView.contentInset` or bottom constraint constant
> - **`UIScrollView.keyboardDismissMode`** — interactive drag
> - iOS 15+ **`keyboardLayoutGuide`** on UIView — constraint to keyboard top
> - SwiftUI: `.safeAreaInset` / `ScrollViewReader`
>
> Always animate with notification's `animationDuration`/`curve`.

---

## Code

```swift
NotificationCenter.default.addObserver(self, selector: #selector(keyboardChanged),
                                       name: UIResponder.keyboardWillChangeFrameNotification, object: nil)

@objc private func keyboardChanged(_ note: Notification) {
    guard let frame = note.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else { return }
    let converted = view.convert(frame, from: nil)
    let overlap = max(0, view.bounds.maxY - converted.minY)
    scrollView.contentInset.bottom = overlap
}
```

---

## Avoid

- Pinning inputs under home indicator on iPhone X+
- Ignoring keyboard on iPad floating/split keyboard
