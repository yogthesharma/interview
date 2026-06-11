# How do you prevent unnecessary re-renders?

**Target time:** 45 seconds

---

## Talk track

> **First:** measure — React DevTools Profiler, why-did-you-render in dev. Don't memoize everything upfront.
>
> **Tactics:**
> - **`React.memo`** on expensive pure child components  
> - **`useMemo` / `useCallback`** when passing stable references to memoized children  
> - **Split state** — don't lift state so high that unrelated siblings re-render  
> - **Context splitting** — separate contexts so one value change doesn't rerender whole tree  
> - **React Query** — granular subscriptions so components only rerender when their query data changes
>
> At IQM dashboards, virtualization + query selectors mattered more than blanket `memo`.

---

## Code

```tsx
const Child = React.memo(function Child({ onSave }: { onSave: () => void }) {
  return <button onClick={onSave}>Save</button>;
});

function Parent() {
  const [text, setText] = useState("");
  const onSave = useCallback(() => api.save(), []); // stable ref for memo child
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Child onSave={onSave} />
    </>
  );
}
```

---

## Avoid

- Wrapping every component in `memo` — often adds complexity without gain
