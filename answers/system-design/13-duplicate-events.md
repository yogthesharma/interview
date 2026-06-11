# How do you handle duplicate events?

**Target time:** 5–8 min

---

## Talk track

> Duplicates come from: **client retries**, **SQS redelivery**, **at-least-once pub/sub**, **user double-click**.

---

## Defense layers

```
Layer 1 — API: Idempotency-Key on POST (api/06)
Layer 2 — DB: UNIQUE constraint (employer_id, employee_id, window_id)
Layer 3 — Consumer: dedup table on eventId
Layer 4 — Business: status machine — can't submit twice (409 if already submitted)
```

---

## Dedup store (DynamoDB)

```ts
await doc.send(new PutCommand({
  TableName: "ProcessedEvents",
  Item: { pk: `EVT#${eventId}`, processedAt: now, result: summary },
  ConditionExpression: "attribute_not_exists(pk)",
}));
// ConditionalCheckFailedException → duplicate → skip processing
```

---

## FIFO SQS (when order + dedup matter)

```ts
SendMessageCommand({
  MessageDeduplicationId: eventId,
  MessageGroupId: employerId, // order per tenant
});
```

---

## Which to use when

| Scenario | Mechanism |
|----------|-----------|
| User submit button | Idempotency-Key + status 409 |
| Webhook delivery | `eventId` dedup (api/15) |
| Email on event | `eventId` in sent log |
| Queue worker | idempotency table |

---

## Avoid

- Only client-side disable button — server must enforce
