# Technical debt on mobile — when to rewrite vs wrap UIKit?

**Target time:** 30–45 seconds

---

## Talk track

> **Wrap first:** `UIViewRepresentable`, facade over legacy module, feature flags route to new implementation — ship incrementally.
>
> **Rewrite when:** module is small, well-bounded, test coverage exists, team has capacity, UX debt blocks product — e.g. one settings flow SwiftUI replacement.
>
> **Don't rewrite when:** "UIKit is old" — large app, no tests, moving goalposts. **Strangler** beats big-bang.
>
> **Signals to invest:** crash hotspot in legacy VC, can't add accessibility, every feature touches same 3k-line controller.
>
> **My bias from refactors:** prove parity with metrics (crash rate, conversion) before deleting old path.

---

## Decision

| Wrap | Rewrite |
|------|---------|
| Large stable surface | Small isolated feature |
| Tight deadline | Tests + design parity ready |
| Risky domain | Team knows new stack |

---

## Avoid

- Year-long "SwiftUI migration" with no user value milestones
- Deleting legacy before flag-driven parity validation
