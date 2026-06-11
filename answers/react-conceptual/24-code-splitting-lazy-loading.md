# Code splitting / lazy loading in React?

**Target time:** 30 seconds

---

## Talk track

> **Code splitting** breaks the bundle into chunks loaded **on demand** — faster initial load.
>
> In React: **`React.lazy`** + **`Suspense`** for route-level or heavy components (charts, admin panels).
>
> Works with dynamic `import()`. Show fallback while chunk loads. Often paired with router (`lazy(() => import('./Admin'))`).

---

## Code

```tsx
const AdminPanel = lazy(() => import("./AdminPanel"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Suspense>
  );
}
```

---

## Avoid

- Lazy-loading every tiny component — overhead without benefit
