# Server state vs client state?

**Target time:** 30 seconds

---

## Talk track

> **Server state** — lives on the backend, shared, async, can be stale: users, applications, quotes. **Source of truth is the API.** Cache + sync with **React Query**.
>
> **Client state** — UI-only, local: modal open, selected tab, form draft before submit, theme. **`useState` / `useReducer` / Zustand** — no need to PUT to server on every keystroke.
>
> **Mistake:** copying server data into global Redux and manually keeping in sync — duplicate source of truth.

---

## Code

```tsx
// Server state — React Query owns it
const { data: orders } = useQuery({ queryKey: ["orders"], queryFn: getOrders });

// Client state — UI
const [sidebarOpen, setSidebarOpen] = useState(true);
```

---

## Role-specific angle

> EOI application status = server state; wizard step UI = client state until submit.
