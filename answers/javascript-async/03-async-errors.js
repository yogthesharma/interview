/**
 * ASYNC ERROR HANDLING — Demos only
 * ===================================
 *
 * Run:  node answers/javascript-async/03-async-errors.js
 *
 * Practice → 03-async-errors-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * await path:     try { await fn() } catch (e) { ... }
 * .then path:      fn().catch(e => ...)
 *
 * throw in async fn     → rejected Promise (same as reject)
 * throw in .then         → skips next .then, jumps to .catch
 *
 * fetch() on 404        → does NOT throw — check res.ok yourself
 *
 * No .catch / try/catch → unhandled promise rejection
 *
 * Promise.all + 1 fail  → whole thing rejects (fail-fast)
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function risky() {
  throw new Error("boom");
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  ASYNC ERROR HANDLING                              ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- 1. try/catch with await ---\n");

  try {
    await risky();
  } catch (e) {
    console.log("Caught:", e.message);
  }

  console.log(`
✅ Preferred inside async functions — reads like sync error handling.
`);

  console.log("--- 2. .catch on Promise chain ---\n");

  risky().catch((e) => console.log("Caught via .catch:", e.message));

  await wait(50);

  console.log(`
✅ Same as .then(null, onReject). Use at end of .then chains.
`);

  console.log("--- 3. throw in async fn = rejected Promise ---\n");

  async function load() {
    const res = await fetch("https://httpbin.org/status/404");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  try {
    await load();
  } catch (e) {
    console.log("HTTP error caught:", e.message);
  }

  console.log(`
✅ fetch resolves even on 404 — you must throw yourself if res.ok is false.
`);

  console.log("--- 4. throw in .then → .catch ---\n");

  Promise.resolve("ok")
    .then(() => {
      throw new Error("then threw");
    })
    .then(() => console.log("skipped"))
    .catch((e) => console.log("catch:", e.message));

  await wait(10);

  console.log(`
✅ throw inside .then rejects that Promise — next .then skipped.
`);

  console.log("--- 5. Unhandled rejection ---\n");

  console.log(`
  risky();  // no .catch, no try/catch → unhandled promise rejection

✅ Always handle at a boundary: route handler, React Query onError, .catch on chain.
`);

  console.log("--- 6. .catch can rethrow ---\n");

  risky()
    .catch((e) => {
      console.log("logged:", e.message);
      throw e; // or throw new Error("wrapped")
    })
    .catch((e) => console.log("outer catch:", e.message));

  await wait(10);

  console.log(`
✅ Log + rethrow to let a higher layer handle it too.
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 async + await       try/catch around await
 .then chain          .catch at end (or 2nd arg to .then)
 throw in async       → Promise.reject
 fetch 404            → no throw; check res.ok
 unhandled            → attach .catch or try/catch
 Promise.all fail     → first reject fails all

Practice: 03-async-errors-practice.js
`);
}

runDemo().catch(console.error);
