# Answers — format guide

Each folder under `answers/` maps to a section in `questions.md`.

## Which format to use

| Section | Format | Why |
|---------|--------|-----|
| **opening/** | `.md` | Spoken answers — rehearse out loud |
| **background/** | `.md` | Behavioral / experience stories |
| **cicd-devops/** | `.md` | CI/CD, observability, DevOps concepts |
| **insurance-domain/** | `.md` | Light insurance / EOI domain (optional) |
| **startup-culture/** | `.md` | Startup fit, behavioral |
| **logistics-closing/** | `.md` | Salary, notice, closing — fill `[brackets]` |
| **questions-for-them/** | `.md` | Questions to ask interviewer (pick 2–3) |
| **javascript/** | `.js` | Sync/conceptual topics (event loop, closures, etc.) |
| **javascript-async/** | `.js` | Async JS — Promises, async/await, Promise.all, etc. |
| **typescript/** | `.ts` + `npm run` in folder | Strict TS demos — `cd answers/typescript && npm install` |
| **coding/arrays-objects/** | `.js` + tests | Bare stubs + HackerRank-style runner; solutions in `solutions/` |
| **coding/functions-utilities/** | `.js` + tests | Async + sync utilities |
| **coding/strings-logic/** | `.js` + tests | Strings, parsing, regex |
| **coding/** (other) | `.js` or `.ts` | Runnable solutions you can practice |
| **react-conceptual/** | `.md` | Talk track + inline TSX snippets |
| **react-practical/** | Vite app + `.md` | One route per exercise in `app/` |
| **performance-scalability/** | `.md` | Perf, caching, scaling talk tracks |
| **testing/** | `.md` | Unit/integration/e2e talk tracks |
| **node/** | `.md` + inline Fastify/Express code | Node backend talk tracks |
| **python/** | `.md` + inline Python examples | Python language & runtime talk tracks |
| **python-async/** | `.md` + inline Python examples | Python async & concurrency talk tracks |
| **flask-basics/** | `.md` + inline Flask examples | Flask framework intro talk tracks |
| **flask/** | `.md` + inline Flask examples | Flask architecture & production talk tracks |
| **fastapi-basics/** | `.md` + inline FastAPI examples | FastAPI intro talk tracks |
| **fastapi/** | `.md` + inline FastAPI examples | FastAPI technical depth talk tracks |
| **python-backend/** | `.md` + SQLAlchemy/Celery/ops examples | Persistence, jobs & ops talk tracks |
| **flask-fastapi-practical/** | `.md` + reference code | Live-coding walkthroughs |
| **api/** | `.md` + inline HTTP/Fastify examples | REST API design talk tracks |
| **auth/** | `.md` + inline Fastify/security examples | Auth & security talk tracks |
| **databases/** | `.md` + Prisma/SQL/DynamoDB examples | SQL & NoSQL talk tracks |
| **aws/** | `.md` | AWS / serverless talk tracks |
| **system-design/** | `.md` + mermaid diagrams | 10–20 min discussion talk tracks |
| **distributed-systems/** | `.md` | Consistency, CAP, replication, sharding talk tracks |
| **security-advanced/** | `.md` + inline HTTP/security examples | OAuth2, OIDC, SSRF, signing — beyond `auth/` |
| **production-engineering/** | `.md` | Incidents, SLOs, rollouts, chaos, postmortems |
| **architecture-tradeoffs/** | `.md` | Final-round "when NOT to…" senior discussions |
| **debugging/** | `.md` + broken `.js`/`.tsx` | Fix code + investigation talk tracks |
| **swift-ios/** | `.md` + inline Swift snippets | iOS / SwiftUI talk tracks |
| **swift-macos/** | `.md` + inline Swift snippets | macOS / AppKit / desktop talk tracks |
| **swift-language/** | `.md` + inline Swift snippets | Swift language & type system talk tracks |
| **swift-uikit/** | `.md` + inline Swift snippets | UIKit & interface talk tracks |
| **swift-swiftui/** | `.md` + inline Swift snippets | SwiftUI technical talk tracks |
| **swift-concurrency/** | `.md` + inline Swift snippets | Concurrency & threading talk tracks |
| **swift-architecture/** | `.md` + inline Swift snippets | Architecture & production (hirable) talk tracks |
| **swift-networking/** | `.md` + inline Swift snippets | Networking, persistence & security talk tracks |
| **swift-tooling/** | `.md` + inline Swift snippets | Tooling, CI/CD & App Store talk tracks |
| **swift-practical/** | `.md` + full Swift solutions | Live-coding walkthroughs |

## File naming

```
answers/opening/01-tell-me-about-yourself.md
answers/coding/flatten-array.js
answers/react/debounced-search.tsx
```

Number prefix = order you'd hit them in prep. Name = slug from the question.

## How to practice

1. Read the **Talk track** section out loud (aim for the target time).
2. Don't memorize word-for-word — know the bullet spine.
3. Fill in `[bracketed]` placeholders with your real details.
4. Star questions you stumble on in `questions.md`.

## Your profile (from resume)

- **Name:** Yog Sharma
- **Title:** Senior Product Engineer (~5.5 years)
- **Core stack:** React, TypeScript, Node.js (Fastify), React Query
- **Highlights:** High-traffic visa workflows (Atlys), IQM scale-up, virtualized-react (npm), Boson ([boson-dev](https://github.com/yogthesharma/boson-dev) — Rust + SQLite + React, YAML in Git), Zyvia (AI tasks)
- **Strengths to emphasize for this role:** Full-stack ownership, API design, performance, production reliability
- **Leadership framing:** Not a formal lead — but facilitated scrum ceremonies, active code reviewer, senior IC who unblocked the squad

## Sections completed

| Folder | Files | Status |
|--------|-------|--------|
| `opening/` | 01–09 | Done |
| `background/` | 01–19 | Done |
| `project-deep-dive/` | 6 projects + README | Done |
| `javascript/` | 01–10 concept `.js` files | Done |
| `javascript-async/` | 01–07 topic `.js` + practice files | Done |
| `typescript/` | 01–02 demo `.ts` + practice | Done |
| `cicd-devops/` | 01–11 `.md` | Done |
| `insurance-domain/` | 01–06 `.md` | Done |
| `startup-culture/` | 01–12 `.md` | Done |
| `logistics-closing/` | 01–08 `.md` | Done |
| `questions-for-them/` | 01–12 `.md` | Done |
| `coding/arrays-objects/` | 01–20 `.js` + `solutions/` | Practice files ready |
| `coding/functions-utilities/` | 01–15 `.js` + `solutions/` | Practice files ready |
| `coding/strings-logic/` | 01–10 `.js` + `solutions/` | Practice files ready |
| `react-conceptual/` | 01–29 `.md` | Done |
| `react-practical/` | 12 exercises + Vite app | Done (reference impl) |
| `performance-scalability/` | 01–14 `.md` | Done |
| `testing/` | 01–10 `.md` | Done |
| `debugging/` | 01–09 + broken/fixed code + talk tracks | Done (skim only) |
| `node/` | 01–14 `.md` | Done |
| `python/` | 01–16 `.md` | Done (language & runtime) |
| `python-async/` | 01–10 `.md` | Done |
| `flask-basics/` | 01–20 `.md` | Done |
| `flask/` | 01–14 `.md` | Done |
| `fastapi-basics/` | 01–22 `.md` | Done |
| `fastapi/` | 01–14 `.md` | Done |
| `python-backend/` | 01–14 `.md` | Done |
| `flask-fastapi-practical/` | 01–10 `.md` | Done |
| `api/` | 01–18 `.md` | Done |
| `auth/` | 01–12 `.md` | Done |
| `databases/` | 01–18 `.md` | Done |
| `aws/` | 01–23 `.md` | Done |
| `system-design/` | 01–20 `.md` | Done |
| `distributed-systems/` | 01–06 `.md` | Done |
| `security-advanced/` | 01–06 `.md` | Done |
| `production-engineering/` | 01–06 `.md` | Done |
| `architecture-tradeoffs/` | 01–06 `.md` | Done |
| `swift-ios/` | 01–29 `.md` | Done |
| `swift-macos/` | 01–12 `.md` | Done |
| `swift-language/` | 01–18 `.md` | Done |
| `swift-uikit/` | 01–14 `.md` | Done |
| `swift-swiftui/` | 01–12 `.md` | Done |
| `swift-concurrency/` | 01–12 `.md` | Done |
| `swift-architecture/` | 01–16 `.md` | Done |
| `swift-networking/` | 01–14 `.md` | Done |
| `swift-tooling/` | 01–12 `.md` | Done |
| `swift-practical/` | 01–10 `.md` | Done |

### Project deep-dive files

| File | When to use |
|------|-------------|
| `atlys.md` | **Default pick** — scale, full-stack, prod |
| `iqm.md` | Long tenure, TS migration, internal platform |
| `virtualized-react.md` | Perf depth, OSS, Shubham angle |
| `boson.md` | Current work — Rust + React, YAML in Git, local-first |
| `zyvia.md` | AI + 0→1 solo product |
| `uibix.md` | Internship only — pivot quickly |
