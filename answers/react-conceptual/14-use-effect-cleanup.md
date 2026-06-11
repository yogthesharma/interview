# What is cleanup in `useEffect`?

**Target time:** 30 seconds

---

## Talk track

> If `useEffect` returns a **function**, React runs it **before the next effect run** and **on unmount** — that's **cleanup**.
>
> Use for: remove event listeners, clear intervals, **abort fetch**, unsubscribe websockets, cancel debounce timers.
>
> Prevents memory leaks and **stale updates** when component unmounts or deps change quickly.

---

## Code

```tsx
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);

useEffect(() => {
  const ctrl = new AbortController();
  fetch(url, { signal: ctrl.signal }).then(/* ... */);
  return () => ctrl.abort();
}, [url]);
```

---

## Avoid

- Forgetting cleanup on route change — classic SPA leak
