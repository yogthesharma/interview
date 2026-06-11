# What is virtualization?

**Target time:** 30 seconds

---

## Talk track

> **Virtualization (windowing)** renders only **visible items** (+ small overscan buffer) in a scrollable list, recycling DOM nodes as you scroll — **O(visible)** not **O(total)**.
>
> Essential for tables/lists with thousands of rows where pagination isn't enough (continuous scroll, spreadsheet feel).
>
> I published **`virtualized-react`** on npm from perf work — same idea as react-window / react-virtualized: measure container, compute start/end index, absolute-position rows.

---

## Code

```tsx
// Concept: 10,000 items, ~20 DOM nodes at a time
const start = Math.floor(scrollTop / itemHeight);
const end = start + Math.ceil(viewportHeight / itemHeight);
const visible = items.slice(start, end + overscan);
```

---

## Mention in interview

> Shubham cares about web performance — tie to **Core Web Vitals**, less layout work, faster interaction on heavy internal tools.

---

## Avoid

- Virtualizing a 20-item list — unnecessary complexity
