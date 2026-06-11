# Pagination and infinite scroll — cursor vs offset on mobile?

**Target time:** 30–45 seconds

---

## Talk track

> **Offset/limit** — `?page=2&limit=20` — simple; **breaks** if list mutates (duplicates/skips) while scrolling; OK for stable admin lists.
>
> **Cursor** — opaque `after_id` / `next_cursor` from server — **stable** under inserts/deletes; preferred for feeds, chat, infinite scroll.
>
> **Mobile UX:** trigger `loadMore` when last cell appears; show footer spinner; dedupe by id; reset cursor on pull-to-refresh.
>
> **ViewModel:** `pageState` — items, `nextCursor`, `isLoadingMore`, `hasMore`.
>
> Same patterns as React infinite scroll + React Query `fetchNextPage`.

---

## Code

```swift
@MainActor
func loadMoreIfNeeded(current item: Order) async {
    guard item.id == orders.last?.id, hasMore, !isLoadingMore else { return }
    isLoadingMore = true
    defer { isLoadingMore = false }
    let page = try await api.fetchOrders(cursor: nextCursor)
    orders.append(contentsOf: page.items)
    nextCursor = page.nextCursor
    hasMore = page.nextCursor != nil
}
```

---

## Avoid

- Offset pagination on real-time feed
- Appending duplicate pages without `hasMore` guard
