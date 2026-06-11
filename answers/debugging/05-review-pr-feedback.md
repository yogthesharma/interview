# Review this PR — what feedback would you give?

**Target time:** 60–90 seconds  
**Sample PR:** `05-pr-sample.md`

---

## Talk track (structured review)

> I'd leave **blockers** vs **nits** clearly:
>
> **Blockers:**
> - **SQL injection risk** — string concat query; use parameterized query / ORM  
> - **Password in API response** — never return `password` field  
> - **No input validation** — email format, required fields  
> - **Missing error handling** on DB failure — 500 with no log
>
> **Should fix:**
> - **No auth check** — any caller can create users?  
> - **Magic status string** — use enum/constant  
> - **No tests** for happy path + validation errors
>
> **Nits:**
> - Inconsistent naming, missing return type, add JSDoc on public route
>
> **Tone:** ask questions ("Should this be public?") not commands.

---

## Avoid

- Bike-shedding formatting only
- Approving with security issues
