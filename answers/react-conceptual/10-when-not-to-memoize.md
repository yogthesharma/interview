# When should you **not** memoize?

**Target time:** 20–30 seconds

---

## Talk track

> Don't memoize by default. Skip `useMemo`, `useCallback`, and `React.memo` when:
>
> - Component is **cheap** to render  
> - Props change **every render anyway** (memo useless)  
> - You're **guessing** without profiling  
> - Dependencies are wrong — stale memo is **worse** than extra renders
>
> **Rule:** optimize when you see a problem — Profiler, slow list, janky input — then apply the smallest fix.

---

## Code (anti-pattern)

```tsx
// Pointless — deps change every render
const value = useMemo(() => compute(props.items), [props.items]); // items new array each time from parent

// Better: fix parent to stabilize items, or don't memo
```

---

## Avoid

- "Best practice is memo everything" — outdated mindset
