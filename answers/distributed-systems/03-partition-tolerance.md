# Partition tolerance — what breaks in practice?

**Target time:** 60–90 seconds

---

## Talk track

> **Network partition** = nodes can't talk reliably — AZ outage, misconfigured security group, DNS blip, overloaded LB.
>
> **What breaks:**
> - Split-brain — two nodes both think they're primary
> - Stale reads from lagging replica
> - Duplicate message processing (consumer A and B both think they own work)
> - Timeouts that look like failures → retries → duplicates
>
> **Design habits:**
> - **Timeouts + bounded retries** with jitter
> - **Idempotency keys** on writes (`system-design/12`)
> - **Health checks** that distinguish "slow" vs "dead"
> - **Multi-AZ** but don't assume cross-region is free
>
> **Senior IC take:** assume partitions **will** happen; code for at-least-once + idempotent handlers, not perfect networks.

---

## Symptom → check

| Symptom | Likely partition-related cause |
|---------|-------------------------------|
| Intermittent 500s | Upstream timeout, retry storm |
| Duplicate records | At-least-once + no idempotency |
| Users see old data | Reading replica during lag |

---

## Avoid

- Infinite retries without backoff — amplifies partition pain
- Distributed locks without TTL/fencing — split-brain locks never release
