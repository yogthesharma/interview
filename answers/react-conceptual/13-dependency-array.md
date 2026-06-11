# What is the dependency array?

**Target time:** 30 seconds

---

## Talk track

> The **second argument** to `useEffect(fn, deps)` tells React **when to re-run** the effect.
>
> - **`[]`** — run once after mount (mount-only; still watch Strict Mode double-invoke in dev)  
> - **`[a, b]`** — re-run when `a` or `b` changes (compare with `Object.is`)  
> - **Omitted** — run after **every** render (rarely what you want)
>
> Include every **reactive value** from the component body that the effect reads — props, state, functions unless eslint-disabled with a documented reason.

---

## Code

```tsx
useEffect(() => {
  socket.connect(roomId);
}, [roomId]); // re-subscribe when room changes
```

---

## Avoid

- Lying to the linter with `[]` while using props inside — causes stale bugs
