# How do you handle loading and error states?

**Target time:** 30 seconds

---

## Talk track

> **Explicit UI states** — don't leave users guessing. Minimum four: **idle/loading/success/error**.
>
> With **React Query**: `isLoading`, `isFetching`, `isError`, `error`, `data` — map to skeleton, spinner, content, retry button.
>
> **UX:** skeleton for first load, subtle indicator for background refetch, retry with backoff on error, disable destructive actions while mutating.

---

## Code

```tsx
const { data, isLoading, isError, error, refetch } = useQuery({
  queryKey: ["apps"],
  queryFn: fetchApps,
});

if (isLoading) return <Skeleton />;
if (isError) return <ErrorPanel message={error.message} onRetry={refetch} />;
return <AppList apps={data} />;
```

---

## Avoid

- Infinite spinner with no error path — always handle rejection
