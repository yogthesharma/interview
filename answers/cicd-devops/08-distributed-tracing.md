# What is distributed tracing?

**Target time:** 20–30 seconds

---

## Talk track

> **Distributed tracing** tracks one request as it hops across **multiple services** — each step is a **span** with timing, parent/child links, forming a **trace**.
>
> Unlike logs alone (text lines), a trace shows **where time was spent** — "API 50ms, then DynamoDB 200ms, then downstream PDF service 2s."
>
> Tools: **X-Ray**, **Datadog APM**, **OpenTelemetry**. Works best with **correlation IDs** and consistent instrumentation.
>
> I've debugged without full tracing using request IDs + logs; tracing is the **upgrade** when you have many Lambdas at this scale.

---

## Avoid

- Confusing with single-service profiling only
