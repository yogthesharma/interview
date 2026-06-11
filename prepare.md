# Round 2 Interview Prep

**Role:** Sr Full Stack Engineer  
**Duration:** 45 minutes  
**Interviewer:** Shubham Singh (Senior Software Engineer)  
**His focus:** React, TypeScript, Node.js, web performance, AWS serverless

---

## What this round is testing

Round 1 likely covered: JS/TS basics + your background.

Round 2 likely checks: **Can you solve real problems and think like someone building production software?**

| Most likely | Less likely |
|-------------|-------------|
| 1 practical coding problem (TS/JS) | Hard LeetCode (DP, graphs) |
| Small API / system discussion | 1-hour whiteboard architecture |
| Deep dive on your past projects | Trick puzzles |

**One-liner:** Practical coding + clear thinking + production mindset — not heavy DSA.

---

## Priority checklist

Use this as your study order. Check items off as you go.

### Must prepare

- [ ] **JS/TS fundamentals** — async, arrays/objects, closures, TS types
- [ ] **5–8 practice problems** — see list below
- [ ] **2 project stories** — problem → your work → outcome → what broke → what you'd improve
- [ ] **React basics** — state, effects, forms, lists, re-renders
- [ ] **API thinking** — REST, errors, idempotency, pagination

### Good to prepare

- [ ] **AWS basics** — know what each service does (table below)
- [ ] **One system flow** — "user submits application" end-to-end
- [ ] **2–3 questions for interviewer** — see bottom of doc

### Can mostly skip

- Hard LeetCode / complex DP
- Deep AWS certification-level detail
- Insurance domain memorization
- FAANG-scale system design

### Senior differentiators (final rounds & staff-bar signals)

Prep: `answers/distributed-systems/`, `security-advanced/`, `production-engineering/`, `architecture-tradeoffs/`

- [ ] **Distributed systems** — consistency models, CAP, replication, sharding (`distributed-systems/`)
- [ ] **Security advanced** — OAuth2/OIDC, SSRF, request signing (`security-advanced/`)
- [ ] **Production engineering** — incident response, SLOs, rollbacks, postmortems (`production-engineering/`)
- [ ] **Architecture tradeoffs** — when NOT microservices/Redis/serverless (`architecture-tradeoffs/`)
- [ ] **Project deep-dive** — decisions, failures, tradeoffs (`project-deep-dive/` — highest ROI)

---

## 1. JavaScript / TypeScript

### Topics to know

| Topic | What to be able to do |
|-------|------------------------|
| Async | `async/await`, `Promise.all`, error handling, race conditions |
| Arrays | `map`, `filter`, `reduce`, group by key, flatten |
| Objects | Spread, destructuring, transform nested data |
| Closures & scope | Explain with a simple example |
| Event loop | Microtasks vs macrotasks (high level) |
| TypeScript | Types, interfaces, generics, union types, narrowing |

### Practice problems (pick 5–8)

- [ ] Debounce / throttle
- [ ] Retry failed API call with exponential backoff
- [ ] Flatten nested array or object
- [ ] Group array of items by a key
- [ ] Simple `fetch` wrapper with error handling
- [ ] Transform API response into UI-friendly shape
- [ ] Implement `Promise.all` from scratch
- [ ] Rate limiter or simple LRU cache

### Self-check questions

- What happens if two `async` calls run in parallel and one fails?
- Difference between `==` and `===`? When does it matter?
- How do you type a function that accepts multiple response shapes in TS?

---

## 2. React (full stack signal)

### Topics to know

- [ ] Props vs state
- [ ] `useEffect` — deps, cleanup, common bugs (stale closure)
- [ ] Forms — controlled inputs, validation, submit loading/error states
- [ ] Lists — `key` prop, filtering, pagination
- [ ] Re-renders — when they happen, `useMemo` / `useCallback` (and when **not** to use them)
- [ ] Server state — React Query / SWR patterns (conceptual is fine)

### Mini exercise (do once)

Build a small component:

- Search + filter list, **or**
- Paginated table, **or**
- Form with validation + async submit

Focus on: loading state, error state, empty state.

---

## 3. API & backend thinking

You may not code a full backend live, but be ready to **discuss**.

### REST basics

- [ ] HTTP methods and when to use them
- [ ] Status codes (200, 201, 400, 401, 404, 500)
- [ ] Consistent error response shape `{ error, message, code }`
- [ ] Pagination — offset vs cursor
- [ ] Idempotency — duplicate submit, retry safety

### Practice prompt (say it out loud in 5 min)

> **"User submits an insurance application — what happens?"**

Suggested flow:

1. Client validates input
2. `POST /applications` → API validates + auth
3. Write to DB (DynamoDB / SQL)
4. Return `201` with application ID quickly
5. Emit event (EventBridge / queue)
6. Background worker: PDF, email, underwriting checks
7. Log + monitor with correlation ID

---

## 4. AWS & system basics (Shubham's world)

You don't need expert depth. Know **names + purpose + when to use**.

| Service | One-liner |
|---------|-----------|
| **Lambda** | Run code without managing servers; watch timeouts & cold starts |
| **API Gateway** | HTTP API in front of Lambda |
| **DynamoDB** | NoSQL; design around access patterns (partition key + sort key) |
| **SQS** | Queue for async work, retries, dead-letter queue |
| **EventBridge** | Event bus between services (he migrated SNS → EventBridge) |
| **S3** | File storage (PDFs, reports) |
| **CDK / SAM** | Infrastructure as Code + deployment |

### Design phrases that land well

- "I'd return fast to the user and process heavy work async."
- "I'd make the write idempotent so retries are safe."
- "Structured logging with a request/correlation ID across services."
- "Multi-tenant: isolate data by tenant ID in keys or schema."

---

## 5. Your project stories

Prepare **2 projects** using this template. Write bullets — don't memorize a script.

### Template

```
Project: _______________________________

Problem:
  -

What I built (specifically me, not "the team"):
  -

Tech stack:
  -

Hardest part / tradeoff:
  -

Something that broke or was painful in prod:
  -

What I'd do differently now:
  -
```

### Project 1

```
Project:

Problem:

What I built:

Tech stack:

Hardest part:

Prod issue / learning:

Improve now:
```

### Project 2

```
Project:

Problem:

What I built:

Tech stack:

Hardest part:

Prod issue / learning:

Improve now:
```

---

## 6. During the interview (45 min)

### Before coding

- [ ] Repeat the problem back
- [ ] Ask about inputs, edge cases, expected scale
- [ ] Confirm: function only, or React component?

### While solving

- [ ] Think aloud — explain approach before typing
- [ ] Start simple, then optimize
- [ ] Call out edge cases (null, empty, network fail)
- [ ] Mention prod concerns: "I'd log this", "this should be idempotent"

### Time management

| Phase | Time |
|-------|------|
| Intro + clarifications | ~5 min |
| Main exercise | ~25–30 min |
| Your questions | ~5–10 min |

### Good questions to ask Shubham

Pick 2–3:

- "What's the biggest architectural focus right now — event-driven workflows, DynamoDB patterns, or frontend performance?"
- "What does a strong full-stack engineer look like in the first 90 days here?"
- "Where do you see the most production pain — API latency, async pipelines, or frontend?"
- "How do you balance shipping fast vs maintaining 100+ microservices?"

---

## 3-day cram plan

### Day 1 — Coding

- [ ] 3–4 JS/TS problems (async + arrays/objects)
- [ ] Review TS types you use daily
- [ ] 30 min: talk through solutions out loud

### Day 2 — Full stack + stories

- [ ] 1 small React exercise (list + filter or form)
- [ ] Fill in both project story templates above
- [ ] Practice 5-min "application submit" API flow out loud

### Day 3 — Light system + mock

- [ ] Skim AWS table (30 min)
- [ ] 1 timed 30-min mock: any medium JS problem, talk while coding
- [ ] Pick 2 questions for interviewer

---

## Quick reference — what they want in a Sr Full Stack hire

From the JD + interviewer's background:

- Ship features end-to-end (UI → API → data)
- Write testable, maintainable code
- Think about logging, monitoring, CI/CD
- Comfortable in startup pace — ownership, not waiting for specs
- Can grow into event-driven, multi-tenant, serverless architecture

---

## Notes / reflections

Use this space after practice sessions or mock interviews.

### What felt weak today:

-

### What to revisit tomorrow:

-

### Questions that came up I couldn't answer:

-

### Post-interview debrief (fill after the call):

- Format was:
- Questions they asked:
- What went well:
- What to improve for next time:
