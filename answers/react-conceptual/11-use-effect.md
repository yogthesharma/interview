# Explain `useEffect` — what is it for?

**Target time:** 30–45 seconds

---

## Talk track

> **`useEffect`** runs **side effects after render** — things that touch the outside world: fetch (though React Query is better for server data), subscriptions, timers, syncing to localStorage, DOM measurements.
>
> It's **not** for deriving UI from props/state — that belongs in render or `useMemo`.
>
> Mental model: *"After paint, do this synchronously with the committed UI."*

---

## Code

```tsx
useEffect(() => {
  document.title = `Orders (${count})`;
}, [count]);
```

---

## Avoid

- Using effect to transform props into state without good reason (derived state anti-pattern)
