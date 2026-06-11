# Deployment rollback strategy

**Target time:** 90 seconds

---

## Talk track

> **Rollback** = return to last known-good version fast. Plan **before** deploy, not during SEV1.
>
> | Strategy | Rollback speed | Risk |
> |----------|----------------|------|
> | **Redeploy previous artifact** | Minutes | Schema must be backward compatible |
> | **Blue-green** | Seconds (flip traffic) | Need 2x capacity briefly |
> | **Canary** | Seconds (route 0% to bad) | Requires traffic splitting |
> | **Feature flag off** | Seconds | Code still deployed but path disabled |
>
> **Golden rule:** **backward-compatible migrations** — expand/contract pattern (`system-design/20`). Never deploy code + breaking schema in one step.

---

## Rollback decision tree

```
Bad deploy detected
  ├─ Feature flag? → OFF first (fastest)
  ├─ Canary still at 5%? → halt + route 0%
  ├─ Data migration reversible? → redeploy prev + optional down migration
  └─ Irreversible migration? → forward-fix only (rollback code, not DB)
```

---

## What I practice

- Immutable artifacts tagged `git sha` — redeploy exact previous build
- Smoke tests post-deploy — auto-rollback hook if health check fails
- DB: add column nullable first, backfill, then enforce — never drop in same release

---

## How this connects

| File | Why |
|------|-----|
| `system-design/18-19` | Rollback, blue-green, canary |
| `system-design/20` | Schema changes with live traffic |
| `production-engineering/01` | Rollback as incident mitigation |

---

## Avoid

- "We'll hotfix forward" as only plan — sometimes rollback is 10x faster
- Rolling back code while DB already ran irreversible migration
