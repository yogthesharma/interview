# How do you test async code?

**Target time:** 30 seconds

---

## Talk track

> **Promises:** `async/await` in test function, or return promise from test (Jest waits).
>
> **React async UI:** RTL **`findBy*`** (waits for element), **`waitFor`**, **`userEvent`** after async update.
>
> **Fake timers:** `vi.useFakeTimers()` for debounce/setTimeout — advance time, assert once.
>
> **Always await** assertions that depend on async work — avoid flaky tests.

---

## Code

```ts
// Async function
test("retries then succeeds", async () => {
  const result = await retryWithBackoff(fn, { retries: 2 });
  expect(result).toBe("ok");
});

// React — wait for UI
const row = await screen.findByText("Ann Lee");
expect(row).toBeInTheDocument();

// Debounce — fake timers
vi.useFakeTimers();
userEvent.type(input, "hello");
vi.advanceTimersByTime(300);
await waitFor(() => expect(screen.getByText(/results/i)).toBeInTheDocument());
```

---

## Avoid

- Missing `await` on `findBy` / async act — flaky CI
