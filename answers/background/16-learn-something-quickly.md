# Tell me about a time you had to learn something new quickly.

**Target time:** 60 seconds (STAR)

---

## Talk track (Rust for Boson — accurate + impressive)

> **Situation:** Building **Boson**, I wanted a **local-first API client** that ships as a **single native binary** with SQLite, encrypted secrets, and no cloud dependency. Node/Electron didn't match the product shape I wanted.
>
> **Challenge:** I was strong in **React/TypeScript/Node**, but the **Rust** ecosystem — ownership, async HTTP, embedding a web UI, `cargo` + `pnpm` build pipeline — was largely new for production use.
>
> **What I did:**
> - Scoped an **MVP loop** first: load YAML → execute HTTP → return JSON to UI
> - Spiked **Rust HTTP server + SQLite** before polishing CLI
> - Kept UI in **React** where I'm fast; only moved core execution to Rust
> - Shipped **`boson doctor`** early so setup failures were debuggable
>
> **Result:** Shipped **6 GitHub releases**, install script, MIT OSS — [boson-dev](https://github.com/yogthesharma/boson-dev). `boson serve` runs embedded UI + API from one binary.
>
> **Learning:** I learn fastest by **narrow vertical slice**, not reading Rust for months. Same approach as **TypeScript migration** and **React Query** at IQM.

---

## Alternative stories

- **AI intent parsing on Zyvia** — LLM + structured output in weeks
- **React Query at IQM** — learned and rolled out to squad
- **TypeScript migration pilot** — prove value in one module fast

---

## Avoid

- SSE/Rust confusion — old Boson prototype had different architecture
- "I mastered Rust" — say **shipped product in Rust**, still growing depth
