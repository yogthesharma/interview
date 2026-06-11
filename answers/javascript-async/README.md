# JavaScript — async (questions.md § JavaScript — async)

Runnable `.js` demos + practice files. One topic per file — same pattern as `javascript/`.

## How to use

Work through in order. Each file is ~1–2 min to run and read.

```bash
node answers/javascript-async/01-promises.js
node answers/javascript-async/02-async-await.js
# ... etc.
```

Practice in the matching `*-practice.js` file — paste questions from chat, check in chat.

## File map

| # | Demo | Practice | Agenda | questions.md topics |
|---|------|----------|--------|---------------------|
| 01 | `01-promises.js` | `01-promises-practice.js` | Promise lifecycle, states, `.then/.catch` | How do Promises work? |
| 02 | `02-async-await.js` | `02-async-await-practice.js` | async/await vs `.then()`, missing await, return type, callback hell | async/await vs `.then()`, don't await, return type, callback hell |
| 03 | `03-async-errors.js` | `03-async-errors-practice.js` | try/catch, `.catch`, unhandled rejections | How do you handle errors in async code? |
| 04 | `04-promise-all-parallel.js` | `04-promise-all-parallel-practice.js` | `Promise.all`, parallel vs sequential, reject behavior | `Promise.all`, parallel ops, one reject fails all |
| 05 | `05-promise-allSettled-race.js` | `05-promise-allSettled-race-practice.js` | `allSettled`, `race`, `any` | `allSettled`, `race` |
| 06 | `06-retry-backoff.js` | `06-retry-backoff-practice.js` | Retry loop, exponential backoff | Retry failed API, exponential backoff |
| 07 | `07-race-abort.js` | `07-race-abort-practice.js` | Stale responses, `AbortController` | Race condition, cancel in-flight request |

**Progress:** 15 / 15 — Done

## Suggested order

1. **01–02** — foundations (Promises + async/await)
2. **03** — errors (do before combinators)
3. **04–05** — Promise combinators
4. **06–07** — production patterns (retry, race, abort)
