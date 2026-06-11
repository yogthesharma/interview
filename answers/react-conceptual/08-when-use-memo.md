# When should you use `useMemo`?

**Target time:** 30 seconds

---

## Talk track

> **`useMemo`** caches the **result of a computation** between renders until dependencies change.
>
> **Use when:**
> - Expensive derived data (filter/sort large lists)  
> - Referential equality matters — passing derived object/array to `memo` child  
> - Stable dependency for another hook
>
> **Skip when:** cheap calculation — `useMemo` has its own cost and noise.

---

## Code

```tsx
const visibleRows = useMemo(
  () => rows.filter((r) => r.status === filter).sort(byDate),
  [rows, filter]
);
```

---

## Avoid

- Memoizing `a + b` or trivial string concat
