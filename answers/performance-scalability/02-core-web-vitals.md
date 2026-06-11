# Frontend performance metrics you care about (LCP, FID, CLS)?

**Target time:** 45 seconds

---

## Talk track

> **Core Web Vitals** — Google's user-centric metrics:
>
> - **LCP** (Largest Contentful Paint) — how fast main content appears. Target **&lt; 2.5s**. Fix: optimize hero images, reduce blocking JS, server render critical path.
> - **INP** (replaces **FID**) — responsiveness to input. Target good interaction latency. Fix: less main-thread work, break up long tasks.
> - **CLS** (Cumulative Layout Shift) — visual stability. Target **&lt; 0.1**. Fix: width/height on images, reserve space for ads/skeletons, avoid injecting content above existing UI.
>
> I watch these in **Lighthouse / Chrome UX Report** and pair with **React Profiler** for component-level issues.

---

## Code (CLS example)

```tsx
// Bad — image loads, layout jumps
<img src={url} alt="" />

// Better — reserve space
<img src={url} alt="" width={800} height={600} style={{ maxWidth: "100%", height: "auto" }} />
```

---

## Avoid

- Memorizing thresholds without knowing what each measures
- FID only — INP is the newer interaction metric
