# How do you onboard a new iOS engineer to your architecture?

**Target time:** 45–60 seconds

---

## Talk track

> **Week 1:** run app, read ARCHITECTURE.md, module diagram, clone + tests green, ship tiny PR (copy fix, logging).
>
> **Teach the spine:** navigation (coordinator/router), DI composition root, one feature end-to-end (Orders), how networking + persistence connect.
>
> **Pair on:** first real ticket with review; point to design system, error patterns, preview mocks.
>
> **Guardrails:** lint/format CI, code owners on core modules, example ViewModel test.
>
> **How I onboard on any stack:** map **one vertical slice** first — same at IQM for new React hires; don't dump every pattern day one.

---

## Onboarding checklist

- [ ] Local build + tests
- [ ] Trace one user flow in debugger
- [ ] Read module dependency rules
- [ ] Merge small PR
- [ ] Shadow release / TestFlight process

---

## Avoid

- "Read the whole repo" with no guided path
- First task is refactor core navigation
