# How do you roll back a bad deployment?

**Target time:** 5–8 min

---

## Talk track

> **Fast rollback** beats root-cause during outage.

---

## By deployment type

| Type | Rollback |
|------|----------|
| **Lambda** | Point alias `live` to previous version / redeploy prior artifact from CI |
| **ECS/K8s** | Roll deployment to previous task definition / image tag |
| **Database migration** | Forward-fix migration — avoid reversing prod schema |
| **Feature flag** | Kill switch without redeploy |

---

## Flow

```
1. Alarm fires — 5xx spike, DLQ flood
2. On-call confirms correlates with deploy
3. Roll back application artifact (NOT db unless migration caused it)
4. Verify metrics recover
5. Post-mortem — fix forward on branch, re-deploy with tests
```

---

## Prevention

- Staging smoke tests gate prod  
- Canary (file 19) limits blast radius  
- **Backward-compatible** migrations so old code still runs during deploy window

---

## Avoid

- `prisma migrate reset` in production
