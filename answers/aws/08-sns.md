# What is SNS?

**Target time:** 45 seconds

---

## Talk track

> **SNS** (Simple Notification Service) = **pub/sub fan-out** — one publisher, **many subscribers**.
>
> **Subscribers:** Lambda, SQS, HTTP endpoint, email, SMS.
>
> **Pattern:**
> 1. `application.submitted` published to SNS topic  
> 2. Subscribers in parallel: email Lambda, analytics SQS, partner webhook Lambda  
> 3. Each subscriber gets its **own copy** of the message

> **vs SQS:** SQS = one consumer pulls from queue; SNS = **broadcast** to many. Often **SNS → SQS** per subscriber for buffering/retries.

> **Use when:** "notify multiple systems of same event" — not for single worker job queue.

---

## Code

```ts
await sns.send(new PublishCommand({
  TopicArn: process.env.APPLICATION_EVENTS_TOPIC,
  Message: JSON.stringify({
    type: "application.submitted",
    applicationId,
    employerId,
  }),
  MessageAttributes: {
    eventType: { DataType: "String", StringValue: "application.submitted" },
  },
}));
```

```text
                    ┌→ SQS → email worker
application.submitted (SNS) ─┼→ SQS → webhook worker
                    └→ Lambda → audit log
```

---

## Avoid

- SNS for single sequential worker — use SQS
