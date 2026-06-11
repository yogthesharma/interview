# How do you test React components?

**Target time:** 45 seconds

---

## Talk track

> **React Testing Library** — render like a user: `getByRole`, `getByLabelText`, `userEvent.click`, assert visible outcomes.
>
> **Test behavior not implementation** — don't assert internal state or shallow child structure.
>
> **Wrap providers** — Router, QueryClient (retries off), Theme context as needed.
>
> **Async:** `findBy`, `waitFor` for fetch results.
>
> Matches `react-conceptual/29` — same philosophy I use in product work.

---

## Code

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function wrapper({ children }: { children: React.ReactNode }) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

test("shows users after load", async () => {
  render(<UserList />, { wrapper });
  expect(await screen.findByText("Ann Lee")).toBeInTheDocument();
});

test("submits form", async () => {
  const onSubmit = vi.fn();
  render(<LoginForm onSubmit={onSubmit} />);
  await userEvent.type(screen.getByLabelText(/email/i), "a@b.co");
  await userEvent.click(screen.getByRole("button", { name: /login/i }));
  expect(onSubmit).toHaveBeenCalledWith({ email: "a@b.co" });
});
```

---

## Avoid

- Snapshot-only tests for complex components
