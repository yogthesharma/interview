# Grand Central Dispatch — main queue vs global queues, sync vs async dispatch?

**Target time:** 45–60 seconds

---

## Talk track

> **GCD** — Apple's thread pool + queue abstraction. You submit **blocks** to queues; system maps to threads.
>
> **Main queue** — serial, tied to main thread; **all UI** must run here.
>
> **Global queues** — concurrent, QoS tiers (`.userInitiated`, `.utility`, `.background`); shared pool for CPU/IO work off main.
>
> **`async`** — returns immediately; block runs later on that queue. **Preferred default.**
>
> **`sync`** — caller **waits** until block finishes. **Never `sync` main queue from main** — deadlock. `sync` on background from main blocks UI.
>
> **Modern Swift:** prefer **`async/await` + actors** over raw GCD for new code; GCD still under the hood.

---

## Code

```swift
// Background work → main UI update (legacy)
DispatchQueue.global(qos: .userInitiated).async {
    let data = parse(largePayload)
    DispatchQueue.main.async {
        self.label.text = data.title
    }
}

// DEADLOCK — don't do this on main:
// DispatchQueue.main.sync { }
```

---

## Avoid

- `DispatchQueue.main.sync` from main thread
- Creating dozens of private serial queues when one actor suffices
