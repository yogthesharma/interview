# Chaos engineering — what is it and when?

**Target time:** 60–90 seconds

---

## Talk track

> **Chaos engineering** = intentionally inject failures in **controlled** environments to prove resilience before prod surprises you.
>
> **Not:** randomly breaking prod on Friday.  
> **Is:** hypothesis → experiment → measure → fix weaknesses.
>
> **Example experiments:**
> - Kill one API instance — does LB drain gracefully?
> - Inject 500ms latency to DynamoDB — do timeouts + retries behave?
> - Fill disk on worker — does DLQ catch poison messages?
> - Simulate AZ failure — does multi-AZ actually work?

---

## Maturity ladder

```
1. Game days (manual, staging) — table-top + scripted failures
2. Automated fault injection in staging CI
3. Limited prod experiments (Netflix Chaos Monkey style) — mature teams only
```

**Startup honest take:** we may not run Chaos Monkey, but we **design** for failure — idempotent consumers, DLQs, circuit breakers, health checks. That's chaos-aware without the tooling.

---

## Hypothesis template

> "If the quote service times out, the application API returns 202 accepted and the user sees 'quote pending' — not a 500."

Test it. If false, fix before launch.

---

## How this connects

| File | Why |
|------|-----|
| `system-design/11` | Async pipeline failure handling |
| `aws/11` | DLQ for poison messages |
| `distributed-systems/03` | Partition tolerance |

---

## Avoid

- Chaos in prod without blast radius controls and rollback
- Injecting failures without observability — you learn nothing
