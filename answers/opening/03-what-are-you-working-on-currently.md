# What are you working on currently?

**Target time:** 30–45 seconds  
**Format:** Short, concrete, show you're still building

---

## Talk track

> Right now my main project is **Boson** — a **local-first, code-first API client** ([boson-dev on GitHub](https://github.com/yogthesharma/boson-dev)).
>
> The idea is your API collections live as **YAML in Git**, like code — not locked in a cloud workspace. I built a **Rust + SQLite** core that ships as a **single native binary** (`boson serve`) with an embedded **React/TypeScript UI** for editing and running requests locally. Secrets and history stay encrypted on disk — **no Boson cloud account**.
>
> Before Boson I shipped **Zyvia** — AI-assisted task management — so I've been in a stretch of **owning products end to end**: UI, runtime, CLI, and releases.

---

## If they ask follow-ups

| Follow-up | Angle |
|-----------|--------|
| Why Rust? | Single fast binary, SQLite/secrets control, stretch beyond Node comfort zone |
| Why YAML in Git? | Teams review API changes in PRs; config is source of truth |
| vs Postman? | No cloud lock-in, local-first, code-first for teams |
| Hardest part? | Rust core + embedded web build pipeline (`cargo` + `pnpm`) |

---

## Avoid

- Saying Node backend for Boson — it's **Rust**
- Leading with SSE — that's not the main story in boson-dev
- Over-explaining if they only wanted a one-liner
