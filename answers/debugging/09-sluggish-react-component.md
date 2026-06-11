# This React component feels sluggish — what do you look at?

**Target time:** 45–60 seconds  
**Broken example:** `09-sluggish-react-broken.tsx` (read as reference)  
**Fixed:** `solutions/09-sluggish-react-fixed.tsx`

---

## What to look at

1. **React Profiler** — which component rerenders most?  
2. **Unnecessary rerenders** — inline `{}` / `() =>` props, missing `memo` on heavy children  
3. **Huge lists** — no virtualization, no pagination  
4. **Expensive work in render** — filter/sort 10k rows every keystroke — move to `useMemo`  
5. **useEffect storms** — fetch on every render / missing deps  
6. **Network** — waterfall requests, no caching (React Query)  
7. **Main thread** — large JSON parse, sync work blocking input

---

## Talk track

> I'd **profile first**, not guess. Common fix at IQM: **virtualize list** + **React Query** + **debounce search** + stable callbacks for memoized rows.
>
> Input lag is often **rerendering the whole tree on each key** or doing heavy filter in render without memo.

---

## Bugs in broken sample

- Filters **entire 5000-item list on every keystroke** in render path without memo  
- **Child gets new inline `onClick` every render** — breaks memo  
- **Index keys** on list  
- Parent state update rerenders all rows

---

## Avoid

- "Use React.memo everywhere" without profiling
