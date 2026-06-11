# What is eventual consistency?

**Target time:** 45 seconds

---

## Talk track

> **Strong consistency** — read immediately returns latest write.  
> **Eventual consistency** — replicas may lag; read might return **stale** data briefly, then converges.

> **DynamoDB default reads:** eventually consistent (cheaper, faster).  
> **ConsistentRead: true** — strong read, higher RCU cost, use when stale read is unacceptable (balance check after transfer).

> **Elsewhere:**
> - Postgres primary read → strong on primary; replicas eventual  
> - SQS, SNS, cached React Query data → eventual by nature  
> - **CQRS** — write model vs read model sync async

> **Product impact:** after submit application, UI might poll or optimistic update — don't assume global instant visibility on all replicas.

---

## Code

```ts
// DynamoDB — strong read when needed
await doc.get({
  TableName: "Accounts",
  Key: { pk: "USER#1" },
  ConsistentRead: true,
});

// React Query — staleTime acknowledges eventual UI cache
useQuery({ queryKey: ["applications"], staleTime: 30_000 });
```

---

## Avoid

- ConsistentRead everywhere in DynamoDB — cost + often unnecessary
