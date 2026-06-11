# Unit vs integration vs e2e — differences?

**Target time:** 45 seconds

---

## Talk track

> **Unit** — test **one unit** in isolation (function, hook, component with mocks). Fast, many, narrow scope.
>
> **Integration** — test **several pieces together** — API route + DB (test DB), component + real child, service + repository. Catches wiring bugs.
>
> **E2E** — **full user journey** in real browser (Playwright/Cypress) — login → submit form → see result. Slowest, flakiest, highest confidence for critical paths.
>
> **Pyramid:** lots of unit, fewer integration, handful of e2e for smoke/critical flows.

---

## Code (same feature, three levels)

```ts
// Unit — pure function
expect(calculatePremium(age, coverage)).toBe(120);

// Integration — API + test DB
const res = await app.inject({ method: "POST", url: "/quotes", payload });
expect(res.statusCode).toBe(201);

// E2E — browser
await page.goto("/apply");
await page.fill('[name="email"]', "a@b.co");
await page.click('button[type="submit"]');
await expect(page.getByText("Submitted")).toBeVisible();
```

---

## Avoid

- Only e2e — slow feedback loop
