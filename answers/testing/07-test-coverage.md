# How much test coverage is enough?

**Target time:** 30 seconds

---

## Talk track

> **No magic number** — 80% line coverage can still miss critical bugs; 50% on well-chosen paths can be fine.
>
> **Aim for:**
> - High coverage on **business logic** and **utils**  
> - Critical user paths covered by integration/e2e  
> - CI gate on **new code** in risky areas
>
> **Don't chase 100%** on UI boilerplate, generated code, or trivial wrappers — maintenance cost rises.
>
> Ask: *"If this breaks, how bad is it?"* — test proportionally.

---

## Avoid

- Coverage as vanity metric without meaningful assertions
- Blocking all PRs for 90% global coverage on legacy codebase
