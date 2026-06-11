# How do you optimize a large list?

**Target time:** 45 seconds

---

## Talk track

> **Layers (smallest fix first):**
>
> 1. **Pagination / infinite scroll** — don't render 10k rows  
> 2. **Stable keys + memo row component** if parent re-renders often  
> 3. **Avoid inline objects/functions** passed to each row if rows are memoized  
> 4. **Virtualization** — only mount visible rows (react-window, my `virtualized-react` package)  
> 5. **React Query** `select` — don't pass huge objects if list only needs id + label
>
> IQM dashboards: virtualization mattered once lists exceeded ~500 visible churning rows.

---

## Code

```tsx
// Pagination — simplest win
const pageItems = allItems.slice(page * size, (page + 1) * size);

// Virtualization sketch
<FixedSizeList height={400} itemCount={items.length} itemSize={48}>
  {({ index, style }) => <Row style={style} item={items[index]} />}
</FixedSizeList>
```

---

## Avoid

- Rendering 50k DOM nodes and only adding `memo` — DOM itself is the bottleneck
