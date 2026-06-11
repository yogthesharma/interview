/**
 * ALLSETTLED, RACE & ANY — Your practice workspace
 * =================================================
 *
 * 1. Run: node answers/javascript-async/05-promise-allSettled-race.js
 * 2. Answer each question below
 * 3. Reply in chat to check
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * When would you use Promise.allSettled instead of Promise.all?
One real example.
 */

// MY ANSWER:
// When i need to have the result of every promise i will use allsetteled as promise.all stops everuything after the first rejection

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * One-liner each:
- Promise.race
- Promise.any
 */

// MY ANSWER:
// Race: First Setteled Wins, Any: First Fulfiled wins

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * How would you implement a 5-second fetch timeout using Promise.race?
(Pseudocode is fine)
 */

// MY ANSWER:
// function fetchWithTimeout(url) {
//   const timeout = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Request timed out"));
//     }, 5000);
//   });

//   return Promise.race([fetch(url), timeout]);
// }

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * Promise.race([fetch(url), timeout(5000)]) — timeout rejects first.
What happens to the fetch Promise?
 */

// MY ANSWER:
// fetch may still complete fail consume bandwidth hit backend mutate server state i mean it can do anything but geting canceled because of promise.race

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * What does each item in Promise.allSettled result look like?
(fulfilled vs rejected shape)
 */

// MY ANSWER:
// {status, value}, {status, reason}

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION:
/**
 * 4 widget APIs on a dashboard. 1 fails, 3 succeed.
Promise.all or Promise.allSettled? Why?
 */

// MY ANSWER:
// promise.allSettled because we still wanna show what we get promise.all will reject everything

// =============================================================================
// QUESTION 7
// =============================================================================

// QUESTION:
/**
 * Promise.any([down, down, ok]) — which value wins?
Promise.any([down, down, down]) — what happens?
 */

// MY ANSWER:
// 1. first ok 2. rejection in promise

// =============================================================================
// QUESTION 8
// =============================================================================

// QUESTION:
/**
 * Quick pick — which combinator?

A) Need ALL results or fail entirely
B) Show whatever loaded, even if some failed
C) 5-second timeout on a fetch
D) First healthy server from 3 mirrors
 */

// MY ANSWER:
// A: all  B: allSetteled  C:race  D:any
//

// =============================================================================
// CODING
// =============================================================================

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function failAfter(ms, msg = "fail") {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(msg)), ms),
  );
}

function fetchWidget(name) {
  return delay(100, { name, data: `${name} data` });
}

// CODE Q1 — fetchWithTimeout(promise, ms): reject with Error("Timeout") if ms passes first

function fetchWithTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout Error Occured"));
    }, ms);
  });

  return Promise.race([promise, timeout]);
}

// CODE Q2 — loadWidgets(names): use allSettled, return { loaded, failed }

async function loadWidgets(names) {
  const results = await Promise.allSettled(
    names.map((name) => fetchWidget(name)),
  );

  const loaded = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const failed = results
    .filter((r) => r.status === "rejected")
    .map((r) => r.reason);

  return { loaded, failed };
}

// CODE Q3 — firstHealthy(servers): array of URLs/promises, return first fulfilled (Promise.any)

async function firstHealthy(servers) {
  return Promise.any(servers);
}

// -----------------------------------------------------------------------------
// Tests — uncomment when ready
// -----------------------------------------------------------------------------

// async function runCodingTests() {
//   await fetchWithTimeout(delay(50, "ok"), 200).then((v) => console.log("Q1 ok:", v));
//   await fetchWithTimeout(delay(300, "slow"), 100).catch((e) =>
//     console.log("Q1 timeout:", e.message)
//   );
//
//   const result = await loadWidgets(["a", "b", "c"]);
//   console.log("Q2 loaded:", result.loaded.length, "failed:", result.failed.length);
//
//   const winner = await firstHealthy([
//     failAfter(50, "down"),
//     delay(100, "backup"),
//   ]);
//   console.log("Q3:", winner);
// }
// runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
