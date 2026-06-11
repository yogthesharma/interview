# What's the hardest bug you've ever fixed?

**Target time:** 60–90 seconds

---

## Talk track (React stale closure at IQM — primary)

> **Situation:** At **IQM**, users reported **intermittent wrong data** on an internal dashboard — stale filters after fast navigation. Hard because it **didn't reproduce consistently**.
>
> **Investigation:** API logs looked fine. Reproduced with fast route changes. **Stale closure in `useEffect` + async fetch race** — older request resolving after newer one; missing effect deps.
>
> **Fix:** Cleanup on unmount, abort/ignore stale responses, later **React Query** for cache consistency.
>
> **Why hard:** Looked like backend; felt random; classic async UI bug.

---

## Alternative: Boson (if they want current project)

| Bug | Angle |
|-----|--------|
| **YAML schema edge case** | Invalid include glob — `boson lint` now surfaces file path |
| **Secret interpolation** | `{{secret:X}}` missing — fail before run with clear UI warning |
| **Port / permissions** | `boson doctor` actionable fixes |

> Use IQM for **depth**; Boson for **"what broke on your project"** if they point at resume.

---

## Avoid

- SSE disconnect story — not boson-dev's main narrative unless you actually hit it there
