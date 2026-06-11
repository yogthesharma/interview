# What is CloudWatch?

**Target time:** 45 seconds

---

## Talk track

> **CloudWatch** = AWS **observability** — logs, metrics, alarms, dashboards.
>
> **Logs:** Lambda → CloudWatch Logs automatically; structured JSON `{ requestId, employerId, level }` for search.  
> **Metrics:** Lambda duration/errors/throttles, SQS queue depth, API Gateway 5xx, DynamoDB throttles.  
> **Alarms:** DLQ > 0, error rate > 1%, P99 latency — trigger SNS → Slack/PagerDuty.  
> **Dashboards:** ops view per service.

> **Interview tie-in:** same mindset as cicd-devops observability — **alert on symptoms users feel**, not every log line.

> **X-Ray** (optional mention): distributed tracing across API GW → Lambda → DynamoDB.

---

## Code

```ts
// Structured log in Lambda
console.log(JSON.stringify({
  level: "info",
  msg: "quote_requested",
  applicationId,
  employerId,
  requestId: context.awsRequestId,
}));
```

```yaml
# Alarm on DLQ (conceptual)
AlarmName: QuoteQueueDLQNotEmpty
MetricName: ApproximateNumberOfMessagesVisible
Threshold: 1
ComparisonOperator: GreaterThanOrEqualToThreshold
```

---

## Avoid

- `console.log` unstructured strings you can't query in prod
