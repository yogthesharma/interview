# How would you fix this race condition?

**Target time:** 45 seconds  
**Broken file:** `03-race-condition-broken.js`  
**Fixed:** `solutions/03-race-condition-fixed.js`

---

## The bug

**Read-modify-write race:** two `deposit()` calls both read `balance === 0`, both write `1` — lost update. Expected `2`, often get `1`.

Same class of bug as **lost UI updates**, **double-submit**, **stale fetch overwriting newer data**.

---

## Talk track

> Two async operations read the same state, await, then write — **last write wins**, one increment is lost.
>
> **Fixes depend on context:**
> - **Functional update / atomic op** — DB `UPDATE SET balance = balance + 1`  
> - **Serialization** — queue mutations  
> - **Optimistic locking** — version column  
> - **Frontend** — disable double submit, abort stale fetch, React Query cancellation
>
> For in-memory demo: **mutex/queue** or don't await between read and write in concurrent paths.

---

## Avoid

- "Just use a lock" without naming DB or UX mitigation
