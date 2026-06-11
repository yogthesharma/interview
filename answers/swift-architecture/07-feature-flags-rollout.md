# Feature flags and gradual rollout on mobile?

**Target time:** 30–45 seconds

---

## Talk track

> Mobile releases are **slow** (review, user adoption) — flags decouple **deploy** from **release**.
>
> **Sources:** LaunchDarkly, Firebase Remote Config, custom API, build-time `#if DEBUG`.
>
> **Patterns:** flag gates UI entry; default **off**; kill switch for bad features; percentage rollout + cohorts (internal, beta, prod).
>
> **Caveats:** cache flags with TTL; handle offline (safe default); don't flag security paths loosely; remove dead flags.
>
> **My experience:** feature flags on web/backend at scale; same principles on mobile — plus **App Store** can't roll back instantly, so flags are even more valuable.

---

## Code

```swift
@MainActor
func openNewCheckoutIfEnabled() {
    guard flags.isEnabled(.newCheckout) else {
        router.showLegacyCheckout()
        return
    }
    router.showNewCheckout()
}
```

---

## Avoid

- 500 stale flags nobody owns
- Flag that half-initializes broken state when off mid-session
