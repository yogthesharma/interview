# Distributing a Mac app — App Store vs direct download?

**Target time:** 30–45 seconds

---

## Talk track

> **Mac App Store**
> - Pros: discovery, updates, payment, user trust
> - Cons: **sandbox required**, review process, 15–30% cut, slower releases, some APIs restricted
>
> **Direct download (Developer ID + notarization)**
> - Pros: full flexibility, own update channel (Sparkle), no rev share, beta-friendly
> - Cons: you own marketing, updates, support; must notarize; users manually allow if something breaks
>
> **Choose Store:** consumer apps, simple utilities, want Apple's billing.
>
> **Choose direct:** pro/dev tools, plugins, heavy file system access, rapid ship cadence — common for dev tools (VS Code, Docker Desktop style).
>
> **My angle:** web deploy experience maps to direct — CI artifact, signing, staged rollout; Mac Store adds review gate like mobile.

---

## Avoid

- Mac App Store app that needs broad filesystem without user-selected files
- Direct distribution without notarization in 2026
