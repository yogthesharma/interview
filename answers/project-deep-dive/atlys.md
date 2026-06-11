# Project deep-dive: Atlys — Visa application workflows

**Role:** Senior Software Developer | **Duration:** ~Nov 2024 – Jul 2025 (~8 months–1 year)  
**One-liner:** High-traffic multi-step visa onboarding — React/TS frontend + Fastify APIs + Core Web Vitals

---

## Tell me more about this project

> Atlys is a travel/visa platform. I worked on **visa application workflows** — the multi-step onboarding where users enter details, upload documents, and progress through application states before submission.
>
> It's **production-critical** and **high-traffic** — thousands of users, conversion-sensitive. Slow or broken steps directly hurt the business.
>
> I worked on a **small squad** — not a lead, but I owned significant **frontend modules** and **backend APIs** supporting those flows, plus **performance work** on Core Web Vitals.

**Target time:** 45–60 sec

---

## What was your specific contribution vs the team's?

| **I owned / drove** | **Team / others** |
|---------------------|-------------------|
| React + TS UI for visa workflow steps I was assigned | Product defined flow requirements and priorities |
| Reusable component architecture for faster feature rollout | Design (Figma), other engineers on adjacent flows |
| Fastify APIs for frontend data needs on my modules | Platform/infra, shared auth, deployment pipelines |
| Core Web Vitals — lazy loading, code splitting on my routes | QA regression across full application |
| Code reviews, sprint facilitation on the squad | Engineering lead / manager on roadmap calls |

> I wasn't the **architect of the entire Atlys platform** — I owned **my slice** end to end: UI, APIs touching my features, perf on those routes, and prod fixes when they broke.

---

## What was the architecture?

```
┌─────────────────────────────────────────────────────────┐
│  Browser — React + TypeScript SPA                       │
│  Multi-step wizard, form state, document upload UI      │
│  Code splitting / lazy routes on heavy steps            │
└─────────────────────┬───────────────────────────────────┘
                      │ REST (JSON)
┌─────────────────────▼───────────────────────────────────┐
│  Node.js — Fastify APIs                                 │
│  Validation, business rules for application steps       │
│  Auth/session integration (team-wide patterns)          │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  Data / services (team-owned)                           │
│  Application state, user data, downstream integrations  │
└─────────────────────────────────────────────────────────┘
```

**Patterns I can speak to:**
- **Multi-step wizard** — step state, validation per step, resume on refresh
- **API contracts** — typed request/response between React and Fastify
- **Performance** — route-level code splitting, lazy-loaded heavy components
- **Modular UI** — shared patterns so new visa steps ship faster

---

## Why did you choose that tech stack?

> Most stack was **team-standard** — I didn't unilaterally pick it, but it made sense:
>
> - **React + TypeScript** — complex forms, large team, type safety on API boundaries
> - **Fastify** — fast, schema-friendly APIs, good fit for Node microservices style backend
> - **Code splitting** — visa flows had heavy steps; splitting kept initial LCP acceptable
>
> I pushed for **modular component patterns** and **stricter TS on API types** within our slice — that was my influence, not replacing the whole stack.

---

## What were the main tradeoffs?

| Tradeoff | Choice | Cost |
|----------|--------|------|
| **Ship speed vs perf perfection** | Phased launches — core flow first, CWV pass after | Short window of suboptimal metrics on some routes |
| **Reusable abstractions vs one-offs** | Invested in shared step/form components | Upfront time; paid off in ~30% faster rollouts |
| **Client state vs server state** | Mixed — wizard state client-side, persisted at milestones | Had to handle stale data / race conditions carefully |
| **Bundle size vs DX** | Lazy routes — smaller initial load | Slightly more complex loading/error states |

---

## What would you do differently if you rebuilt it today?

1. **React Query (or similar) from day one** for server state — fewer hand-rolled fetch + stale closure bugs
2. **Feature flags** on every new step — safer gradual rollout at traffic scale
3. **Structured logging + correlation IDs** on API calls earlier — faster prod debugging across FE/BE
4. **E2E tests on critical conversion path** — top 3 steps automated before each launch
5. **Design system contracts** with design earlier — fewer one-off UI variants

> Not saying Atlys did it wrong — with more time I'd harden **observability and test gates** on the happy path.

---

## How did you test it?

- **Manual + QA** — primary gate for multi-step flows; I gave QA clear regression lists per PR
- **Unit tests** — utilities, validation helpers, pure functions
- **Component testing** — key form components where we had patterns (varies by module)
- **Staging** — full flow walkthrough before prod
- **Perf** — Lighthouse / CWV checks on changed routes

> Honestly **E2E could have been stronger** — I'd add Playwright on critical path if rebuilding.

---

## How did you deploy it?

> Team **CI/CD pipeline** — PR → review → merge → automated deploy to staging → promote to prod.
>
> I wasn't owning DevOps, but as an IC I:
> - Kept PRs small and demoable
> - Watched deploy channels for errors after my releases
> - Could roll back via team process if something slipped past QA

**Customize:** [ ] CI tool if you remember — GitHub Actions, etc.

---

## What broke in production?

**Story 1 — Performance regression (use if asked)**
> A release introduced a heavier chunk on an early step — **LCP worsened**, conversion team noticed. We traced it to a **lazy boundary in the wrong place**, adjusted splitting, redeployed.

**Story 2 — Async / stale data (tie to background answers)**
> Fast user navigation between steps occasionally showed **stale validation state** — classic async race. Fixed with request cancellation / stricter effect deps.

> I wasn't on formal pager duty, but I **fixed prod issues** when alerted via Slack/QA.

---

## How did you monitor / debug it?

- **Browser DevTools** — Network tab, Performance, React profiler for CWV work
- **API errors** — backend logs / team dashboards (name if you remember)
- **User reports + QA** — reproduced steps, screen recordings
- **Slack alerts** — post-deploy smoke checks on visa flow

> I'd trace **frontend symptom → API response → backend log** — full-stack debugging was expected on my modules.

---

## What was the scale?

| Dimension | Approximate (honest) |
|-----------|----------------------|
| **Users** | Thousands on visa workflows (resume: "thousands of users") |
| **Traffic** | High-traffic consumer product — peak around travel seasons |
| **Data** | Per-application user PII, documents — sensitive, validation-heavy |
| **Requests** | [Customize if you know API volume] |

> Don't invent "millions of RPS" — **thousands of users, conversion-critical** is your credible story.

---

## How long did it take to build?

- **Overall platform** — existed before you; you joined ongoing product
- **Your modules** — typical **1–3 sprints per major step/feature** depending on scope
- **Component architecture refactor** — incremental over first months, payoff on later features
- **Perf pass** — dedicated sprint(s) on CWV after core features landed

---

## What was the business impact?

- **~30% faster feature rollout** on new visa steps (modular components — resume claim)
- **Core Web Vitals improvement** — better LCP/TBT → better conversion on onboarding
- **Reliability** — fewer broken flows in prod on owned modules
- **Faster time-to-market** for product on visa vertical

---

## Who were the stakeholders?

| Stakeholder | Interaction |
|-------------|-------------|
| **Product** | Sprint planning, scope, acceptance criteria |
| **Design** | Figma handoff, mobile/responsive, loading states |
| **QA** | Test plans, regression, release sign-off |
| **Engineering lead / peers** | Architecture alignment, PR reviews |
| **End users** | Travelers applying for visas — conversion-sensitive |

---

## What was the hardest technical decision?

> **Modular component architecture vs shipping one-off pages fast.**
>
> Product wanted speed on the next country flow. I pushed for **extracting shared stepper, form field, and upload patterns** even though it slowed that one feature ~1 sprint.
>
> **Why hard:** Short-term deadline pressure vs long-term rollout speed.
>
> **Outcome:** Next features shipped faster — resume cites ~30% rollout improvement. Validated the bet.

---

## Did you work with legacy code or greenfield?

> **Mostly brownfield** — visa product already live; I extended and refactored existing React codebase.
>
> **Some greenfield** within that — new steps, new API endpoints, new component library patterns inside old structure.
>
> Not "blank repo" — **evolving a live high-traffic product**, which is harder in some ways (can't break prod).

---

## How did you handle migrations or refactors?

**Component modularization (main refactor story):**
1. Identified duplication across visa steps
2. Extracted shared primitives without big-bang rewrite
3. Migrated **one flow first** as proof — showed faster second migration
4. Documented pattern in PR descriptions + short internal notes
5. Reviewed teammates' PRs to keep consistency

> Same philosophy as **TS migration at IQM** — incremental, prove value, bring squad along. Not a lead — **influenced through example**.

---

## Did you write documentation? What kind?

- **PR descriptions** — what changed, how to test, screenshots
- **Component usage** — comments or short README for shared patterns (if team had one)
- **API contract notes** — request/response shapes for frontend consumers
- **QA handoff** — regression checklist per release

> Not formal Confluence architect docs — **practical docs that unblock reviewers and QA**.

---

## Show me / explain a specific feature

Pick one you know best — rehearse 2–3 min:

### Option A: Multi-step visa step with validation

```
1. User lands on step N — route loads lazy chunk
2. Form loads existing application state from Fastify API
3. Client validation → on submit POST → server validation
4. On success → advance stepper, persist application ID
5. Error states — field-level + global; retry on network fail
```

### Option B: Document upload step

```
1. User selects file → client size/type check
2. Upload to API (presigned URL or direct — customize)
3. Progress UI, error retry
4. Server confirms → step marked complete
5. Edge cases — slow network, duplicate upload, session expiry
```

### Option C: Performance optimization pass

```
1. Measured LCP/TBT on target route (Lighthouse)
2. Found heavy JS on critical path
3. Moved non-critical components behind React.lazy + Suspense
4. Re-measured — shared before/after in PR
```

**Customize:** Pick the feature you actually built and replace placeholders.

---

## Quick prep card

```
ATLLYS = high-traffic visa wizard | React+TS + Fastify | CWV + modular UI
MY ROLE = IC, owned modules FE+BE, reviews, scrum, NOT lead
PROUD OF = 30% faster rollouts, perf wins, prod ownership
HARDEST = abstraction vs deadline bet (won long-term)
REBUILD = React Query, E2E on happy path, better observability
```
