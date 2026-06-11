# What is DynamoDB?

**Target time:** 45 seconds

---

## Talk track

> **DynamoDB** = AWS managed **NoSQL key-value / document** database. Serverless, single-digit ms latency at scale, pay per request.
>
> **Not SQL** — no JOINs, no ad-hoc queries. You design around **keys and access patterns** (databases/12).
>
> **Good for:** session store, idempotency keys, event streams, webhook dedup, high-write telemetry.  
> **the company/serverless stack:** pairs with Lambda, API Gateway, SQS.
>
> **Items:** up to 400 KB. **Tables:** partition across AWS automatically.

> Overlap with `aws/` section — here focus on **data modeling**; AWS section on **ops/deploy**.

---

## Code

```ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

const doc = DynamoDBDocumentClient.from(new DynamoDBClient({}));

// Idempotency key store
await doc.send(new PutCommand({
  TableName: "IdempotencyKeys",
  Item: {
    pk: `KEY#${idempotencyKey}`,
    response: { applicationId: "app_42" },
    ttl: Math.floor(Date.now() / 1000) + 86400,
  },
  ConditionExpression: "attribute_not_exists(pk)",
}));
```

---

## Avoid

- Using DynamoDB as primary store for complex relational enrollment without modeling plan
