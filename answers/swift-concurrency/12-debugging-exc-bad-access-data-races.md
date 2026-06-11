# Debugging EXC_BAD_ACCESS and data races — tools and habits?

**Target time:** 45–60 seconds

---

## Talk track

> **`EXC_BAD_ACCESS`** — touched deallocated/invalid memory. Common causes: **force unwrap nil**, `unowned` after dealloc, UIKit off main, C pointer misuse.
>
> **Tools:**
> - **Zombie Objects** (Instruments) — log over-released accesses
> - **Address Sanitizer** — catch use-after-free in debug
> - **Main Thread Checker** — UI off main warnings
> - **Thread Sanitizer** — data races in debug builds
> - **Memory Graph Debugger** — find retain cycles in Xcode
> - **Swift 6 strict concurrency** — compile-time race detection
>
> **Habits:** enable sanitizers on CI debug builds, reproduce on device, symbolic breakpoints on `objc_exception_throw`, audit `[unowned self]` and delegates.

---

## Checklist

| Symptom | First look |
|---------|------------|
| Crash on UI update | Main thread? |
| Random nil crash | Force unwrap / unowned |
| Memory grows | Leaks instrument, cycles |
| Flaky counts | Data race, TSan |

---

## Avoid

- Shipping with Thread Sanitizer disabled forever on hard-to-repro flakes
- Ignoring purple Main Thread Checker warnings
