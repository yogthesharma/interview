# How do you paginate in SQL vs DynamoDB?

**Target time:** 45–60 seconds

---

## Talk track

> Same concepts as `api/08` — implementation differs by store.

> **SQL (offset/limit)**
> - `OFFSET 20 LIMIT 20` — simple, bad at large offset  
> - **Keyset (cursor):** `WHERE (created_at, id) < ($lastCreated, $lastId) ORDER BY created_at DESC LIMIT 20` — uses index, stable

> **Prisma cursor pagination:**
> ```ts
> findMany({ take: 20, skip: 1, cursor: { id: lastId } })
> ```

> **DynamoDB**
> - **No OFFSET** — use **Query** with `ExclusiveStartKey` (LastEvaluatedKey from previous page)  
> - Sort key order defines sequence  
> - FilterExpression filters **after** read — can waste RCUs; prefer SK design that pre-filters

> **Rule:** public APIs return `nextCursor` opaque token; SQL keyset or Dynamo LastEvaluatedKey encoded.

---

## Code

```ts
// SQL keyset (Postgres)
const rows = await prisma.$queryRaw`
  SELECT * FROM applications
  WHERE employer_id = ${employerId}
    AND (created_at, id) < (${cursor.createdAt}, ${cursor.id})
  ORDER BY created_at DESC, id DESC
  LIMIT 20
`;

// DynamoDB
const page = await doc.query({
  TableName: "Enrollments",
  KeyConditionExpression: "pk = :pk",
  ExpressionAttributeValues: { ":pk": "EMP#acme" },
  Limit: 20,
  ExclusiveStartKey: lastKey, // from previous response
});
// page.LastEvaluatedKey → encode as nextCursor
```

---

## Avoid

- OFFSET pagination on million-row SQL table in prod API
