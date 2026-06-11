# What is EventBridge? How is it different from SNS?

**Target time:** 45 seconds

---

## Talk track

> **EventBridge** = managed **event bus** — route events by **rules** and **schema**, not just topic fan-out.
>
> **Sources:** your apps, AWS services (S3, CodePipeline), SaaS partners.
>
> **Rules:** pattern match on JSON (`detail-type`, `source`, fields) → target Lambda, SQS, Step Functions, etc.
>
> **vs SNS:**
> - SNS = **topic + subscribers**, simple push, optional filter policies  
> - EventBridge = **central bus**, content-based routing, event archive/replay, schema registry, scheduled cron rules

> **Mental model:** SNS = "yell in a room, subscribers hear everything (filtered)." EventBridge = "post office sorts mail by address rules."

---

## Code

```json
// EventBridge event envelope
{
  "source": "company.applications",
  "detail-type": "ApplicationSubmitted",
  "detail": {
    "applicationId": "app_42",
    "employerId": "acme"
  }
}
```

```ts
await eventBridge.send(new PutEventsCommand({
  Entries: [{
    Source: "company.applications",
    DetailType: "ApplicationSubmitted",
    Detail: JSON.stringify({ applicationId, employerId }),
    EventBusName: "default",
  }],
}));
```

---

## Avoid

- Using both SNS and EventBridge for same event without team convention — pick one primary bus
