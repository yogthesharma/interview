# How do you mock API calls in tests?

**Target time:** 45 seconds

---

## Talk track

> **Approaches:**
>
> 1. **Mock `fetch` / axios** — `vi.fn()` / `jest.spyOn(global, 'fetch')` return fake Response  
> 2. **MSW (Mock Service Worker)** — intercept network in tests; same handlers dev/test — my preferred for React  
> 3. **Inject dependency** — pass `apiClient` mock into function/component  
> 4. **React Query** — wrap in `QueryClientProvider` with retries off; mock fetch layer
>
> Test **loading → success → error** states, not just happy path.

---

## Code

```ts
// Vitest + fetch mock
vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
  ok: true,
  json: async () => [{ id: 1, name: "Ann" }],
}));

// MSW (sketch)
http.get("/api/users", () => HttpResponse.json([{ id: 1 }]));
```

---

## Avoid

- Mocking so much that test doesn't resemble real integration at all
