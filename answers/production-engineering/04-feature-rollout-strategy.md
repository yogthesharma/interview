# Feature rollout strategy

**Target time:** 90 seconds

---

## Talk track

> **Gradual rollout** reduces blast radius — ship code **dark**, enable for **few**, then **all**.
>
> | Technique | What it does |
> |-----------|--------------|
> | **Feature flags** | Toggle behavior without redeploy (`cicd-devops/10`) |
> | **Canary** | 1–5% traffic to new version |
> | **Ring deployment** | internal → beta tenants → GA |
> | **Percentage rollout** | 10% → 50% → 100% with metric gates |
>
> **Gates between stages:** error rate, latency p99, business metric (conversion, completion rate).

---

## Multi-tenant B2B pattern

```
1. Deploy with flag OFF globally
2. Enable for internal employerId
3. Enable for 1 friendly pilot customer
4. 10% of tenants (hash employerId % 100)
5. 100% if error budget healthy
```

Keeps one angry enterprise from being your only feedback loop.

---

## Kill switch

> Every risky feature needs an **off switch** owned by on-call — not a deploy. Quote engine v2, new carrier adapter, experimental PDF renderer.

---

## How this connects

| File | Why |
|------|-----|
| `cicd-devops/10` | Feature flags implementation |
| `system-design/19` | Canary deployments |
| `production-engineering/02` | Error budget gates rollout |

---

## Avoid

- Long-lived flags with no cleanup — becomes untestable matrix
- Rolling out Friday 5pm — you own that pager
