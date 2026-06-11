# Clean Architecture / VIPER / TCA — any experience or opinions?

**Target time:** 45–60 seconds

---

## Talk track

> **Clean Architecture** — layers: entities → use cases → interface adapters → UI; dependencies point inward. Good for testability; can be heavy for small apps.
>
> **VIPER** — View, Interactor, Presenter, Entity, Router; very explicit, lots of files; common in large Obj-C era banks; less common greenfield today.
>
> **TCA (The Composable Architecture)** — unidirectional state, reducers, effects; great for complex state machines; learning curve; Point-Free ecosystem.
>
> **My take:** default **MVVM + coordinators + repositories** hits 80% of benefits without ceremony. Pick TCA when state complexity justifies it (wizard flows, undo). I've shipped **React + clear layering** at Atlys/IQM — same principles apply on iOS; haven't led a production VIPER codebase.

---

## When to pick what

| Pattern | Best for |
|---------|----------|
| MVVM | Most product apps |
| Clean + use cases | Multi-platform, heavy domain |
| TCA | Complex shared state |
| VIPER | Legacy maintenance |

---

## Avoid

- VIPER for a 5-screen MVP
- Claiming TCA expertise without explaining reducers/effects
