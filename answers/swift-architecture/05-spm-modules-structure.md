# How do you structure a medium app into modules (SPM targets)?

**Target time:** 45–60 seconds

---

## Talk track

> **Swift Package Manager** targets enforce boundaries — app target stays thin; features depend inward.
>
> **Typical modules:**
> - `App` — entry, DI, deep links
> - `FeatureOrders`, `FeatureAuth` — UI + feature VMs
> - `Domain` — models, use cases (no UIKit)
> - `Networking`, `Persistence` — infrastructure
> - `DesignSystem` — shared UI components
>
> **Rules:** features don't import each other; shared code goes down-stack. **Internal** by default, `public` only for module API.
>
> **Benefits:** faster incremental builds, clearer ownership, test targets per module.
>
> Mirrors monorepo packages in TS — `@app/orders`, `@app/core`.

---

## Dependency graph

```
App → Feature* → Domain
Feature* → DesignSystem, Networking
Networking → Domain
```

---

## Avoid

- One SPM target for entire app — no boundary wins
- Circular dependencies between feature modules
