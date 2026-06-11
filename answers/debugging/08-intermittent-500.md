# Intermittent 500 errors — how do you debug?

**Target time:** 45–60 seconds

---

## Talk track

> **Intermittent = often timing, load, or external dependency.**
>
> **1. Correlate** — requestId, timestamp, user, region, deploy version. Group errors: same stack trace?
>
> **2. Check patterns:**
> - **Spikes at peak traffic** — throttling (DynamoDB, Lambda concurrency), pool exhaustion  
> - **Specific input** — null field, edge payload  
> - **Third-party flakes** — timeout, rate limit  
> - **Race** — rare concurrent write conflict
>
> **3. Logs + metrics** — error rate graph aligned with traffic; DLQ depth; 5xx by route.
>
> **4. Mitigate** — retry with backoff for transient errors, circuit breaker, increase timeout only if justified.
>
> **5. Reproduce** — load test, chaos on staging, replay logged payload.
>
> Not formal on-call for me, but I've debugged flaky visa API calls — usually **timeout + retry without idempotency** made it worse.

---

## Avoid

- "Can't debug intermittent" — correlation IDs are the answer
