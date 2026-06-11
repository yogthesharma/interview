# Lambda limitations — timeout, memory, concurrency?

**Target time:** 45–60 seconds

---

## Talk track

| Limit | Value (know roughly) | Implication |
|-------|----------------------|-------------|
| **Timeout** | max **15 minutes** | Long carrier API / PDF gen → SQS worker or Step Functions, not sync API |
| **Memory** | 128 MB – 10 GB | More memory = **more CPU** + higher cost |
| **Payload** | 6 MB sync invoke; 256 KB SQS | Large files → S3 reference |
| **Concurrency** | account/regional limits | spike can throttle — request limit increase |
| **/tmp disk** | 512 MB – 10 GB | temp files only |
| **Deployment package** | 50 MB zipped / 250 MB unzipped | slim dependencies |

> **Design pattern:** API Lambda returns **202 + job id** quickly; worker Lambda processes queue (api/18, databases/18).

> **Reserved concurrency** — cap function so it doesn't starve account; **provisioned** — pre-warmed pool.

---

## Code

```ts
// Sync API — stay under API Gateway 29s timeout anyway
export const handler = async (event) => {
  await validateBody(event);
  await sqs.send(new SendMessageCommand({
    QueueUrl: QUOTE_QUEUE_URL,
    MessageBody: JSON.stringify({ applicationId }),
  }));
  return { statusCode: 202, body: JSON.stringify({ jobId }) };
};
```

---

## Avoid

- 14-minute Lambda doing polling loop — use Step Functions or separate scheduler
