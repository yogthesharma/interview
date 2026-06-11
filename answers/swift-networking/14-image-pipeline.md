# Image pipeline — downsampling, memory spikes, NSCache?

**Target time:** 30–45 seconds

---

## Talk track

> **Problem:** loading 4000×3000 image into `UIImage` for 80×80 thumbnail → **memory spike**, scroll jank, jetsam kill.
>
> **Downsample** with `CGImageSourceCreateThumbnailAtIndex` or `UIGraphicsImageRenderer` at **target size** — never decode full res off main.
>
> **Memory tier:** `NSCache` for decoded images — auto-evicts under pressure; set `countLimit` / `totalCostLimit` (bytes).
>
> **Disk tier:** cached files or library (Nuke/Kingfisher).
>
> **List scrolling:** cancel in-flight decode on cell reuse (`prepareForReuse`), prefetch next page, avoid `imageView.image =` synchronously on main from full data.

---

## Code

```swift
let cache = NSCache<NSURL, UIImage>()
cache.totalCostLimit = 50 * 1024 * 1024

func image(for url: URL, size: CGSize) async -> UIImage? {
    if let hit = cache.object(forKey: url as NSURL) { return hit }
    let data = try await download(url)
    let image = downsample(data: data, to: size)
    cache.setObject(image, forKey: url as NSURL, cost: image.pngData()?.count ?? 0)
    return image
}
```

---

## Avoid

- `UIImage(data:)` full decode in `cellForRow`
- Unbounded image cache — memory warnings
