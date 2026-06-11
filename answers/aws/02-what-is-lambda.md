# What is AWS Lambda?

**Target time:** 45 seconds

---

## Talk track

> **Lambda** = run code **without managing servers** — AWS handles scaling, patching, capacity.
>
> You upload a **handler function**; AWS invokes it on:
> - **HTTP** (via API Gateway)  
> - **Queue** (SQS poll)  
> - **Events** (S3 upload, EventBridge rule, DynamoDB stream)  
> - **Schedule** (EventBridge cron)

> **Billing:** per invocation + duration (GB-seconds). Idle = $0.  
> **Runtime:** Node, Python, etc. — stateless; **no local disk** between invocations (except `/tmp`).

> **Good for:** webhooks, async workers, cron, thin APIs, event reactions.  
> **Bad for:** long CPU jobs, WebSockets at scale, low-latency always-warm APIs (consider containers).

---

## Code

```ts
// handler.ts
export const handler = async (event: SQSEvent) => {
  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    await processQuoteRequest(body.applicationId);
  }
};
```

```yaml
# serverless.yml (conceptual)
functions:
  submitApplication:
    handler: src/handlers/submit.handler
    events:
      - httpApi:
          path: /applications
          method: post
```

---

## Avoid

- Storing session state in Lambda global variable assuming it persists forever (container reuse is best-effort)
