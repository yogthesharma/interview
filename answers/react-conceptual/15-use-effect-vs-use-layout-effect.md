# `useEffect` vs `useLayoutEffect`?

**Target time:** 30 seconds

---

## Talk track

> **`useEffect`** — runs **after paint** (async relative to browser paint). Default for most side effects — doesn't block visual update.
>
> **`useLayoutEffect`** — runs **after DOM updates, before browser paint**. Use when you must **measure DOM** or **mutate layout** before user sees flicker (tooltips positioning, scroll sync).
>
> **99% of the time:** `useEffect`. Layout effect can hurt perf if overused — it blocks painting.

---

## Code

```tsx
// useLayoutEffect — avoid flash of wrong scroll position
useLayoutEffect(() => {
  listRef.current?.scrollTo(0, scrollTop);
}, [items]);
```

---

## Avoid

- Replacing all effects with layout effect "to be safe"
