# Project deep-dive: virtualized-react (npm)

**Role:** Author / maintainer | **Duration:** Jan 2025 (ongoing maintenance)  
**One-liner:** Zero-dependency React list virtualization library — 100 to 10,000+ items

---

## Tell me more about this project

> **virtualized-react** is an **open-source npm package** I built because I kept hitting list performance walls at IQM and Atlys — huge tables, scroll jank, heavy DOM.
>
> It **virtualizes lists** — only renders visible rows — with **dynamic item heights**, smart pre-fetching, zero runtime dependencies, and a **TypeScript-first** API.
>
> Published on npm; strangers use it and file issues — that's real accountability beyond employer work.

**Target time:** 30–45 sec

---

## What was your specific contribution vs the team's?

> **100% author** — design, implementation, docs, npm publish, issue triage. Open to community PRs.

---

## What was the architecture?

```
┌─────────────────────────────────────────────────────────┐
│  Consumer app imports <VirtualList />                   │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  virtualized-react library                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Scroll container — listens scroll/resize         │   │
│  │ Viewport calculator — start/end index            │   │
│  │ Height cache — dynamic measure + estimate        │   │
│  │ Render window — items + overscan buffer          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Core algorithms:**
- **Windowing** — `startIndex`, `endIndex` from scrollTop + item heights
- **Dynamic heights** — measure after mount, cache, estimate before measure
- **Overscan** — render few extra rows to reduce blank flash on fast scroll
- **Translate offset** — spacer div or transform for total scroll height

---

## Why did you choose that tech stack?

| Choice | Why |
|--------|-----|
| **Zero dependencies** | Small bundle; no version conflict hell for consumers |
| **TypeScript-first** | Consumers get types; internals safer |
| **React only** | My expertise; hooks for scroll listeners |
| **No canvas/WebGL** | DOM virtualization is good enough for 10k rows |

---

## What were the main tradeoffs?

| Tradeoff | Choice | Cost |
|----------|--------|------|
| **Dynamic vs fixed height** | Support dynamic | Complex measurement, scroll jump if estimate wrong |
| **Zero deps vs use react-window** | Build own | Reinvent wheel; full control |
| **Simple API vs max features** | Simple props | Power users want grid/table modes |
| **SSR support** | Limited / document honestly | Virtualization needs client measurements |

---

## What would you do differently if you rebuilt it today?

1. **Variable size cache** with binary search on prefix sums — O(log n) lookup
2. **React 19 / concurrent** — test with useDeferredValue for scroll
3. **Comprehensive benchmark suite** — publish comparison vs react-window
4. **Storybook** — visual docs for every prop
5. **Grid virtualization** — second component, separate scope

---

## How did you test it?

- **Unit tests** — index calculation, height cache logic (pure functions)
- **Manual** — 10k item stress scroll in demo app
- **Different row heights** — random heights torture test
- **Community** — user-reported edge cases become tests

---

## How did you deploy it?

> **npm publish** — semver, README, types bundled.
> **Demo site** — [customize if you have one]
> **GitHub** — issues, releases

---

## What broke in production?

**User issues = your production:**

| Issue | Fix |
|-------|-----|
| Scroll jump on dynamic measure | Better default height estimate |
| Wrong total height | Recalculate on item resize |
| Fast scroll blank gap | Increased overscan |
| React strict mode double mount | Guard measure effects |

> "Production" here means **breaking someone's app when they upgrade** — you feel semver pressure.

---

## How did you monitor / debug it?

- **GitHub issues** — repro steps from users
- **Local minimal repro** — CodeSandbox-style
- **npm download stats** — adoption signal

---

## What was the scale?

| Dimension | Scale |
|-----------|-------|
| **Lists** | Designed for **100 – 10,000+** items |
| **Users** | npm consumers — [customize download order of magnitude if known] |
| **Bundle** | Zero deps — small footprint |

---

## How long did it take to build?

> **Initial publish ~Jan 2025** — MVP in [customize: weeks], polish + docs ongoing.

---

## What was the business impact?

- **Employer impact:** Informed Core Web Vitals work at Atlys
- **Community:** Developers ship faster lists without heavy deps
- **Personal:** Credibility for **performance-focused** roles like Shubham's interests

---

## Who were the stakeholders?

> **Open-source users** — indirect stakeholders via issues and API stability.
> **Future employers** — portfolio signal.

---

## What was the hardest technical decision?

> **Dynamic item heights** vs ship fixed-height only.
>
> Fixed height = 80% easier, wrong for real UIs (variable content). Dynamic = measurement loops, scroll anchoring bugs.
>
> Chose dynamic because **that's why people need virtualization** — real tables aren't uniform.

---

## Legacy vs greenfield?

> **Greenfield library** — no legacy, but informed by **legacy pain** in employer codebases.

---

## Migrations / refactors?

> **Semver** — breaking prop changes → major bump; migration notes in CHANGELOG.

---

## Documentation?

- **README** — quick start, props table, examples
- **TypeScript types** — exported interfaces
- **Code comments** on non-obvious scroll math

---

## Show me / explain a specific feature

### How virtualization works (whiteboard-friendly)

```
Total items: 10,000
Viewport fits: ~15 rows

scrollTop = 2400px
item heights cached → binary scan or prefix sum
→ visible range items 120–135
→ render only 15 + overscan(3) = 21 DOM nodes
→ top padding = sum(heights[0..119])
→ bottom padding = sum(heights[136..9999])
→ user feels full list, browser happy
```

### Dynamic height measure

```
1. Render item with estimated height 40px
2. useLayoutEffect measure getBoundingClientRect
3. Update cache[itemId] = actualHeight
4. Recalculate total scroll height
5. Adjust scroll if anchor item shifted
```

---

## Quick prep card

```
virtualized-react = OSS npm | perf | dynamic heights | zero deps
WHY = real pain at IQM/Atlys → reusable solution
DEPTH = algorithms + API design + maintainer responsibility
SHUBHAM ANGLE = he cares about web performance — this is your proof
```
