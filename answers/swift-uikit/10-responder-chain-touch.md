# Responder chain and touch handling — basics?

**Target time:** 30–45 seconds

---

## Talk track

> **`UIResponder`** chain routes **events** — touches, motion, remote control, **`UIKeyCommand`** actions.
>
> **Touch flow:** hit-test from key window → deepest frontmost view (`hitTest(_:with:)`) → view becomes **first responder** for gestures. Gestures compete via recognizer delegate rules.
>
> **Responder chain:** if view doesn't handle, event travels **up** — subview → superview → view controller → window. Used for **`touchesBegan`**, `becomeFirstResponder`, and **action selectors** (`cut:`, `copy:`).
>
> **Custom:** override `point(inside:with:)` for touch passthrough; `gestureRecognizer(_:shouldReceive:)` for conflicts with scroll views.

---

## Code

```swift
override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
    super.touchesEnded(touches, with: event)
    // handle or pass — super continues chain
}

// Forward menu action up chain
@objc func save(_ sender: Any?) {
    if !handleSaveLocally() {
        next?.save?(sender) // pass to next responder
    }
}
```

---

## Avoid

- Putting business logic in `touchesBegan` when `UITapGestureRecognizer` is clearer
- Blocking scroll view touches without `cancelsTouchesInView` awareness
