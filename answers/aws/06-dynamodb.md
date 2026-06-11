# What is DynamoDB? (AWS angle)

**Target time:** 30 seconds

---

## Talk track

> **Skim** — data modeling detail is in `databases/09–14`. Here: **where it sits in AWS architecture**.

> **DynamoDB** = fully managed NoSQL in AWS. No servers to patch. Integrates natively with:
> - **Lambda** — IAM role, low-latency reads/writes  
> - **DynamoDB Streams** → Lambda (react to changes)  
> - **API Gateway** — direct integration (rare for complex logic)  
> - **On-demand vs provisioned** capacity — pay per request vs reserved RCU/WCU

> **the company/serverless use cases:** idempotency keys, webhook dedup, job status, high-volume event log — **not** replacement for RDS enrollment core unless modeled carefully.

---

## Code

```ts
// Lambda worker updates job status
await doc.send(new UpdateCommand({
  TableName: process.env.JOBS_TABLE,
  Key: { pk: `JOB#${jobId}` },
  UpdateExpression: "SET #s = :done, completedAt = :now",
  ExpressionAttributeNames: { "#s": "status" },
  ExpressionAttributeValues: { ":done": "completed", ":now": new Date().toISOString() },
}));
```

---

## Cross-ref

- `databases/09-what-is-dynamodb.md`  
- `databases/10-partition-key-sort-key.md`  
- `databases/12-access-patterns.md`

---

## Avoid

- Re-explaining PK/SK here — point to databases section
