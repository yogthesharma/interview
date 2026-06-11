# React Query / SWR — why use them?

**Target time:** 45 seconds

---

## Talk track

> **React Query** (TanStack Query) and **SWR** solve **server state** in React — not just fetch wrappers.
>
> They give you: **caching**, deduped requests, **background refetch**, stale-while-revalidate, loading/error status, retries, invalidation after mutations, and **granular rerenders** per query key.
>
> **Why not raw `useEffect` + `useState`?** You reinvent caching, race handling, and cache invalidation poorly.
>
> At **IQM** we migrated dashboards to React Query — fixed stale data and simplified components. I still use it at Atlys-style flows for anything API-backed.

---

## Code

```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ["applications", tenantId],
  queryFn: () => fetchApplications(tenantId),
});

const mutation = useMutation({
  mutationFn: submitApplication,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["applications"] }),
});
```

---

## Avoid

- "Redux replaces React Query for API data" — different jobs (client vs server state)
