# How do you approach code reviews — giving and receiving?

**Target time:** 45–60 seconds

---

## Talk track

> Code review was a **big part of my day-to-day** at IQM and Atlys, even though I wasn't a formal lead.
>
> **When giving reviews**, I focus on:
> - **Correctness first** — edge cases, async bugs, null handling
> - **Maintainability** — can the next person change this safely? reusable vs one-off
> - **Consistency** — matches team patterns (TS types, React Query usage, API error shapes)
> - **Perf when it matters** — unnecessary re-renders, heavy deps in hot paths
>
> I try to **ask questions** instead of dictating: "What happens if this request fails?" — teaches more than "change this."
>
> **When receiving reviews**, I:
> - Don't take it personally — it's about the code
> - Push back **with reasoning** if I disagree, not ego
> - Thank people for catching bugs before prod — that's the whole point
>
> I wasn't the person **approving everyone's PRs by policy**, but teammates regularly requested my review on **React, TypeScript, and API integration** work because I'd helped set patterns during our TS migration.

---

## Example review comments (if they want specifics)

| Good comment | Why |
|--------------|-----|
| "Missing cleanup — if component unmounts, this fetch can set state on unmounted component" | Catches real bug |
| "Could we extract this to match the pattern in `XModule`?" | Consistency |
| "Nit: rename for clarity" | Separate nits from blockers |

---

## Tie to leadership-without-title

> Reviewing code was one way I **led without a lead title** — sharing standards, unblocking juniors, keeping quality high on the squad.

---

## Avoid

- "I only rubber-stamp" — sounds careless
- "I'm harsh" — sounds toxic
- Claiming you were official CODEOWNERS lead unless true
