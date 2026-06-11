# Logging and analytics — what do you instrument in production?

**Target time:** 45–60 seconds

---

## Talk track

> **Logging (engineering):** structured events — request id, user id hash, screen, error domain/code, latency. Levels: debug (dev only), info, warning, error. **OSLog** / unified logging; avoid PII in plaintext.
>
> **Analytics (product):** funnel steps — signup started, application submitted, quote viewed; properties for segmentation. Firebase, Amplitude, Segment.
>
> **Instrument:** screen views, critical user actions, API failures (sanitized), performance markers (cold start, TTI), feature flag evaluations.
>
> **Don't:** log tokens, passwords, full health/financial payloads.
>
> **My prod habits:** correlate client logs with backend trace id; at Atlys-style flows I'd log step transitions + API error codes, not raw passport data.

---

## Code

```swift
logger.info("orders_load_started")
do {
    let orders = try await repo.orders(forceRefresh: true)
    logger.info("orders_load_success count=\(orders.count, privacy: .public)")
} catch {
    logger.error("orders_load_failed code=\(error.code, privacy: .public)")
    analytics.track("orders_error", properties: ["code": error.analyticsCode])
}
```

---

## Avoid

- `print()` in production paths
- Analytics on every keystroke without sampling
