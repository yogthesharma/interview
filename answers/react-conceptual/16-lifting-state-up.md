# What is lifting state up?

**Target time:** 30 seconds

---

## Talk track

> **Lifting state up** means moving shared state to the **closest common ancestor** of components that need it, then passing **state + setters** down as props.
>
> Use when siblings must stay in sync — e.g. filter in parent, list and count both read `filter`.
>
> When it gets deep, move to **Context** or **React Query** instead of prop drilling ten levels.

---

## Code

```tsx
function Page() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <Results query={query} />
    </>
  );
}
```

---

## Avoid

- Lifting everything to root "just in case" — colocate state when possible
