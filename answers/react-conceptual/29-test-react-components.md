# How do you test React components?

**Target time:** 45 seconds

---

## Talk track

> **Tools:** Jest/Vitest + **React Testing Library** (RTL) — test **behavior like users**, not implementation details.
>
> **What I test:**
> - Renders correct content for props/state  
> - User events (click, type) → expected outcome  
> - Loading/error states  
> - Integration with mocked API (MSW)
>
> **What I avoid:** testing internal state, shallow rendering every child, snapshot-only tests that break on any markup change.
>
> **Hooks:** `renderHook` for custom hooks. E2E: Playwright/Cypress for critical flows — less unit test count, higher confidence.

---

## Code

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("submits email", async () => {
  const onSubmit = vi.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  await userEvent.type(screen.getByLabelText(/email/i), "a@b.co");
  await userEvent.click(screen.getByRole("button", { name: /login/i }));

  expect(onSubmit).toHaveBeenCalledWith({ email: "a@b.co" });
});
```

---

## Avoid

- `wrapper.state()` Enzyme-style tests — outdated pattern
