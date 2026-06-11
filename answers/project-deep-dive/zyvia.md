# Project deep-dive: Zyvia — AI-assisted task management

**Role:** Solo builder | **Duration:** Aug 2025 – Dec 2025 (~5 months)  
**One-liner:** Natural language → structured tasks; React UI + backend for intent parsing and workflow automation

---

## Tell me more about this project

> **Zyvia** is an **AI-assisted task management** app I built solo. Users describe what they want in **natural language** — "remind me to follow up with client Friday" — and the system **parses intent** into structured tasks, priorities, and workflows.
>
> I owned **everything**: React frontend focused on clean task UX, backend for parsing/automation, and integrating with an LLM API for intent understanding.
>
> Shipped in ~5 months as a complete product experiment — less scale than Atlys, more **product + AI integration** depth.

**Target time:** 30–45 sec

---

## What was your specific contribution vs the team's?

> **100% solo** — design, build, ship, iterate. No formal team.

---

## What was the architecture?

```
┌─────────────────────────────────────────────────────────┐
│  React + TypeScript UI                                  │
│  Task list, natural language input, clean interactions  │
│  Optimistic updates, loading/error on AI parse          │
└─────────────────────┬───────────────────────────────────┘
                      │ REST
┌─────────────────────▼───────────────────────────────────┐
│  Node.js backend                                        │
│  Auth (if implemented), task CRUD, workflow rules         │
│  LLM integration — prompt → structured JSON tasks       │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  Database + LLM API                                       │
│  Persist tasks; call model for intent parsing             │
└─────────────────────────────────────────────────────────┘
```

---

## Why did you choose that tech stack?

| Choice | Why |
|--------|-----|
| **React + TS** | Fast UI iteration; typed task models |
| **Node** | Solo full-stack velocity |
| **LLM API** | Intent parsing too fuzzy for rules-only |
| **Structured JSON output** | Validate model response before saving tasks |

---

## What were the main tradeoffs?

| Tradeoff | Choice | Cost |
|----------|--------|------|
| **LLM vs rule parser** | LLM for flexibility | Latency, cost, occasional wrong parse |
| **Rich AI vs simple CRUD** | AI as differentiator | More failure modes in UX |
| **Solo scope** | MVP feature set | No mobile app, limited integrations |
| **Validate AI output** | Strict schema + retry | Extra backend logic |

---

## What would you do differently if you rebuilt it today?

1. **Structured output mode** / tool calling from day one — fewer parse errors
2. **Human-in-the-loop confirm** — show parsed task before save on ambiguous input
3. **Eval suite** — golden prompts to regression-test intent quality
4. **Cheaper model for simple intents** — route complexity tiers
5. **Offline-first task list** — AI only when online

---

## How did you test it?

- **Manual** — diverse natural language prompts
- **Schema validation tests** — LLM response → Zod/JSON schema
- **UI states** — slow model, failure, empty parse
- **Golden cases** — 20–30 prompts with expected task shape

---

## How did you deploy it?

**Customize:**
- [ ] Hosting for FE/BE
- [ ] API keys in server env only — never client-side LLM keys

---

## What broke in production?

**LLM hallucination / wrong structure**
> Model returned invalid JSON → backend validation caught it → user saw "couldn't understand, try again" instead of corrupt data.

**Slow responses**
> Long prompts timeout — added loading UX + server timeout + retry with simpler prompt.

**Ambiguous intents**
> "Meeting next week" without date — learned to ask clarifying question in UI.

---

## How did you monitor / debug it?

- Server logs for parse failures and latency
- Manual review of bad prompts
- No formal APM — solo MVP scale

---

## What was the scale?

> **Personal / small user base** — hundreds of tasks max, not thousands of users. Honest pre-scale product.

> **Value for interview:** Shows you can **integrate non-deterministic AI into a structured product** — relevant as the company uses ML for underwriting.

---

## How long did it take to build?

> **~5 months** (Aug–Dec 2025) — MVP to usable product solo.

---

## What was the business impact?

> Learning product + **AI workflow design** — not revenue metrics. Demonstrates you can ship **0→1** outside employer.

---

## Who were the stakeholders?

> Just me. Optional beta users for feedback.

---

## What was the hardest technical decision?

> **How much to trust the LLM vs validate everything.**
>
> Chose **never trust raw output** — always parse through schema, reject bad responses, show user-friendly retry. Slower to build, safer in prod.

---

## Legacy vs greenfield?

> **Greenfield** — new repo, new data model.

---

## Migrations / refactors?

> Task model evolved — added fields for priority/due date; wrote one-time migration for stored tasks.

---

## Documentation?

- README for local dev
- Prompt templates documented in code
- API types for task schema

---

## Show me / explain a specific feature

### Natural language → task

```
1. User types: "Call Raj about insurance quote tomorrow 3pm"
2. UI sends text to POST /parse-intent
3. Backend builds prompt with schema example
4. LLM returns JSON: { title, dueAt, priority, tags }
5. Zod validates — fail → user retry message
6. Success → preview card "Create this task?" 
7. User confirms → POST /tasks → optimistic UI update
8. Edge: ambiguous date → clarification sub-flow
```

**Interview tie-in:** "Structured output from messy human input — similar spirit to normalizing census/application data."

---

## Quick prep card

```
ZYVIA = solo 5mo | AI intent → tasks | React + Node + LLM
STRENGTH = structured validation around non-deterministic AI
HONEST = small scale, big 0→1 signal
ROLE TIE-IN = ML-assisted workflows, validated structured output
```
