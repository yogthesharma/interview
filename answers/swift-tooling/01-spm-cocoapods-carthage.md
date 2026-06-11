# Swift Package Manager vs CocoaPods vs Carthage — what would you pick today?

**Target time:** 30–45 seconds

---

## Talk track

> **SPM (Swift Package Manager)** — **default today**; native Xcode integration, no Ruby Bundler, works for app + libs + modules; Apple's direction.
>
> **CocoaPods** — huge legacy catalog; `Podfile` + workspaces; still in brownfield apps; adds build time and merge noise.
>
> **Carthage** — builds frameworks you embed; less invasive than Pods; declining vs SPM.
>
> **Pick SPM** for greenfield and internal modules. **Keep CocoaPods** only for deps not on SPM yet — wrap or fork when possible.
>
> **Monorepo style:** feature packages as local SPM targets — same mental model as npm workspaces.

---

## Avoid

- New project starting with CocoaPods in 2026 without a dependency forcing it
- Mixing all three without a migration plan
