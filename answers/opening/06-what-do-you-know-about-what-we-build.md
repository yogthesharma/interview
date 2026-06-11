# What do you know about what we build?

**Target time:** 30–45 seconds  
**Format:** Show you did homework — high level, humble on domain gaps

---

## Talk track

> The company is building technology to **modernize how insurance is bought and sold** — making it easier and more instant for carriers, agents, and end customers.
>
> On the engineering side, my understanding is you're building a **large event-driven platform** on AWS — lots of serverless services, DynamoDB, workflows around things like **applications, underwriting, and document generation** (PDFs, emails, reports). There's a strong **multi-tenant** angle since you serve multiple insurance clients on shared infrastructure.
>
> Your core product area includes **EOI — Evidence of Insurability** — the workflow where employees apply for voluntary group benefits through their employer, fill out health/lifestyle questions, and get an underwriting decision — often instantly via auto-adjudication. That integrates with benefits systems like Workday and bswift via SSO, with data pre-filled so users don't re-enter everything.
>
> You're also expanding into **group underwriting** — handling census files, bulk employer data, and scaling how carriers quote and enroll groups. Essentially enabling insurers to launch and scale digital products faster than legacy systems allow.
>
> I don't come from insurance, but the patterns feel familiar: **complex workflows, compliance-sensitive data, async processing, and UIs that have to be fast and trustworthy**. That's the kind of product engineering I want to do next.

---

## If they ask: "What is EOI?"

**One-liner (15 sec):**

> EOI stands for **Evidence of Insurability** — it's the process where someone applying for group insurance (usually through their employer) provides health and eligibility information so the carrier can approve, decline, or rate their coverage.

**Slightly longer (30 sec):**

> When an employee wants voluntary life or disability coverage at work, they often can't just click "buy" — the insurer needs to assess risk. EOI is that application workflow: collect health info, run underwriting rules, return a decision. The platform digitizes that — SSO from BenAdmin systems, pre-filled forms, instant decisions in many cases — instead of paper forms and manual back-and-forth.

---

## Domain cheat sheet

| Term | Meaning |
|------|---------|
| **EOI** | **Evidence of Insurability** — employee applies for group coverage; insurer checks if they're eligible and at what rate |
| **GI** | **Guaranteed Issue** — coverage approved without health questions, usually up to a limit |
| **Group underwriting** | Underwriting at employer/group level — census files, bulk data, group-level decisions |
| **Auto-adjudication** | Automated approve/deny using rules — no human underwriter for straightforward cases |
| **BenAdmin** | Benefits administration platform (bswift, Selerix, Workday, etc.) where employees manage benefits |
| **Carrier** | The insurance company that underwrites and issues the policy |
| **Census file** | Employer employee data file used for group quotes and enrollment |

### EOI flow (high level)

```
Employee → BenAdmin portal (Workday/bswift) → SSO → EOI app (pre-filled)
       → complete remaining questions → auto-adjudication / underwriting
       → decision synced back to BenAdmin + carrier
```

---

## Facts you can name-drop (if asked deeper)

| Area | What the product does (public / JD aligned) |
|------|----------------------------------------|
| Mission | Instant, modern insurance buying experience |
| Core product | EOI platform — digital Evidence of Insurability workflows |
| Integrations | SSO with Workday, bswift, Selerix; pre-filled applications |
| Expansion | Group underwriting — census parsing, ML-assisted underwriting |
| Stack signals | TypeScript, React, Node, AWS serverless, DynamoDB, EventBridge |
| Platform | Many microservices, CI/CD, logging/monitoring across services |
| Scale signals | [Fill in from your research — e.g. application volume, employer groups] |

---

## Avoid

- Claiming expert knowledge of underwriting rules or LIMRA standards
- Reciting their LinkedIn or blog verbatim
- "I don't know anything" — you do know the above
- Oversimplifying EOI as "just buying insurance" — it's the **eligibility / insurability** step
