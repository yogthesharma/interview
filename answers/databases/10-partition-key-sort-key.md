# What is a partition key and sort key?

**Target time:** 45–60 seconds

---

## Talk track

> DynamoDB table **primary key** is either:
> - **Partition key (PK) only** — hash key, one item per PK value  
> - **Composite:** partition key + **sort key (SK)** — many items under same PK, ordered by SK

> **Partition key** — determines which **physical partition** stores the item. Spread load — hot PK = throttling.

> **Sort key** — orders items **within** a partition. Enables:
> - `begins_with(sk, 'APP#')`  
> - range queries `sk BETWEEN '2026-01' AND '2026-12'`

> **Naming pattern:** `PK = EMP#acme`, `SK = APP#2026#app_42` — human-readable prefixes.

---

## Code

```ts
// Get one application under employer partition
await doc.get({
  TableName: "Enrollments",
  Key: { pk: "EMP#acme", sk: "APP#app_42" },
});

// All applications for employer (query — not scan)
await doc.query({
  TableName: "Enrollments",
  KeyConditionExpression: "pk = :pk AND begins_with(sk, :prefix)",
  ExpressionAttributeValues: {
    ":pk": "EMP#acme",
    ":prefix": "APP#",
  },
});
```

```
Item layout:
pk (partition)     sk (sort)           attributes
EMP#acme           APP#app_42          status, planId, ...
EMP#acme           APP#app_43          ...
EMP#beta           APP#app_99          ...
```

---

## Avoid

- One partition key for entire table (`pk = "DATA"`) — hot partition, scale failure
