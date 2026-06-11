/**
 * ASYNC ERROR HANDLING — Your practice workspace
 * ==============================================
 *
 * 1. Run: node answers/javascript-async/03-async-errors.js
 * 2. Answer each question below
 * 3. Reply in chat to check
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * How do you catch an error from `await fetchData()` inside an async function?
 */

// MY ANSWER:
// try { await fetchData(); } catch (e) { /* handle */ }

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * What happens if an async function throws and nobody catches it?
 */

// MY ANSWER:
// Returns a rejected Promise → unhandled promise rejection (logged/crash if never caught).

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * What gets logged?

async function test() {
  try {
    await Promise.reject(new Error("fail"));
  } catch (e) {
    console.log("A", e.message);
  }
}
test();
 */

// MY ANSWER:
// A fail  (console.log("A", e.message) — two args, message is lowercase "fail")

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * What gets logged?

Promise.resolve("ok")
  .then(() => { throw new Error("boom"); })
  .then((v) => console.log("then:", v))
  .catch((e) => console.log("catch:", e.message));
 */

// MY ANSWER:
// catch: boom

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * Does fetch("/api/user") throw if the server returns HTTP 404?
What should you do instead?
 */

// MY ANSWER:
// No — fetch only rejects on network failure. 404 still resolves.
// Check: if (!res.ok) throw new Error(`HTTP ${res.status}`); then parse JSON.

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION:
/**
 * What's the difference between these two?

// A
async function load() {
  try { return await fetchData(); }
  catch (e) { console.log(e); }
}

// B
function load() {
  return fetchData().catch((e) => console.log(e));
}
 */

// MY ANSWER:
// Same outcome if you only console.log (both swallow the error).
// Difference: A = async fn + try/catch + await (sync-style). B = Promise chain + .catch.
// A always returns Promise; B returns whatever .catch returns (undefined if only logging).

// =============================================================================
// QUESTION 7
// =============================================================================

// QUESTION:
/**
 * Promise.all([ok, fail, ok]) — one rejects. What happens?
 */

// MY ANSWER:
// Promise.all rejects immediately (fail-fast) with fail's error — you don't get the ok results.
// Use Promise.allSettled if you need partial results.

// =============================================================================
// QUESTION 8
// =============================================================================

// QUESTION:
/**
 * Where should you handle errors in a React app using React Query?
(name 2 places)
 */

// MY ANSWER:
// 1) queryFn — throw on !res.ok (404 becomes query error)
// 2) Per query: onError callback OR isError/error in component UI
// 3) Global: QueryClient defaultOptions.queries.onError

// =============================================================================
// CODING — error handling patterns
// =============================================================================

// CODE Q1 — fetchUser: reject if id is missing, else resolve user after 50ms

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error("Missing id"));
      return;
    }
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 50);
  });
}

// CODE Q2 — fetchJson(url): fetch + parse JSON, throw if !res.ok or parse fails

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// CODE Q3 — safeFetch(url): never throws — resolves { ok: true, data } or { ok: false, error }

async function safeFetch(url) {
  try {
    const data = await fetchJson(url);
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e.messagze };
  }
}

// -----------------------------------------------------------------------------
// Tests — uncomment when ready
// -----------------------------------------------------------------------------

async function runCodingTests() {
  await fetchUser(1).then((u) => console.log("Q1 ok:", u.name));
  await fetchUser(null).catch((e) => console.log("Q1 fail:", e.message));

  try {
    await fetchJson("https://httpbin.org/status/404");
  } catch (e) {
    console.log("Q2 404:", e.message);
  }

  const good = await safeFetch("https://httpbin.org/json");
  const bad = await safeFetch("https://httpbin.org/status/500");
  console.log("Q3 good:", good.ok);
  console.log("Q3 bad:", bad.ok, bad.error);
}
runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
