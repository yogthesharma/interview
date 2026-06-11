# Code review on iOS — what do you look for beyond style?

**Target time:** 45–60 seconds

---

## Talk track

> Beyond style — **correctness, architecture, production risk:**
>
> - **Threading** — UI on main, `[weak self]`, actor isolation
> - **Memory** — retain cycles, delegates `weak`, timers invalidated
> - **API contracts** — decoding failures handled, backward compatible models
> - **UX states** — loading, empty, error, offline
> - **Accessibility** — labels, Dynamic Type, tap targets
> - **Security** — no secrets in UserDefaults, Keychain for tokens
> - **Tests** — VM logic covered for non-trivial branches
> - **Scope** — PR does one thing; feature flags for risky launches
>
> **My bar as reviewer:** same as full-stack — would I be okay on-call for this? IQM/Atlys I reviewed TS/React/Node daily; iOS reviews add lifecycle and ARC lens.

---

## Avoid

- Bikeshedding naming only
- Approving force-unwrap chains in network paths
