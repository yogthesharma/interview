/**
 * PROMISES — Demos only
 * =====================
 *
 * Run:  node answers/javascript-async/01-promises.js
 *
 * Practice → 01-promises-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * Promise = ticket for a future value.
 *
 * CREATION
 *   new Promise((resolve, reject) => { ... })  — executor runs IMMEDIATELY
 *   Promise.resolve(value)  — already fulfilled
 *   Promise.reject(error)   — already rejected
 *
 * STATES (one-way — never go back)
 *   pending → fulfilled (value)  OR  rejected (error)
 *
 * UTILIZATION
 *   .then(onFulfilled, onRejected?)  — returns NEW Promise
 *   .catch(onRejected)                — same as .then(null, onRejected)
 *   .finally(onFinally)               — runs on fulfill OR reject
 *
 * RULES
 *   First resolve/reject wins — later calls ignored
 *   .then return value → next .then receives it
 *   .then return Promise → next .then waits for it (flat chain)
 *   Throw in .then → rejected Promise → .catch catches it
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  PROMISES — creation, states, utilization          ║
╚════════════════════════════════════════════════════╝
`);

  // -------------------------------------------------------------------------
  // Creation
  // -------------------------------------------------------------------------
  console.log("--- 1. Creation — executor runs immediately ---\n");

  console.log("Before new Promise");
  const p = new Promise((resolve) => {
    console.log("  Inside executor (sync!)");
    setTimeout(() => resolve("done!"), 50);
  });
  console.log("After new Promise:", p);

  console.log("Await result:", await p);

  console.log(`
✅ Executor is sync. Promise starts pending until resolve/reject fires.
`);

  console.log("--- 2. Promise.resolve / Promise.reject ---\n");

  const alreadyOk = Promise.resolve(42);
  const alreadyBad = Promise.reject(new Error("nope"));

  console.log("Promise.resolve(42) →", await alreadyOk);
  alreadyBad.catch((e) => console.log("Promise.reject →", e.message));

  await wait(10);

  console.log(`
✅ Shorthand for "already settled" Promises. Same as new Promise(r => r(42)).
`);

  // -------------------------------------------------------------------------
  // States
  // -------------------------------------------------------------------------
  console.log("--- 3. States — pending → fulfilled OR rejected (one-way) ---\n");

  const pending = wait(50, "ok");
  console.log("While waiting:", pending);

  const settled = await pending;
  console.log("After await:", settled, "(Promise is fulfilled — can't go back to pending)");

  console.log(`
✅ Once fulfilled or rejected, state is locked forever.
`);

  console.log("--- 4. First resolve/reject wins ---\n");

  const locked = new Promise((resolve) => {
    resolve("first");
    resolve("second"); // ignored
  });
  console.log("Double resolve →", await locked);

  // -------------------------------------------------------------------------
  // Utilization — .then / .catch / .finally
  // -------------------------------------------------------------------------
  console.log("--- 5. .then returns a NEW Promise ---\n");

  const chain = Promise.resolve(1)
    .then((n) => n + 1)
    .then((n) => n * 2);

  console.log("1 → +1 → *2 =", await chain);

  console.log(`
✅ Each .then returns a Promise. Return a value → next .then gets it.
   Return a Promise → chain waits (auto-flatten).
`);

  console.log("--- 6. Returning a Promise from .then (flat chain) ---\n");

  const flat = Promise.resolve(1)
    .then((n) => wait(50, n + 9))
    .then((n) => console.log("Flattened:", n));

  await flat;
  await wait(10);

  console.log(`
✅ wait(50, 10) returns Promise — chain unwraps it, next .then gets 10.
`);

  console.log("--- 7. Reject path — .catch ---\n");

  Promise.reject(new Error("fail"))
    .then((v) => console.log("skipped:", v))
    .catch((e) => console.log("Caught:", e.message));

  await wait(10);

  console.log(`
✅ .catch skips fulfilled .then handlers. Same as .then(null, onReject).
`);

  console.log("--- 8. Throw inside .then → rejection ---\n");

  Promise.resolve("ok")
    .then(() => {
      throw new Error("boom");
    })
    .catch((e) => console.log("Throw caught:", e.message));

  await wait(10);

  console.log("--- 9. .finally — runs either way ---\n");

  Promise.resolve("done")
    .finally(() => console.log("finally on fulfill"))
    .then((v) => console.log("value:", v));

  Promise.reject(new Error("x"))
    .finally(() => console.log("finally on reject"))
    .catch(() => {});

  await wait(10);

  console.log(`
✅ Use .finally for cleanup (hide spinner) — can't change the result.
`);

  console.log("--- 10. Log order (sync vs microtask) ---\n");

  console.log("A");
  Promise.resolve().then(() => console.log("C"));
  console.log("B");

  await wait(10);

  console.log(`
✅ Sync first (A, B). Promise callbacks = microtasks (C runs after sync).
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 CREATE     new Promise(executor) | Promise.resolve | Promise.reject
 EXECUTOR   runs immediately (sync)
 STATES     pending → fulfilled | rejected  (one-way)

 .then       on fulfill; returns new Promise
 .catch      on reject
 .finally    always runs; can't change result

 CHAIN      return value → passes to next .then
            return Promise → auto-flatten
            throw → .catch

 RULES      first resolve/reject wins
            sync code before .then callbacks

Practice: 01-promises-practice.js
`);
}

runDemo().catch(console.error);
