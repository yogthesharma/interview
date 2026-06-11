# Project deep-dive: Boson — Local-first API client

**Repo:** [github.com/yogthesharma/boson-dev](https://github.com/yogthesharma/boson-dev)  
**Role:** Solo builder (Senior Product Engineer) | **Duration:** Feb 2026 – Present  
**One-liner:** Code-first REST API client — YAML in Git, **Rust + SQLite** core, **React** UI, single native binary. No cloud, no account.

---

## Tell me more about this project

> **Boson** is a **local-first, code-first API client** I'm building — an alternative to Postman/Bruno where your **request collections live in Git as YAML**, not in a hosted workspace.
>
> You run `boson serve` and get a **native binary** that hosts both the **local HTTP API** and an embedded **React UI** at `http://127.0.0.1:8787`. Secrets, history, and drafts stay in **local SQLite** (`.boson/`) — encrypted, gitignored.
>
> I'm the **only engineer** — product, **Rust** runtime, **TypeScript** UI, CLI, releases, docs. It's where I've been applying **0→1 ownership** and learning **systems-level backend** in Rust while keeping the UI in my strongest stack.

**Target time:** 45–60 sec

---

## What was your specific contribution vs the team's?

> **100% solo** — design, implementation, shipping.
>
> | Layer | What I built |
> |-------|----------------|
> | **Rust core** | Config loading, YAML schema, HTTP execution, SQLite persistence, encrypted secrets |
> | **CLI** | `init`, `serve`, `run`, `lint`, `doctor`, `update` |
> | **React UI** | Request editor, environments, run inspection (`web/`) |
> | **Release** | GitHub releases, install script, MIT open source |
>
> No squad — feedback from dogfooding and early users. **1 star, 6 releases** on GitHub as of v0.1.6.

---

## What was the architecture?

```
┌─────────────────────────────────────────────────────────────┐
│  Browser UI — React + TypeScript (web/)                     │
│  Request editor, env selector, response/timeline inspection │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP /api/*
┌──────────────────────────▼──────────────────────────────────┐
│  Rust binary (boson serve)                                  │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────┐ │
│  │ HTTP server │  │ YAML config  │  │ SQLite (.boson/)    │ │
│  │ /api/*      │  │ boson.yml +  │  │ history, drafts,    │ │
│  │ embedded UI │  │ boson/**/*.yml│ │ encrypted secrets   │ │
│  └─────────────┘  └──────────────┘  └─────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ HTTP executor — auth, JSON/form/multipart, {{vars}}      ││
│  └─────────────────────────────────────────────────────────┘│
└──────────────────────────┬──────────────────────────────────┘
                           │ outbound HTTP
┌──────────────────────────▼──────────────────────────────────┐
│  Target APIs (user-defined endpoints)                       │
└─────────────────────────────────────────────────────────────┘

Git (committed):     boson.yml, boson/environments.yml, boson/requests.yml
Local only:          .boson/ (SQLite + encryption key)
```

**Platform parallel:** Config-driven workflows in repo, local execution with audit trail, secrets handled carefully — similar *product mindset* to regulated insurance tooling (without claiming insurance domain expertise).

---

## Why did you choose that tech stack?

| Choice | Why |
|--------|-----|
| **Rust** | Performance and reliability for HTTP execution + single static binary; learn systems backend beyond Node |
| **SQLite** | Local-first history, drafts, secrets — no cloud DB |
| **YAML in Git** | Collections are **versioned like code** — teams review API changes in PRs |
| **React + TS** | Rich workbench UI — my production strength |
| **Embedded UI in binary** | `boson serve` = one install, no separate deploy for users |
| **No Boson cloud** | Privacy, offline, no account friction — core product bet |

---

## What were the main tradeoffs?

| Tradeoff | Choice | Cost |
|----------|--------|------|
| **Rust vs Node for core** | Rust | Steeper learning curve; faster execution, better binary story |
| **YAML code-first vs GUI-first** | YAML source of truth | Higher bar for non-dev users |
| **Local-only vs sync cloud** | Local-first | No cross-machine sync without Git |
| **Single binary vs Electron** | Native Rust + embedded web assets | Build pipeline complexity (`build.rs`, pnpm + cargo) |
| **Contributor `dev` vs release `serve`** | Two modes | More docs needed so users don't confuse HMR dev with shipped binary |

---

## What would you do differently if you rebuilt it today?

1. **OpenAPI import** earlier — biggest gap vs Postman for adoption
2. **Integration test suite** in CI from week one — `boson doctor --strict` in pipeline
3. **Workflow/chaining** — multi-step runs with shared context (if not fully shipped yet)
4. **Clearer plugin boundary** for auth helpers (OAuth flows)
5. **Windows polish sooner** — zip releases exist but macOS/Linux install script got priority

---

## How did you test it?

- **`boson lint` / `boson check`** — validate project YAML
- **`boson doctor`** — local setup diagnostics; `--strict` for CI
- **Rust tests** in `tests/`
- **Manual dogfooding** — `example/` workspace
- **`just dev-example`**, `cargo dev-example` for contributor workflow

> Pragmatic coverage for a solo OSS product — lint/doctor as user-facing test gates.

---

## How did you deploy it?

> **Not a SaaS** — users install locally:
>
> - **Install script:** `curl ... install.sh | bash` → `boson` on PATH
> - **GitHub Releases** — v0.1.6+ platform binaries (`.zip` on Windows)
> - **`boson update`** — self-update from GitHub releases
>
> **Development:** `cargo build --release` embeds web assets; contributor mode uses `boson dev` + Vite on `web/`.

---

## What broke in production?

**User-facing "prod" = broken installs or bad runs:**

| Issue | Fix angle |
|-------|-----------|
| **Invalid YAML** | Schema validation + `boson lint` with clear file paths |
| **Port conflicts** | `boson doctor` reports conflicts + fix commands |
| **Secret handling** | `{{secret:NAME}}` encryption in `.boson/` — bugs = security issue, tested carefully |
| **Variable interpolation** | `{{var}}` missing in env — warning in UI before run |
| **Build pipeline** | `BOSON_SKIP_WEB_BUILD`, pnpm/cargo ordering — contributor pain, documented in README |

**Story to tell:** "A user hit `boson doctor` failures on port/write permissions — we made doctor output actionable with fix commands and `--json` for tooling."

---

## How did you monitor / debug it?

- **`RUST_LOG`** for server-side tracing
- **`boson doctor`** — first-line support tool
- **GitHub Issues** — user reports
- **Local repro** with `example/` project

> No Datadog — local tool. Debugging is **reproduce with doctor + minimal YAML project**.

---

## What was the scale?

| Dimension | Honest answer |
|-----------|---------------|
| **Users** | Early OSS — 1 star, personal + early adopters |
| **Releases** | 6 GitHub releases (v0.1.6 latest) |
| **Data** | Per-machine SQLite — not multi-tenant cloud scale |
| **Requests** | User's own API traffic — Boson doesn't proxy through your servers |

> **Interview frame:** "It's pre-mass-adoption, but it's a **shipped product** with releases, install script, and real Rust+React architecture — not a todo tutorial."

---

## How long did it take to build?

- **Feb 2026 – present** on resume
- **35+ commits**, **6 releases** on boson-dev
- Iterative: CLI → serve → UI → doctor → update → polish
- Solo = continuous shipping, no sprints

---

## What was the business impact?

> No revenue — impact is:
> - **Tool I use daily** for API work
> - **Portfolio proof** of Rust + React + product sense
> - **OSS credibility** — CONTRIBUTING.md, MIT license, installable binary
> - **Polyglot signal** for roles that value performance and local-first privacy

---

## Who were the stakeholders?

> Me as product + engineer. Future: open-source contributors (CONTRIBUTING.md, Code of Conduct in repo).

---

## What was the hardest technical decision?

> **Rust for the core vs staying in Node** (my comfort zone).
>
> API clients execute untrusted HTTP, handle secrets, and should feel instant. Rust gave me **a single binary, strong typing, and control over SQLite/encryption** without a Node runtime dependency for end users.
>
> **Cost:** Slower initial velocity while learning Rust ownership/async patterns. **Payoff:** `boson serve` is one install — UI + API + persistence — which matches the product promise.

---

## Legacy vs greenfield?

> **100% greenfield** — new repo, new schema (`schema_version: 2`), new CLI surface.
>
> Note: you also have an earlier experimental repo ([boson](https://github.com/yogthesharma/boson) with `.api/` JSON) — if asked, say boson-dev is the **productized evolution** toward YAML-in-git and installable binary. Don't confuse interviewers unless they ask.

---

## Migrations / refactors?

- **Schema evolution** — `schema_version` in `boson.yml`
- **Config model refactors** in `src/config/`
- **Release vs dev feature split** — default features ship `serve`; `--no-default-features` for contributor `dev`

---

## Documentation?

- **README** — install, quick start, CLI reference, project format
- **CONTRIBUTING.md**, **SECURITY.md**, **CODE_OF_CONDUCT.md**
- **`example/README.md`** — sample workspace
- **`docs/`** folder in repo
- **Inline Rust + TS types** as living schema docs

---

## Show me / explain a specific feature

### End-to-end: run a request (best narrative)

```
1. boson init ./my-api → creates boson.yml + boson/environments.yml + boson/requests.yml
2. User edits YAML (or uses React UI) — request `hello` with {{baseUrl}}/path
3. boson serve → Rust serves UI + /api on 127.0.0.1:8787
4. UI calls POST /api/requests/{request_id}/run
5. Rust: load YAML → interpolate vars/secrets → execute HTTP → persist run in SQLite
6. UI shows response body, headers, timeline
7. CLI equivalent: boson run hello (same execution path)
```

### Encrypted secrets

```
1. Secret stored via POST /api/secrets/{name}
2. In YAML: Authorization: Bearer {{secret:TOKEN}}
3. Never committed to Git — lives in .boson/ encrypted
4. UI treats secrets as local config, not mutable cloud state
```

### boson doctor (good "production mindset" story)

```
1. User runs boson doctor --project-dir .
2. Checks: Rust binary OK, ports free, paths writable, YAML valid
3. --strict exits non-zero for CI
4. --json for machine-readable tooling
```

**Interview tie-in:** "Careful local secret handling and validated config before execution — same discipline as insurance workflows where bad config can't reach prod."

---

## If resume says "SSE" but boson-dev doesn't

Your resume mentions SSE — **boson-dev README centers on local HTTP API + file watcher patterns**, not SSE as the main story.

**In interview, lead with what's in the repo:**
> "Boson is Rust + SQLite + React, YAML in Git, local binary."

If they ask SSE specifically:
> "I've explored real-time patterns in earlier iterations; the shipped product focuses on local API execution and a tight Rust/React loop. Happy to go deep on the current architecture on GitHub."

---

## Quick prep card

```
BOSON = boson-dev | YAML in git | Rust + SQLite | React UI | boson serve
CLI   = init, serve, run, lint, doctor, update
NOT   = Node backend, cloud SaaS, hosted workspace
PROOF = 6 releases, install.sh, MIT OSS
HARDEST = Rust vs Node bet for single-binary local-first product
ROLE TIE-IN = config-driven workflows, secrets discipline, validated before run
LINK  = https://github.com/yogthesharma/boson-dev
```
