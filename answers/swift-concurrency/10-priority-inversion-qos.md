# Priority inversion and QoS — awareness?

**Target time:** 30–45 seconds

---

## Talk track

> **QoS (Quality of Service)** — hints thread priority: `.userInteractive` (main/UI), `.userInitiated`, `.utility`, `.background`. Higher QoS preempts lower.
>
> **Priority inversion** — high-priority thread waits on low-priority work holding a lock/resource → UI jank. Example: main waits on background queue doing sync work that got demoted.
>
> **Mitigations:** avoid long **sync** waits; don't block main; use **`async`**; GCD can elevate priority in some lock scenarios; keep lock sections tiny.
>
> **Awareness for interviews** — you don't tune QoS daily, but you know **not to do heavy sync on main** and why random `.background` queue holding a lock can stutter animations.

---

## Code

```swift
// Bad — main might wait
DispatchQueue.main.sync { /* ... */ }

// Better — async chain with appropriate QoS
Task(priority: .userInitiated) {
    let result = await heavyWork()
    await MainActor.run { updateUI(result) }
}
```

---

## Avoid

- Defaulting everything to `.background` then wondering why UI stalls
- Massive critical sections under `NSLock`
