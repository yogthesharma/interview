# When should you use `useCallback`?

**Target time:** 30 seconds

---

## Talk track

> **`useCallback`** caches a **function reference** between renders (same deps → same function identity).
>
> **Use when:**
> - Passing callbacks to **`React.memo`** children that compare props shallowly  
> - Function is a **dependency** of `useEffect` / other hooks and you want to avoid spurious reruns  
> - Custom hooks returning handlers consumed by optimized lists
>
> **Don't use** everywhere — new function each render is usually fine if child isn't memoized.

---

## Code

```tsx
const handleSubmit = useCallback(
  (data: FormData) => mutation.mutate(data),
  [mutation]
);

// Without useCallback, memo(Child) re-renders every parent render because onSave is new reference
```

---

## Tie to experience

> React Query's `mutate` is often stable — still wrap domain handlers when profiling shows child churn.
