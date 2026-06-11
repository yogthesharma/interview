# What is a dead-letter queue (DLQ)?

**Target time:** 45 seconds

---

## Talk track

> **DLQ** = queue for messages that **failed processing** after max retries — poison pills don't block the main queue forever.
>
> **Flow (SQS + Lambda):**
> 1. Message processed → fail (bug, bad payload, downstream 500)  
> 2. SQS **visibility timeout** expires → message visible again → retry  
> 3. After **maxReceiveCount** (redrive policy) → message moved to **DLQ**  
> 4. CloudWatch alarm on DLQ depth → on-call investigates  
> 5. Fix bug → **redrive** messages from DLQ back to main queue

> **Also:** Lambda **async** invocation DLQ for unhandled errors.

> **Ops discipline:** DLQ without alarms = silent data loss.

---

## Code

```yaml
# SQS redrive policy (conceptual)
MainQueue:
  RedrivePolicy:
    deadLetterTargetArn: !GetAtt DLQ.Arn
    maxReceiveCount: 3
```

```ts
// CloudWatch alarm (conceptual)
Metric: ApproximateNumberOfMessagesVisible
QueueName: quote-request-dlq
Threshold: >= 1
Action: SNS → PagerDuty / Slack
```

---

## Avoid

- Infinite retries on non-transient errors (bad schema) — fail fast to DLQ
