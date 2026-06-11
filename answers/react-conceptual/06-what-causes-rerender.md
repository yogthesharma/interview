# What causes a component to re-render?

**Target time:** 30 seconds

---

## Talk track

> A component re-renders when:
>
> 1. Its **own state** changes (`useState`, `useReducer`)  
> 2. Its **props** change (parent re-rendered and passed new props)  
> 3. **Context** it consumes changes  
> 4. Parent re-rendered — **children re-render by default** (even if props look the same unless memoized)
>
> Re-render ≠ DOM update — React may diff and change nothing in the DOM. But render work still costs CPU.

---

## Code

```tsx
function Parent() {
  const [n, setN] = useState(0);
  return (
    <>
      <button onClick={() => setN(n + 1)}>+</button>
      <Child label="static" /> {/* still re-renders when n changes */}
    </>
  );
}
```

---

## Avoid

- "Only state changes cause re-render" — props/context/parent matter too
