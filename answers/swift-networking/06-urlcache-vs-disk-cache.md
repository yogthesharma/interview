# URLCache vs custom disk cache for images/API?

**Target time:** 30–45 seconds

---

## Talk track

> **`URLCache`** — HTTP-aware; respects `Cache-Control`, `ETag`, `304`; good for **REST GET** with proper headers; zero custom code.
>
> **Custom disk cache** — full control: image downsampling paths, TTL per resource, encryption, size eviction (LRU), cache key = URL + variant (width).
>
> **Images:** usually **custom + NSCache** memory tier — `URLCache` stores full-res JPEG; you want thumbnails. Libraries: Nuke, Kingfisher, SDWebImage.
>
> **API JSON:** `URLCache` if backend sets cache headers; else app-level repository cache with explicit invalidation on write.

---

## When to use what

| Need | Choice |
|------|--------|
| Standard HTTP caching | URLCache |
| Image thumbnails | Custom / Nuke |
| Offline bundle | On-disk + Core Data |

---

## Avoid

- URLCache for multi-tenant PII without encryption consideration
- Unbounded disk cache — set `diskCapacity`
