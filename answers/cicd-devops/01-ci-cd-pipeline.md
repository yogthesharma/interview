# What does your CI/CD pipeline look like?

**Target time:** 30–45 seconds

---

## Talk track

> At **IQM** and **Atlys**, the pattern was pretty standard for a product squad:
>
> **PR opened** → CI runs on GitHub (or similar): install, lint, typecheck, unit tests, sometimes build.  
> **Review** → teammate approval, address comments.  
> **Merge to main** → deploy to **staging** automatically or on merge.  
> **Prod** → manual promote or scheduled release, depending on risk — often with a quick smoke check.
>
> I wasn't owning the pipeline config end-to-end, but I **relied on it every day** — if CI was red, I didn't merge. On Boson/Zyvia solo, my pipeline is lighter: lint + build on push, I deploy when green.
>
> For a platform at this scale with many services, I'd expect **per-service pipelines**, shared quality gates, and **environment promotion** staging → prod — same mental model, more services.

---

## Avoid

- Claiming you built the entire org's CI from scratch unless true
- No awareness of staging vs prod
