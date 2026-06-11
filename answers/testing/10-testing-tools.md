# What tools have you used — Jest, Vitest, Cypress, Playwright?

**Target time:** 30 seconds — honest

---

## Talk track

> **Jest / Vitest** — unit + component tests. Vitest with Vite projects — fast, Jest-compatible API. **`vi.fn`, `describe`, `expect`**.
>
> **React Testing Library** + **user-event** — component behavior (pairs with Jest/Vitest).
>
> **MSW** — mock HTTP in tests and Storybook.
>
> **Cypress / Playwright** — e2e browser automation. Playwright is newer default for many teams (multi-browser, speed). Used lightly / aware of patterns if not daily.
>
> **CI:** run unit on every PR; e2e on staging or nightly for cost.

---

## Code

```json
// package.json scripts (typical)
{
  "test": "vitest",
  "test:ci": "vitest run",
  "e2e": "playwright test"
}
```

---

## Avoid

- Listing tools you've never run — say "familiar in concept, would ramp quickly"
