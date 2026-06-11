# This API is slow — how do you investigate?

**Target time:** 45–60 seconds

---

## Talk track

> **1. Define slow** — p95 latency? which endpoint? since when (deploy correlation)?
>
> **2. Reproduce** — staging, same payload, curl/Postman with timing.
>
> **3. Trace one request** — logs with **requestId**, APM (Datadog/X-Ray), see where time goes: auth, DB, external API.
>
> **4. Common causes:**
> - **N+1 queries** / missing index  
> - **Large payload** — over-fetching columns  
> - **Cold start** (Lambda)  
> - **Downstream timeout** — PDF service, etc.  
> - **No connection pool** — DB connection storm
>
> **5. Quick wins** — index, cache hot read, pagination, parallel independent calls.
>
> **6. Verify** — deploy fix, compare p95 before/after.
>
> At IQM I'd check Network tab + API logs + query patterns on dashboard endpoints.

---

## Checklist

```text
[ ] Which endpoint / tenant / payload size?
[ ] DB explain analyze / slow query log
[ ] Payload size in Network tab
[ ] Recent deploy or traffic spike?
[ ] External dependency latency
```

---

## Avoid

- "Add more servers" before finding bottleneck
