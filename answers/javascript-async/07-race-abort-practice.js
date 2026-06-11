/**
 * RACE CONDITIONS & ABORT — Your practice workspace
 * ===================================================
 *
 * 1. Run: node answers/javascript-async/07-race-abort.js
 * 2. Answer each question below
 *
 * Last async topic — finishes javascript-async/
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * Search: slow "react" response arrives after fast "react hooks".
UI shows stale "react" results.

What's this called, and one fix?
 */

// MY ANSWER:
// Race condition (stale/out-of-order response).
// Fix: AbortController — cancel previous fetch when query changes.
// Or: requestId guard — if (response.id !== latestId) return; (ignore stale, don't update UI)

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * How do you cancel fetch when user navigates away or search query changes?
Name the API + where you'd call abort in React.
 */

// MY ANSWER:
// AbortController + controller.signal on fetch(url, { signal: controller.signal })
// Call controller.abort() in useEffect cleanup when query changes or component unmounts:
// return () => controller.abort();

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * Does Promise.race cancel the losing fetch?
 */

// MY ANSWER:
// No — race only picks which result you await. The losing fetch still runs in the background.
// Use AbortController.abort() to actually cancel.

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * requestId guard vs AbortController — when would you use each?
 */

// MY ANSWER:
// requestId guard — ignore stale responses in UI; works for any async (simple search/autocomplete)
// AbortController — cancel in-flight fetch; saves bandwidth; use with fetch in React useEffect cleanup

// =============================================================================
// CODING
// =============================================================================

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// CODE Q1 — search(query): return { id, query } after 100ms
// Caller ignores result if id !== latestId

let searchRequestId = 0;

async function search(query) {
  const id = ++searchRequestId;
  await wait(100);
  return { id, query };
}

// Caller guard pattern:
// const result = await search(query);
// if (result.id !== searchRequestId) return; // stale — user typed again

// CODE Q2 — fetchWithAbort(url, signal): pass signal to fetch

function fetchWithAbort(url, signal) {
  return fetch(url, { signal });
}

// CODE Q3 — React-style pseudocode: abort previous fetch when query changes

// useEffect(() => {
//   const controller = new AbortController();
//   fetch(`/api/search?q=${query}`, { signal: controller.signal });
//   return () => controller.abort();
// }, [query]);

// MY ANSWER (fill in why cleanup runs):
// Cleanup runs when query changes (before the effect re-runs) or on unmount —
// abort the previous in-flight fetch so stale data can't update state.

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

async function runCodingTests() {
  const slow = search("react");
  await wait(10);
  const fast = search("react hooks");

  const fastResult = await fast;
  const slowResult = await slow;

  console.log("Q1 latest query:", fastResult.query);
  console.log(
    "Q1 stale slow ignored?",
    slowResult.id !== searchRequestId ? "yes" : "no"
  );

  const controller = new AbortController();
  fetchWithAbort("https://httpbin.org/delay/2", controller.signal).catch(
    (e) => console.log("Q2 aborted:", e.name)
  );
  controller.abort();
  await wait(50);
}

runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
