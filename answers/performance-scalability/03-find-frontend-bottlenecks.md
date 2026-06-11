# How do you find frontend performance bottlenecks?

**Target time:** 45 seconds

---

## Talk track

> **Tools:**
> - **Chrome DevTools** — Performance tab (long tasks), Network (waterfall, payload size)
> - **React DevTools Profiler** — which components rerender and how long
> - **Lighthouse** — bundle, LCP, CLS snapshot
> - **console.time / User Timing** for hot paths
>
> **Process:** reproduce slow scenario → record → find longest frame or biggest download → fix one thing → re-measure.
>
> Common culprits I've hit: **unnecessary rerenders**, **huge lists without virtualization**, **fetch waterfalls**, **unoptimized images**, **main-thread parsing of huge JSON**.

---

## Code (Profiler workflow)

```tsx
// While debugging — render count
function Row({ item }: { item: Item }) {
  console.count("Row render");
  return <div>{item.name}</div>;
}
// Then: React Profiler → commit duration → memo / virtualize / lift state
```

---

## Avoid

- Changing random `useMemo` without profiling evidence
