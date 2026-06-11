# Postmortems — blameless culture

**Target time:** 60–90 seconds

---

## Talk track

> **Blameless postmortem** = learn **what** in the system allowed failure, not **who** to punish. People had reasons; fix the system.
>
> **Good postmortem includes:**
> - Timeline (UTC) — detection → mitigation → resolution
> - Customer impact — duration, % affected
> - Root cause(s) — often multiple contributing factors
> - What went well — fast rollback, clear comms
> - Action items — owner + due date (monitoring, runbook, code fix)
>
> **Five whys** — dig past "human error" to missing guardrail: "deploy had no automated smoke test."

---

## Template spine

```markdown
## Summary
One paragraph — what broke, how long, impact.

## Timeline
- 14:02 — alert fired (error rate > 2%)
- 14:08 — identified bad deploy
- 14:12 — rollback complete

## Root cause
Migration X incompatible with code Y.

## Action items
- [ ] Add migration compatibility check in CI (@owner, date)
- [ ] Runbook for rollback (@owner, date)
```

---

## Senior IC behavior

> I write postmortems for incidents I caused — shows ownership. I focus on **prevent recurrence**, not deflecting.

---

## How this connects

| File | Why |
|------|-----|
| `production-engineering/01` | Follow-up after incident |
| `background/17` | On-call experience stories |
| `project-deep-dive/` | "What broke in production" questions |

---

## Avoid

- Names in "root cause: Bob deployed wrong" — use roles and process gaps
- Action items with no owner — postmortem theater
