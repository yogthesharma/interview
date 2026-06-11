# What do you usually unit test?

**Target time:** 30 seconds

---

## Talk track

> **Good unit test targets:**
> - Pure **utils** — formatters, validators, pricing rules, transformers  
> - **Business logic** — eligibility checks, pagination helpers  
> - **Custom hooks** — with `renderHook`  
> - **Components** — user-visible behavior (RTL), not implementation  
> - **Edge cases** — empty input, null, boundary numbers
>
> **Skip / lower priority:** trivial getters, third-party library behavior, CSS pixel-perfect snapshots.

---

## Code

```ts
// High value
expect(formatCurrency(-99.9)).toBe("-$99.90");
expect(isValidEmail("bad@")).toBe(false);

// Lower value
expect(Button.displayName).toBe("Button"); // trivial
```

---

## Avoid

- Testing that React renders without asserting behavior
