# Project deep-dive: IQM Corporation — Internal workflow platform

**Role:** Frontend Developer → Full-stack IC | **Duration:** Jul 2021 – Sep 2024 (~3 years)  
**One-liner:** 10+ internal React/TS workflows, JWT auth, JS→TS migration, Fastify APIs

---

## Tell me more about this project

> IQM is a digital advertising company. I was on the team building **internal web products** — **10+ workflows** for ops, reporting, and campaign management used daily inside the company.
>
> I joined as **frontend-focused** and grew into **full-stack** — React, TypeScript, React Query, JWT auth, and **Node/Fastify** services.
>
> Biggest long-running initiative I helped drive: **JavaScript to TypeScript migration** across a large legacy codebase. I wasn't a lead, but I was a **core contributor and influencer** — pilot modules, patterns, reviews, and scrum facilitation on our squad.

**Target time:** 45–60 sec

---

## What was your specific contribution vs the team's?

| **I owned / drove** | **Team / others** |
|---------------------|-------------------|
| Frontend features across multiple internal modules | Product owners per workflow |
| **TS migration** — pilot, patterns, typing API contracts | Management prioritized roadmap |
| JWT auth integration across product modules | Security/platform guidelines |
| Fastify APIs for modules I full-stack owned | Shared backend services for some domains |
| React Query adoption patterns | Other FE engineers on parallel modules |
| **Code reviews**, **scrum facilitation** | Official engineering lead / manager |

> Over 3 years I touched **many workflows** — not one monolith feature. My story is **breadth + platform consistency**, not single-user consumer scale.

---

## What was the architecture?

```
┌─────────────────────────────────────────────────────────┐
│  Internal users (browser)                               │
│  React + TypeScript SPAs / modules                      │
│  React Query for server state, JWT in headers           │
└─────────────────────┬───────────────────────────────────┘
                      │ REST
┌─────────────────────▼───────────────────────────────────┐
│  Node.js — Fastify (and team services)                  │
│  Auth middleware, validation, business logic            │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  PostgreSQL / Redis / gRPC (team stack — per module)    │
│  Persistence, caching, internal integrations            │
└─────────────────────────────────────────────────────────┘
```

**Cross-cutting concerns I know well:**
- **JWT auth** — login, token refresh edge cases, protected routes
- **Shared UI patterns** — tables, filters, forms repeated across 10+ apps
- **Typed API layer** — TS interfaces shared FE/BE after migration

---

## Why did you choose that tech stack?

> Evolved over time — I didn't pick Day 1 stack alone.
>
> - **React** — team standard for internal SPAs
> - **TypeScript** — I advocated and helped execute migration — fewer prod undefined errors
> - **React Query** — killed hand-rolled fetch + stale state bugs on dashboards
> - **Fastify** — when I built backend pieces, fast schemas, good DX
> - **JWT** — stateless auth fit internal tools with API-heavy frontends

---

## What were the main tradeoffs?

| Tradeoff | Choice | Cost |
|----------|--------|------|
| **Big-bang TS vs phased** | Phased by module | Long migration; some dual patterns temporarily |
| **Shared component library vs per-app UI** | Moved toward shared patterns | Upfront alignment cost |
| **React Query everywhere vs mixed fetch** | Standardized on RQ where I influenced | Learning curve for teammates |
| **Build new service vs extend monolith API** | Module-by-module decisions | Some inconsistency across older code |

---

## What would you do differently if you rebuilt it today?

1. **Monorepo with shared packages** (`ui`, `api-types`, `eslint-config`) from earlier
2. **Stricter module boundaries** — prevent "import anything from anywhere"
3. **E2E smoke suite** on top 5 internal workflows
4. **Feature flags** for internal releases — less "big bang" QA cycles
5. **API design first** — OpenAPI contracts before FE build

---

## How did you test it?

- **Jest** — utilities, hooks, reducers
- **Manual QA** — internal users, fast feedback loops
- **Staging environment** — pre-prod validation
- **PR review** — human test steps in description
- **TypeScript compiler** — migration turned type errors into compile-time gates

> Test culture varied by module — I pushed for **testable pure functions** and **typed contracts** as minimum bar.

---

## How did you deploy it?

> Team CI/CD — merge to main → build → deploy internal environments.
>
> Internal tools = **lower public blast radius** than Atlys, but still **business-critical** for ops teams. Broken dashboard = blocked work.

**Customize:** [ ] Docker usage if you deployed services yourself

---

## What broke in production?

**Dashboard stale data bug (primary story — ties to hardest-bug answer)**
> Intermittent wrong filters / stale data on fast navigation — **useEffect stale closure + async race**. Fixed with cleanup, abort pattern, later **React Query**.

**JWT / auth edge cases**
> Token expiry mid-session → 401 loops or silent failures. Fixed refresh handling and global interceptor.

**TS migration slip**
> Migration PR broke edge case in shared utility — caught in staging/QA, rolled back, fixed forward with smaller PRs.

---

## How did you monitor / debug it?

- **Browser repro** — React DevTools, Network tab
- **Backend logs** — Fastify request errors (team logging)
- **Internal user tickets** — Slack/support from ops teams
- **Sentry or similar** — [customize if IQM used it]

> Debugging was often **frontend symptom → API → DB query** — full-stack ownership on my modules.

---

## What was the scale?

| Dimension | Approximate |
|-----------|-------------|
| **Users** | Internal — tens to hundreds of concurrent users per workflow (not public millions) |
| **Workflows** | **10+** distinct internal products/modules |
| **Data** | Campaign/reporting data — PostgreSQL, some Redis caching |
| **Requests** | Moderate API traffic — internal business hours peaks |

> Different scale story than Atlys — **breadth and reliability for internal ops**, not consumer viral traffic.

---

## How long did it take to build?

- **3 years total tenure** — continuous delivery, not one launch
- **TS migration** — **many months**, phased (see failed-project story — took longer than planned)
- **Typical feature** — 1–2 sprints per workflow enhancement
- **Auth rollout across modules** — incremental over quarters

---

## What was the business impact?

- **Fewer runtime errors** after TS migration — less firefighting
- **Faster feature delivery** on new modules using shared patterns + React Query
- **Security / consistency** — JWT auth standardized across modules
- **Developer productivity** — better DX, onboarding new FE devs easier

---

## Who were the stakeholders?

| Stakeholder | Interaction |
|-------------|-------------|
| **Internal product / ops users** | Direct feedback, urgent bugs |
| **Product managers** | Per-workflow requirements |
| **Design** | Internal UI — less polish than consumer, more density |
| **QA** | Regression on releases |
| **Engineering peers** | Shared patterns, migration pairing |
| **Manager** | Sprint priorities — I facilitated ceremonies, didn't set company roadmap |

---

## What was the hardest technical decision?

> **TypeScript migration strategy** — how aggressive, which modules first, how to avoid blocking features.
>
> Debate: stay on JS + JSDoc vs full TS. I pushed **typed API boundaries first**, shared models second, legacy utils last.
>
> **Hard because:** Political + technical — teammates worried about velocity. Required **proof via pilot**, not mandates. I wasn't lead — had to **earn buy-in**.

---

## Did you work with legacy code or greenfield?

> **Heavily legacy** — years of JavaScript, inconsistent patterns, shared untyped utilities.
>
> **Some greenfield** — new modules built TS-first after migration patterns existed.
>
> This is my strongest **brownfield / refactor** story — more than Atlys or Boson.

---

## How did you handle migrations or refactors?

**JS → TS migration playbook:**
1. Enable `allowJs` + loose strictness initially
2. Pick **one high-churn module** as pilot — prove value
3. Type **API request/response** first — highest ROI
4. Shared `types/` package for FE/BE contracts
5. Pair on next module — not solo hero
6. Stricter `tsconfig` over time

**React Query migration (where applicable):**
- Replaced fetch in one dashboard → demo fewer bugs → template for others

---

## Did you write documentation? What kind?

- **Migration guide** — informal doc / wiki on "how to convert a module"
- **PR templates** — test steps, screenshots
- **API type definitions** — living documentation via TypeScript
- **Onboarding notes** for new devs on squad patterns

---

## Show me / explain a specific feature

### Option A: JWT auth flow across modules

```
1. User logs in → POST /auth → JWT access (+ refresh if used)
2. Token stored (memory/httpOnly — customize what IQM used)
3. Axios/fetch interceptor attaches Authorization header
4. 401 → refresh or redirect login
5. Protected React routes check auth state
6. Edge case — token expiry during long form submit
```

### Option B: Internal dashboard with React Query

```
1. Page mount → useQuery fetches campaign data
2. User changes filter → query key updates → refetch
3. Loading / error / empty states explicit
4. Stale data handled by RQ cache policy
5. Pagination — cursor or offset (customize)
```

### Option C: TypeScript migration on one module

```
1. Rename .js → .tsx, fix red squiggles on exports
2. Type API responses from Fastify schemas
3. Replace PropTypes with interfaces
4. PR review with team — pattern doc updated
5. Ship — compile gate prevents regression
```

---

## Quick prep card

```
IQM = 3yr internal platform | 10+ workflows | legacy JS → TS
MY ROLE = FE → full-stack IC | migration driver | reviews + scrum
PROUD OF = TS migration impact, React Query patterns, auth
HARDEST = migration buy-in without lead title
REBUILD = monorepo, OpenAPI-first, E2E smoke suite
SCALE = internal ops breadth, not consumer viral traffic
```
