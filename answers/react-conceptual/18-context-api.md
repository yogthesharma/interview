# Context API — when to use vs when to avoid?

**Target time:** 30 seconds

---

## Talk track

> **Use Context** for **global, low-frequency** data many components need: auth session, theme, i18n, feature flags.
>
> **Avoid Context** for:
> - **Fast-changing** data (every keystroke) — all consumers re-render  
> - **Server data** — use React Query  
> - Avoiding a one-level prop pass — overkill
>
> Pattern: split contexts (`ThemeContext`, `AuthContext`) instead of one mega store.

---

## Code

```tsx
const ThemeContext = createContext<"light" | "dark">("light");

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar onToggle={() => setTheme(t => t === "light" ? "dark" : "light")} />
      <Page />
    </ThemeContext.Provider>
  );
}
```

---

## Avoid

- Putting React Query cache in Context — redundant
