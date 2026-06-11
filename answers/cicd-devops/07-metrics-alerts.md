# What metrics do you alert on?

**Target time:** 30 seconds

---

## Talk track

> I haven't owned pager policies solo, but metrics I'd expect and care about:
>
> **RED-style (requests):**  
> - **Rate** — traffic drop or spike (deploy gone wrong)  
> - **Errors** — 5xx rate, failed Lambda invocations  
> - **Duration** — p95/p99 latency regression
>
> **Business-adjacent:** queue depth (SQS backlog), failed async jobs, email/PDF generation failures.
>
> **Infra:** throttling (DynamoDB, Lambda concurrency), DLQ messages.
>
> Alert on **user-visible pain** + **SLO breaches**, not every blip — avoid alert fatigue.

---

## Avoid

- Listing metrics you've never seen in prod
- "We didn't alert on anything"
