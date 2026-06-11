# How do you design pagination — offset vs cursor?

**Target time:** 45 seconds

---

## Talk track

> **Offset (`?page=2&pageSize=20` or `?offset=20&limit=20`)**
> - Simple, jump to page N  
> - **Bad at scale** — large offset scans rows (`OFFSET 100000` slow)  
> - **Inconsistent** if data changes while paging (duplicates/skips)

> **Cursor (`?cursor=eyJpZCI6MTIzfQ&limit=20`)**
> - Opaque token = last seen position (often id + sort key)  
> - **Stable** for live feeds, efficient with index  
> - No arbitrary page jump — next/prev only

> **Use offset** for admin tables, small datasets. **Use cursor** for activity logs, applications list at scale.

---

## Code

```json
// Offset style
{
  "data": [...],
  "page": 2,
  "pageSize": 20,
  "total": 150
}

// Cursor style
{
  "data": [...],
  "nextCursor": "eyJpZCI6NDJ9",
  "hasMore": true
}
```

```ts
// Cursor query (keyset)
WHERE (created_at, id) < ($lastCreatedAt, $lastId)
ORDER BY created_at DESC, id DESC
LIMIT 20
```

---

## Tie to coding

> Same as `coding/arrays-objects/20-paginate-array.js` — in-memory version.

---

## Avoid

- Offset pagination on million-row table without warning
