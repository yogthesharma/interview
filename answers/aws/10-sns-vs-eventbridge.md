# SNS vs EventBridge — when use which?

**Target time:** 45 seconds

---

## Talk track

| | **SNS** | **EventBridge** |
|--|---------|-----------------|
| **Model** | Topic fan-out | Event bus + rules |
| **Routing** | Filter policies on topic | Rich pattern matching on event JSON |
| **Schedule** | No (use EventBridge scheduler) | Built-in cron rules |
| **Replay/archive** | Limited | Event archive, replay |
| **AWS integration** | Good | Native event sources (S3, etc.) |
| **Simplicity** | Simpler, older pattern | Better for event-driven architecture |

> **Pick SNS when:** simple fan-out — "fire email + webhook + queue on submit", team already on SNS, low ceremony.

> **Pick EventBridge when:** many event types, cross-service routing, scheduled jobs, need audit/replay, domain event catalog.

> **Interview tip:** *"I'd default to **EventBridge** for domain events (`ApplicationSubmitted`, `QuoteReceived`) and **SQS** for work queues (request quote). SNS fine for legacy or simple notify-all."*

---

## Code

```text
Work queue (do job):     API → SQS → worker Lambda
Domain events (notify):  service → EventBridge → rules → email / analytics / webhook
Simple fan-out:          service → SNS → multiple SQS queues
```

---

## Avoid

- EventBridge for high-volume point-to-point job processing without queue buffering — often SQS in path
