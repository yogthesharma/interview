# Have you ever been on call or handled a production incident?

**Target time:** 30–60 seconds (be honest)

---

## Talk track (honest IC framing — not formal pager, but prod ownership)

> I haven't been on a formal **24/7 on-call rotation** with a pager — that wasn't how IQM or Atlys structured it for my role.
>
> But I've definitely **handled production issues** when things broke:
>
> At **IQM**, internal dashboards with wrong/stale data — I debugged, fixed the React async race, and communicated to stakeholders when users were blocked.
>
> At **Atlys**, **performance regressions** and API failures on visa flows — I'd jump in from Slack alerts or QA reports, trace frontend ↔ Fastify API, hotfix or roll back, and post a quick summary in the channel.
>
> On **personal projects**, I'm effectively always on call — prod is me.
>
> I'm comfortable with **incident mindset**: reproduce, mitigate first, root cause second, document. I'd ramp quickly on a formal on-call rotation on the team.

---

## If they ask "walk me through an incident"

Use the **stale closure / dashboard bug** from `15-hardest-bug.md`:

1. **Detect** — user reports / Slack
2. **Mitigate** — workaround or rollback if critical
3. **Diagnose** — reproduce, logs, narrow frontend vs API
4. **Fix** — PR, QA pass, deploy
5. **Follow-up** — React Query migration, better patterns for squad

---

## Avoid

- Pretending you had PagerDuty if you didn't
- "Never had prod issues" — unbelievable at 5 years
