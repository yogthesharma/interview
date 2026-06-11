# Model polymorphic API JSON with enums + associated values

**Target time:** 10–15 min

---

## Approach

> API returns `{ "type": "text", "body": "..." }` or `{ "type": "image", "url": "..." }`.  
> Use **enum with associated values** + custom `Decodable` or discriminated `type` key.

---

## Solution

```swift
enum FeedItem: Decodable, Identifiable {
    case text(id: String, body: String)
    case image(id: String, url: URL)

    var id: String {
        switch self {
        case .text(let id, _), .image(let id, _): return id
        }
    }

    private enum CodingKeys: String, CodingKey {
        case type, id, body, url
    }

    private enum ItemType: String, Decodable {
        case text, image
    }

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        let type = try c.decode(ItemType.self, forKey: .type)
        let id = try c.decode(String.self, forKey: .id)

        switch type {
        case .text:
            let body = try c.decode(String.self, forKey: .body)
            self = .text(id: id, body: body)
        case .image:
            let url = try c.decode(URL.self, forKey: .url)
            self = .image(id: id, url: url)
        }
    }
}

struct FeedResponse: Decodable {
    let items: [FeedItem]
}
```

---

## SwiftUI row

```swift
@ViewBuilder
func row(for item: FeedItem) -> some View {
    switch item {
    case .text(_, let body): Text(body)
    case .image(_, let url): AsyncImage(url: url)
    }
}
```

---

## Avoid

- `[String: Any]` + runtime casting
- Forgetting unknown `type` — add `case unknown` or throw with context
