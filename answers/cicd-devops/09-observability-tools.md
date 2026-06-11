# Have you used Datadog, Sentry, CloudWatch, etc.?

**Target time:** 30 seconds — be honest

---

## Talk track

> **Honestly, hands-on depth varies:**
>
> - **Sentry** — yes, for **frontend error tracking** (React crashes, source maps, release tags). Very useful for "what broke in prod for real users."  
> - **CloudWatch** — familiar conceptually for **AWS Lambda logs/metrics**; I'd query log groups, filter by requestId, check error rates. Not a power user of every CloudWatch feature.  
> - **Datadog** — less direct day-to-day; I understand **logs + APM + dashboards** role, happy to ramp on whatever the company uses.
>
> **Pattern I know:** errors → Sentry, server logs → CloudWatch/Datadog, correlate with request ID, tie to deploy version.

---

## Avoid

- Claiming expert Datadog if you haven't used it
- "We had no observability"
