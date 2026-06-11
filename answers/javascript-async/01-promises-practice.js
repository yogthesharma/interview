/**
 * PROMISES — Your practice workspace
 * ==================================
 *
 * 1. Run: node answers/javascript-async/01-promises.js
 * 2. Answer each question below
 * 3. Reply in chat to check
 *
 * Topics: creation · states · .then / .catch / .finally · chaining
 */

// =============================================================================
// QUESTION 1 — STATES
// =============================================================================

// QUESTION:
/**
 * What are the three states of a Promise?
 * Can a fulfilled Promise go back to pending?
 */

// MY ANSWER:
// pending, fulfilled, rejected. No — once fulfilled (or rejected) the state is locked forever.

// =============================================================================
// QUESTION 2 — CREATION
// =============================================================================

// QUESTION:
/**
 * Does the executor function inside new Promise((resolve, reject) => { ... })
 * run immediately or later?
 */

// MY ANSWER:
// Immediately (synchronously) — runs the moment new Promise(...) is called.
// .then callbacks go to the microtask queue, NOT the executor.

// =============================================================================
// QUESTION 3 — CREATION
// =============================================================================

// QUESTION:
/**
 * What is the difference between these two?

const a = Promise.resolve(42);
const b = new Promise((resolve) => resolve(42));
 */

// MY ANSWER:
// Both will create a resolved promise value with number 42 its just first one is kinda a shortcut and second one uses a constructor

// =============================================================================
// QUESTION 4 — STATES / RULES
// =============================================================================

// QUESTION:
/**
 * Inside one Promise executor you call:
   resolve("first");
   resolve("second");

What value does .then receive?
 */

// MY ANSWER:
// "first" — first resolve/reject wins; resolve("second") is ignored.

// =============================================================================
// QUESTION 5 — LOG ORDER
// =============================================================================

// QUESTION:
/**
 * What gets logged, in order?

const p = new Promise((resolve) => {
  console.log("A");
  resolve(1);
});
console.log("B");
p.then(() => console.log("C"));
console.log("D");
 */

// MY ANSWER:
// A B D C

// =============================================================================
// QUESTION 6 — UTILIZATION
// =============================================================================

// QUESTION:
/**
 * What does .then(fn) return?
 */

// MY ANSWER:
// It will return a new promise

// =============================================================================
// QUESTION 7 — CHAINING
// =============================================================================

// QUESTION:
/**
 * What gets logged?

Promise.resolve(2)
  .then((n) => n + 3)
  .then((n) => n * 2)
  .then((n) => console.log(n));
 */

// MY ANSWER:
// 10

// =============================================================================
// QUESTION 8 — CHAINING + PROMISE RETURN
// =============================================================================

// QUESTION:
/**
 * .then returns a Promise that resolves to 5.
The next .then receives — 5 or a Promise?

Promise.resolve(1)
  .then(() => Promise.resolve(5))
  .then((n) => console.log(n));
 */

// MY ANSWER:
// 5 — next .then receives the unwrapped value, not the Promise (auto-flatten).

// =============================================================================
// QUESTION 9 — REJECT / CATCH
// =============================================================================

// QUESTION:
/**
 * What gets logged?

Promise.reject(new Error("fail"))
  .then((v) => console.log("then:", v))
  .catch((e) => console.log("catch:", e.message));
 */

// MY ANSWER:
// catch: fail  (.then is skipped on reject)

// =============================================================================
// QUESTION 10 — THROW IN .then
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
// catch: boom  (middle .then skipped; throw in .then rejects the chain)

// =============================================================================
// QUESTION 11 — .finally
// =============================================================================

// QUESTION:
/**
 * Does .finally run on both fulfill and reject?
Can you return a new value from .finally to change the chain result?
 */

// MY ANSWER:
// Yes on both paths. No — .finally can't change the passed-through value (throw can reject).

// =============================================================================
// QUESTION 12 — EXECUTOR THROWS
// =============================================================================

// QUESTION:
/**
 * What happens if the executor throws synchronously (before calling resolve)?

new Promise(() => {
  throw new Error("sync error");
});
 */

// MY ANSWER:
// Promise is rejected (same as calling reject(err)). Only handled if you attach .catch;
// otherwise → unhandled promise rejection.

// =============================================================================
// CODING — write the Promise code yourself
// =============================================================================
// Run your answers: node answers/javascript-async/01-promises-practice.js
// (uncomment runCodingTests() at the bottom when ready)

// -----------------------------------------------------------------------------
// CODE Q1 — Basic creation
// -----------------------------------------------------------------------------
// Write a function `delay(ms)` that returns a Promise resolving after `ms` milliseconds.

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

// -----------------------------------------------------------------------------
// CODE Q2 — Resolve with a value
// -----------------------------------------------------------------------------
// Write `fetchUser(id)` — returns a Promise that resolves after 100ms with:
//   { id, name: `User ${id}` }
// Use delay from Q1 or setTimeout inside new Promise.

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 100);
  });
}

// -----------------------------------------------------------------------------
// CODE Q3 — Reject on bad input
// -----------------------------------------------------------------------------
// Write `parseJson(str)` — returns a Promise that:
//   - resolves with parsed JSON if valid
//   - rejects with Error("Invalid JSON") if JSON.parse throws

function parseJson(str) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(str));
    } catch {
      reject(new Error("Invalid JSON"));
    }
  });
}

// -----------------------------------------------------------------------------
// CODE Q4 — Chain with .then
// -----------------------------------------------------------------------------
// Write `getUserName(id)` — uses fetchUser(id), then returns the user's name string.
// Must use .then (no async/await).

function getUserName(id) {
  return fetchUser(id).then((user) => user.name);
}

// -----------------------------------------------------------------------------
// CODE Q5 — Sequential chain
// -----------------------------------------------------------------------------
// Given fetchUser(id) from Q2, write `getUserWithOrders(id)` that:
//   1. fetches user
//   2. then fetches orders (fake: wait 100ms, resolve [{ orderId: 1, userId: id }])
//   3. returns { user, orders }
// Use .then chain only.

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ orderId: 1, userId }]), 100);
  });
}

function getUserWithOrders(id) {
  return fetchUser(id).then((user) =>
    fetchOrders(user.id).then((orders) => ({ user, orders }))
  );
}

// -----------------------------------------------------------------------------
// CODE Q6 — Promise.all
// -----------------------------------------------------------------------------
// Write `fetchAllUsers(ids)` — array of ids → Promise resolving to array of users.
// Fetch all in parallel using Promise.all + fetchUser.

function fetchAllUsers(ids) {
  return Promise.all(ids.map((id) => fetchUser(id)));
}

// -----------------------------------------------------------------------------
// CODE Q7 — Error handling
// -----------------------------------------------------------------------------
// Write `safeParseJson(str)` — like parseJson but never rejects.
// Returns Promise resolving to { ok: true, data } or { ok: false, error: message }

function safeParseJson(str) {
  return parseJson(str)
    .then((data) => ({ ok: true, data }))
    .catch((e) => ({ ok: false, error: e.message }));
}

// -----------------------------------------------------------------------------
// CODE Q8 — Timeout wrapper
// -----------------------------------------------------------------------------
// Write `withTimeout(promise, ms)` — resolves/rejects with same result as `promise`,
// but rejects with Error("Timeout") if `ms` passes first.
// Hint: Promise.race

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), ms);
  });
  return Promise.race([promise, timeout]);
}

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

async function runCodingTests() {
  console.log("Q1 delay:", await delay(50).then(() => "done"));

  const user = await fetchUser(1);
  console.log("Q2 fetchUser:", user);

  await parseJson('{"a":1}').then((v) => console.log("Q3 valid:", v));
  await parseJson("not json").catch((e) => console.log("Q3 invalid:", e.message));

  const name = await getUserName(2);
  console.log("Q4 getUserName:", name);

  const bundle = await getUserWithOrders(3);
  console.log("Q5 getUserWithOrders:", bundle.user.name, bundle.orders.length);

  const users = await fetchAllUsers([1, 2, 3]);
  console.log("Q6 fetchAllUsers:", users.map((u) => u.name));

  console.log("Q7 safe ok:", await safeParseJson('{"x":1}'));
  console.log("Q7 safe bad:", await safeParseJson("{"));

  await withTimeout(delay(50), 200).then(() => console.log("Q8 timeout: ok"));
  await withTimeout(delay(300), 100).catch((e) => console.log("Q8 timeout:", e.message));
}

runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
