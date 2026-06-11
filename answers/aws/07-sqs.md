# What is SQS? How is it used?

**Target time:** 45–60 seconds

---

## Talk track

> **SQS** (Simple Queue Service) = managed **message queue** — decouple producers from consumers.
>
> **Flow:**
> 1. API Lambda validates submit → **SendMessage** to queue  
> 2. Returns 202 to client immediately  
> 3. Worker Lambda **polls** queue (event source mapping) → processes message  
> 4. On success → message **deleted** from queue  
> 5. On failure → retry (visibility timeout) → eventually **DLQ** (aws/11)

> **Types:**
> - **Standard** — at-least-once, best-effort ordering, high throughput  
> - **FIFO** — exactly-once processing (with dedup id), strict order, lower throughput

> **Why serverless loves SQS:** smooth traffic spikes, retries built-in, scale workers independently.

> **Example:** submit application → queue quote request → worker calls carrier API.

---

## Code

```ts
// Producer (API Lambda)
await sqs.send(new SendMessageCommand({
  QueueUrl: process.env.QUOTE_QUEUE_URL,
  MessageBody: JSON.stringify({ applicationId, employerId }),
  MessageGroupId: employerId, // FIFO only
}));

// Consumer — Lambda triggered by SQS event source
export const handler = async (event: SQSEvent) => {
  for (const record of event.Records) {
    const { applicationId } = JSON.parse(record.body);
    await requestCarrierQuote(applicationId);
  }
};
```

---

## Avoid

- Processing heavy work synchronously in API when queue fits
