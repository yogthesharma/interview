# What are React keys and why do they matter?

**Target time:** 30 seconds

---

## Talk track

> **Keys** tell React which list item is which across re-renders. React uses them in reconciliation to **match identity** — update/move instead of destroy+recreate.
>
> Use a **stable unique id** from data (`user.id`), not array index if the list can reorder, filter, or insert — index keys cause **wrong state attached to wrong row** (buggy inputs, animations).
>
> I hit this debugging stale UI at IQM — wrong key strategy + async data made rows look "haunted."

---

## Code

```tsx
// Good
{users.map((u) => <Row key={u.id} user={u} />)}

// Risky if list mutates
{users.map((u, i) => <Row key={i} user={u} />)}
```

---

## Avoid

- `key={Math.random()}` — defeats reconciliation every render
