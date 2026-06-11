# What runs on every PR?

**Target time:** 20–30 seconds

---

## Talk track

> On every PR I've worked with, typically:
>
> - **Lint** (ESLint) + **format** check  
> - **TypeScript** compile / `tsc --noEmit`  
> - **Unit tests** (Jest/Vitest) for touched areas  
> - **Build** — app or package builds successfully  
> - Sometimes **bundle size** or basic e2e on critical paths (varies by team)
>
> I treat a green PR check as the **minimum bar** before asking for review. If tests were flaky, I'd fix or quarantine — not ignore.

---

## Avoid

- "Nothing, we merge fast" — sounds reckless
