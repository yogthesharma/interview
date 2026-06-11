# What is React Strict Mode?

**Target time:** 30 seconds

---

## Talk track

> **Strict Mode** is a dev-only wrapper that **intentionally double-invokes** certain lifecycles (mount, effects, state updaters in React 18+) to surface **impure side effects** and missing cleanup.
>
> It **doesn't run in production**. If your effect runs twice in dev, fix idempotency/cleanup — don't disable Strict Mode as the first move.
>
> Also warns about legacy APIs (findDOMNode, string refs).

---

## Code

```tsx
// main.tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## Avoid

- Thinking double fetch in dev means production double fetch — it doesn't
