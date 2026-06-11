# What is JSX?

**Target time:** 20–30 seconds

---

## Talk track

> **JSX** is syntax sugar — it looks like HTML in JavaScript but compiles to **`React.createElement`** (or similar) calls.
>
> It keeps UI structure **co-located with logic** in components. You can embed expressions with `{}`, spread props, and use TypeScript for prop types.
>
> Rules I follow: one root (or fragment), camelCase DOM props (`className`, `onClick`), close all tags.

---

## Code

```tsx
// JSX
const el = <button className="primary" onClick={save}>Save</button>;

// Roughly compiles to:
const el = React.createElement("button", { className: "primary", onClick: save }, "Save");
```

---

## Avoid

- Saying JSX runs in the browser unchanged — it's transformed at build time
