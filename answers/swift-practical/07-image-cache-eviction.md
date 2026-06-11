# Implement a simple in-memory image cache with eviction

**Target time:** 10–15 min

---

## Approach

> Wrap **`NSCache`** — thread-safe, evicts under memory pressure.  
> Key = URL, cost = byte size. Optional actor wrapper for async loads.

---

## Solution

```swift
actor ImageCache {
    private let cache = NSCache<NSURL, UIImage>()

    init(countLimit: Int = 200, totalCostLimit: Int = 50 * 1024 * 1024) {
        cache.countLimit = countLimit
        cache.totalCostLimit = totalCostLimit
    }

    func image(for url: URL) -> UIImage? {
        cache.object(forKey: url as NSURL)
    }

    func store(_ image: UIImage, for url: URL) {
        let cost = image.pngData()?.count ?? 0
        cache.setObject(image, forKey: url as NSURL, cost: cost)
    }

    func loadImage(from url: URL, session: URLSession = .shared) async throws -> UIImage {
        if let cached = image(for: url) { return cached }
        let (data, _) = try await session.data(from: url)
        guard let image = UIImage(data: data) else { throw URLError(.cannotDecodeContentData) }
        store(image, for: url)
        return image
    }
}
```

---

## SwiftUI

```swift
.task(id: url) {
    thumbnail = try? await cache.loadImage(from: url)
}
```

---

## Avoid

- Unbounded `[URL: UIImage]` dictionary
- Full-res decode for thumbnails — downsample separately
