# How do you handle filtering and sorting in APIs?

**Target time:** 30–45 seconds

---

## Talk track

> **Query parameters** — predictable, documented:
> - Filter: `?status=submitted&employerId=acme`  
> - Sort: `?sort=-createdAt` (minus = desc) or `?sort=createdAt:desc`  
> - Search: `?q=ann` (full-text — document limits)
>
> **Validate** allowed fields — whitelist `sort` columns (prevent SQL injection / slow sorts).
>
> **Combine with pagination** — filter + sort + cursor.
>
> **Don't** expose raw SQL or arbitrary JSON query objects to clients unless internal admin API.

---

## Code

```http
GET /v1/applications?status=pending&employerId=acme&sort=-createdAt&limit=20
```

```ts
const allowedSort = new Set(["createdAt", "status"]);
const sortField = allowedSort.has(field) ? field : "createdAt";
```

---

## Avoid

- `?sort=DROP TABLE` — always whitelist
