# Offline-first — local source of truth, sync on reconnect?

**Target time:** 45–60 seconds

---

## Talk track

> **Offline-first:** UI reads **local DB** (Core Data/SwiftData/GRDB); network **syncs** in background. App usable on subway.
>
> **Patterns:**
> - **Read:** display cached immediately → refresh remote → merge → UI updates
> - **Write:** queue mutation locally (pending sync flag) → push when online → resolve conflicts (server wins, LWW, or user prompt)
> - **Connectivity:** `NWPathMonitor` / `waitsForConnectivity` + explicit offline banner
>
> **Complexity:** conflict resolution, idempotency keys, tombstones for deletes.
>
> **When worth it:** field apps, messaging, insurance applications with long forms — not every CRUD screen.

---

## Code

```swift
func orders() async throws -> [Order] {
    let local = try await store.fetchOrders()
    if monitor.isOffline { return local }

    do {
        let remote = try await api.fetchOrders()
        try await store.replaceAll(remote)
        return remote
    } catch {
        return local // stale-while-revalidate
    }
}
```

---

## Avoid

- Offline-first for static marketing content — overkill
- No user indicator when showing stale cache
