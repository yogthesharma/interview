# SLO, SLA, and error budgets

**Target time:** 90 seconds

---

## Talk track

> **SLA** = contract with customer ("99.9% uptime") — breach may mean credits/penalties.  
> **SLO** = internal target you set **stricter** than SLA ("99.95%") — early warning.  
> **SLI** = what you measure — availability, latency p99, error rate.
>
> **Error budget** = allowed unreliability in a window.  
> `99.9% monthly` → ~43 minutes downtime budget.
>
> **How teams use it:**
> - Budget healthy → ship features, take reasonable risk
> - Budget burned → freeze risky deploys, focus on reliability
> - Stops "100% uptime" fantasy — trade velocity vs reliability explicitly

---

## Example SLOs (B2B API)

| SLI | SLO | Measurement |
|-----|-----|-------------|
| Availability | 99.9% | `5xx / total requests` (exclude client errors) |
| Latency | p99 < 500ms | API Gateway / APM |
| Async pipeline | 99% processed < 5 min | queue age metric |

---

## Practical honesty

> At product-engineer level I may not own SLO dashboards, but I **design for them**: idempotent handlers, graceful degradation, alerts on error rate not just "server up".

---

## How this connects

| File | Why |
|------|-----|
| `cicd-devops/07` | Metrics you alert on |
| `production-engineering/04` | Feature rollout when budget is low |
| `system-design/07` | Traffic spike — SLO-driven capacity planning |

---

## Avoid

- SLO on CPU usage — not user-facing
- Alerting on every blip — alert fatigue burns the budget metaphor too
