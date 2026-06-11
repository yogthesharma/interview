# Versioning and release trains for mobile apps?

**Target time:** 30–45 seconds

---

## Talk track

> **Marketing version** (`CFBundleShortVersionString`) — user-visible `1.4.0` semver.
>
> **Build number** (`CFBundleVersion`) — monotonic integer per upload; must increase every App Store Connect upload.
>
> **Release train:** e.g. biweekly cut — `develop` → `release/1.4` → TestFlight soak → App Store. Hotfix branch from tag `1.4.0` → `1.4.1`.
>
> **Coordination:** feature flags for incomplete work; backend compatibility window; release notes + phased rollout (App Store **phased release** 7-day).
>
> Mobile can't roll back instantly — trains + flags beat "ship when ready" chaos.

---

## Code

```
1.4.0 (build 1040) → TestFlight
1.4.0 (build 1041) → hotfix same version, new build only
1.5.0 (build 1050) → next train
```

---

## Avoid

- Reusing build number
- Server breaking API before old app versions sunset
