# Virtual DOM — what is it and why?

**Target time:** 30 seconds

---

## Talk track

> The **Virtual DOM** is React's in-memory representation of the UI — a lightweight tree of objects describing elements and props.
>
> On each state change, React builds a **new virtual tree**, **diffs** it against the previous one, and applies the **minimal set of real DOM updates** (reconciliation).
>
> **Why:** Direct DOM manipulation is easy to get wrong at scale; batching + diffing gives predictable performance for complex UIs. It's not always faster than hand-tuned DOM for tiny pages — the win is **maintainability + sane updates** on large apps.

---

## Code (conceptual)

```tsx
// You write declarative UI:
return <ul>{items.map((i) => <li key={i.id}>{i.name}</li>)}</ul>;

// React internally: old VDOM vs new VDOM → patch real DOM (insert/update/remove nodes)
```

---

## Avoid

- "Virtual DOM is always faster than real DOM" — oversimplified
