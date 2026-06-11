# UIViewController lifecycle — order of viewDidLoad through viewDidDisappear?

**Target time:** 45–60 seconds

---

## Talk track

> **Appearing:** `loadView` (if no storyboard view) → **`viewDidLoad`** (once, setup UI, observers) → `viewWillAppear` → `viewIsAppearing` (iOS 17+) → **`viewDidAppear`** (start animations, analytics).
>
> **Disappearing:** **`viewWillDisappear`** (pause, save draft) → `viewIsDisappearing` → **`viewDidDisappear`** (stop timers, cancel tasks).
>
> **Layout:** `viewWillLayoutSubviews` / `viewDidLayoutSubviews` — avoid heavy work here; runs often on rotation.
>
> **Memory:** `didReceiveMemoryWarning` (legacy signal) — drop caches.
>
> **Rule:** one-time setup in `viewDidLoad`; start/stop work tied to visibility in `viewWillAppear`/`viewWillDisappear`.

---

## Order cheat sheet

```
loadView → viewDidLoad
  → viewWillAppear → viewDidAppear
  → viewWillDisappear → viewDidDisappear
  → deinit
```

---

## Avoid

- Network fetch only in `viewDidLoad` when you need refresh every visit — use `viewWillAppear` or SwiftUI `.task`
- Adding subviews in `viewDidLayoutSubviews` — infinite layout loop risk
