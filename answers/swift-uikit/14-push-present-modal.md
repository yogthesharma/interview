# Push / present / modal presentation — memory and lifecycle implications?

**Target time:** 45–60 seconds

---

## Talk track

> **Push (`show` / `pushViewController`)** — on **navigation stack**; previous VC stays in memory (view may be off-window). `viewWillDisappear` on previous; back pops and `viewWillAppear` again.
>
> **Present modally** — new VC **covers** presenter; presenter stays loaded underneath. **Full screen** vs **page sheet** / **form sheet** (iOS 15+ detents). Dismiss returns to presenter lifecycle.
>
> **Memory:** deep navigation stacks hold all VCs — consider releasing heavy resources in `viewDidDisappear` if not visible. Modals stack too — dismiss chains matter.
>
> **`isModalInPresentation`** — block swipe dismiss when form incomplete. **Child coordinators** help decide push vs present (detail vs task flow).

---

## Comparison

| Style | Stack | Typical use |
|-------|-------|-------------|
| Push | Navigation | Drill-down, hierarchy |
| Modal | Presented | Self-contained task, auth |
| Sheet | Presented | Quick edit, optional flow |

---

## Avoid

- Pushing a modal task that should block the whole app without modal presentation
- Retaining large images on every VC in a 10-deep stack
