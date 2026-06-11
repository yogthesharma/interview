# Incident response — what's your process?

**Target time:** 2 min (STAR-friendly)

---

## Talk track

> **Goal:** restore service fast, communicate clearly, learn without blame.
>
> **Phases:**

| Phase | Actions |
|-------|---------|
| **Detect** | Alerts, Sentry, user reports, status page spike |
| **Triage** | Severity (SEV1–4), incident commander, comms channel |
| **Mitigate** | Rollback, feature flag off, scale up, disable bad path — **fix forward vs rollback** decision |
| **Resolve** | Root cause fix, verify metrics green |
| **Follow-up** | Blameless postmortem within 48–72h (`production-engineering/06`) |

---

## During incident — what I actually do

```
1. Acknowledge alert — don't ignore paging fatigue
2. Check dashboard: error rate, latency p99, recent deploys
3. Correlate: deploy time, config change, dependency outage
4. Communicate: "investigating", ETA updates every 15–30 min for SEV1
5. Mitigate first, root-cause second
6. Document timeline as you go — memory lies after 3 hours
```

---

## Your story spine (fill from `background/17`)

> At Atlys [or IQM]: [symptom] → [how detected] → [mitigation] → [root cause] → [what we changed so it won't repeat].

---

## How this connects

| File | Why |
|------|-----|
| `production-engineering/03` | Rollback as mitigation |
| `cicd-devops/07` | What you alert on |
| `debugging/08` | Intermittent 500 investigation habits |

---

## Avoid

- Deploying more changes during SEV1 without rollback plan
- Hero debugging alone — loop in comms + second pair of eyes
- Skipping postmortem because "we fixed it"
