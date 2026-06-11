# Bitcode / app thinning / asset catalogs — awareness?

**Target time:** 30 seconds

---

## Talk track

> **App thinning** — App Store delivers device-specific IPA: right **architecture** (arm64), **resolution-specific assets**, **Metal** variants — smaller download.
>
> **Asset catalogs** — `Assets.xcassets`; provide **@2x/@3x**, **PDF vectors** (Preserve Vector Data), **Dark Mode** variants, **App Icon** set. Use **Single Size** icons where Xcode supports.
>
> **On Demand Resources** — optional large assets downloaded later (games, packs).
>
> **Bitcode** — Apple **deprecated** for App Store apps; you ship compiled binary + dSYM from your archive now — no bitcode recompile on server.
>
> Awareness is enough — know thinning happens server-side when users download.

---

## Avoid

- One 4K bitmap for every icon size
- Assuming bitcode is still required for iOS apps
