# How do you handle feature flags?

**Target time:** 30 seconds

---

## Talk track

> **Feature flags** let you **ship code dark** and turn features on per env, % rollout, or tenant — without a deploy for every toggle.
>
> **Uses I've seen / done:**
> - Gradual rollout of risky UI changes  
> - Kill switch if prod misbehaves — flip off without rollback deploy  
> - Per-client config in multi-tenant products (Role-specific angle)
>
> **Implementation:** LaunchDarkly, Flagsmith, or simple **config table / env flag** for smaller needs. Frontend checks flag before rendering; backend guards API paths too.
>
> **Discipline:** remove dead flags after stable — otherwise tech debt.

---

## Avoid

- Only env vars with no runtime toggle if they ask about gradual rollout
