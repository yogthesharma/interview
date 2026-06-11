# What is React? How does it work at a high level?

**Target time:** 30–45 seconds

---

## Talk track

> React is a **UI library** for building interfaces with **components** — reusable pieces of UI + behavior.
>
> You describe **what** the UI should look like for a given state (`render`), and React **updates the DOM efficiently** when state changes — via a declarative model and reconciliation (Virtual DOM diff).
>
> Modern React uses **function components + hooks** for state, effects, and memoization. I use it daily for product UIs — dashboards at IQM, visa flows at Atlys — paired with TypeScript and often **React Query** for server data.

---

## Code (mental model)

```tsx
function Greeting({ name }: { name: string }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
```

State changes → React re-runs the function → diffs output → updates DOM.

---

## Avoid

- Calling it a "framework" without nuance (routing/data are separate choices)
- Explaining only class components in 2026
