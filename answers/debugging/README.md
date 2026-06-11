# Debugging & code review — **Complete**

All **9 exercises** are prepped. **Nothing left for you to implement** — skim talk tracks, optionally run broken vs fixed scripts.

Maps to `questions.md` § Debugging & code review (9/9) — **Done**

---

## 15-minute skim (before interview)

| # | Read this | Optional run |
|---|-----------|--------------|
| 01 | `01-whats-wrong-with-this-code.md` | `node 01-whats-wrong-broken.js` → then `solutions/01-whats-wrong-fixed.js` |
| 02 | `02-what-will-this-output.md` | `node 02-what-will-this-output.js` (answer: `1 4 3 2`) |
| 03 | `03-fix-race-condition.md` | broken → balance `1`; fixed → `2` |
| 04 | `04-fix-memory-leak.md` | `04-memory-leak-broken.js` vs `solutions/04-memory-leak-fixed.js` |
| 05 | `05-pr-sample.md` then `05-review-pr-feedback.md` | — |
| 06 | `06-slow-api-investigation.md` | — |
| 07 | `07-duplicate-records.md` | — |
| 08 | `08-intermittent-500.md` | — |
| 09 | `09-sluggish-react-component.md` | read `09-sluggish-react-broken.tsx` vs `solutions/09-sluggish-react-fixed.tsx` |

---

## File map

| # | Talk track | Broken / sample | Solution |
|---|------------|-----------------|----------|
| 01 | `.md` | `01-whats-wrong-broken.js` | `solutions/01-whats-wrong-fixed.js` |
| 02 | `.md` | `02-what-will-this-output.js` | answer in `.md` |
| 03 | `.md` | `03-race-condition-broken.js` | `solutions/03-race-condition-fixed.js` |
| 04 | `.md` | `04-memory-leak-broken.js` | `solutions/04-memory-leak-fixed.js` |
| 05 | `05-review-pr-feedback.md` | `05-pr-sample.md` | in talk track |
| 06–08 | `.md` only | — | talk tracks |
| 09 | `.md` | `09-sluggish-react-broken.tsx` | `solutions/09-sluggish-react-fixed.tsx` |

---

## Quick commands

```bash
cd answers/debugging
node 02-what-will-this-output.js
node 03-race-condition-broken.js && node solutions/03-race-condition-fixed.js
```

**Next prep section:** REST APIs + Node + Auth (backend bundle).
