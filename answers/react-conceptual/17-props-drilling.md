# Props drilling — what do you do about it?

**Target time:** 30 seconds

---

## Talk track

> **Props drilling** is passing props through many intermediate layers that don't use them — maintenance pain.
>
> **Fixes (pick smallest that works):**
> 1. **Colocate state** — maybe it doesn't need to live that high  
> 2. **Component composition** — pass `children` or render props instead of burying data  
> 3. **Context** — theme, auth user, locale — low-frequency updates  
> 4. **React Query / Zustand** — server or client global state without threading props
>
> I don't reach for Context for **high-churn server lists** — Query is better.

---

## Code (composition over drilling)

```tsx
function Layout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}

function Page() {
  const user = useUser(); // or context only where needed
  return <Layout><Dashboard user={user} /></Layout>;
}
```

---

## Avoid

- Giant Context with entire app state — rerender bomb
