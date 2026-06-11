# Class components vs hooks — your experience?

**Target time:** 30 seconds — honest

---

## Talk track

> **Today:** I write **function components + hooks** exclusively for new code.
>
> **Classes:** maintained legacy at IQM during migration — understood `this`, lifecycle maps to effects (`componentDidMount` → `useEffect`, etc.).
>
> **Hooks win** for: reuse via custom hooks, simpler mental model, less boilerplate, fits TypeScript and teams.
>
> I can read class components but wouldn't start a new feature with them.

---

## Code (mapping)

```tsx
// class: componentDidMount + componentWillUnmount
// hooks equivalent:
useEffect(() => {
  subscribe();
  return () => unsubscribe();
}, []);
```

---

## Avoid

- "I've never seen class components" — unbelievable at 5+ years if you worked IQM-era codebase
