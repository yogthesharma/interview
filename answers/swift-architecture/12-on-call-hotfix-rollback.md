# On-call / production incidents on mobile — hotfix and rollback flow?

**Target time:** 45–60 seconds

---

## Talk track

> **Mobile difference:** you **can't roll back** instantly like server — users keep old builds; mitigation = **remote kill switch**, feature flag off, or **expedited App Store** hotfix.
>
> **Incident flow:**
> 1. Alert — crash spike, support flood, metric drop
> 2. Triage — Crashlytics cluster, recent release diff
> 3. Mitigate — disable feature via Remote Config if possible
> 4. Fix — branch from release tag, minimal patch, fast review
> 5. Ship — TestFlight verify → App Store expedited review if critical
> 6. Postmortem — root cause, guardrail (test, flag, monitor)
>
> **My experience:** on-call for production APIs at Atlys/IQM — same communication, different deploy channel. Mobile needs **flags** because store review adds hours/days.

---

## Avoid

- Waiting for full feature revert when flag can disable entry point
- Hotfix that skips TestFlight smoke test
