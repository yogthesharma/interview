# How do you make a web app faster?

**Target time:** 45 seconds

---

## Talk track

> **Measure first** — Lighthouse, Web Vitals, Network tab, React Profiler. Don't guess.
>
> **Frontend:** smaller bundles (code split), lazy routes, image optimization, virtualization for long lists, memo where profiling shows waste, React Query for server cache.
>
> **Network:** fewer round trips, HTTP caching headers, CDN for static assets, compress responses.
>
> **Backend:** faster queries, indexes, caching hot reads, async for slow work (queues), right-size payloads — don't send 5MB JSON when UI needs 5 fields.
>
> At **IQM** dashboards: virtualization + React Query cut perceived slowness more than micro-optimizing every component.

---

## Code (checklist mindset)

```tsx
// 1. Split routes
const Admin = lazy(() => import("./Admin"));

// 2. Virtualize long lists (not 10k DOM nodes)
<FixedSizeList height={400} itemCount={items.length} itemSize={48}>…</FixedSizeList>

// 3. Cache server data
useQuery({ queryKey: ["orders"], queryFn: fetchOrders, staleTime: 60_000 });
```

---

## Avoid

- "Just add Redis" without knowing what's slow
- Optimizing before measuring
