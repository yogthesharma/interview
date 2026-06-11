# What are common `useEffect` mistakes?

**Target time:** 45 seconds

---

## Talk track

> Common mistakes I've seen and fixed:
>
> 1. **Missing deps** — stale closures, effect never re-runs when it should  
> 2. **Infinite loops** — setState in effect with deps that change every run  
> 3. **Fetching in effect without cleanup/cancel** — race: slow response overwrites newer data  
> 4. **Using effect for derived state** — `setFullName(first + last)` belongs in render  
> 5. **No cleanup** — leaks from intervals, subscriptions, listeners  
> 6. **Replacing React Query** — manual fetch + loading flags reinvent the wheel
>
> IQM dashboard bug was classic **async race + stale closure** — we moved to React Query.

---

## Code (race condition)

```tsx
// Bug: no abort — response B may arrive after A and show wrong user
useEffect(() => {
  fetch(`/api/user/${id}`).then((r) => r.json()).then(setUser);
}, [id]);

// Better: React Query, or AbortController in cleanup
```

---

## Avoid

- "eslint exhaustive-deps is optional" — it's there for a reason
