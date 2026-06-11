/**
 * ASYNC / AWAIT — Your practice workspace
 * =======================================
 *
 * 1. Run: node answers/javascript-async/02-async-await.js
 * 2. Answer each question below
 * 3. Reply in chat to check
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * What gets logged?

async function foo() {
  return 1;
}
console.log(foo());
 */

// MY ANSWER:
// Promise { 1 }

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * What gets logged (in order)?

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
 */

// MY ANSWER:
// A D C B

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * Name one pro of async/await over .then() chains.
Name one pro of .then() over async/await.
 */

// MY ANSWER:
// Reads top-to-bottom like sync code; try/catch works naturally

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * What is the return type of this function?

async function getCount() {
  return 42;
}
 */

// MY ANSWER:
// Primise<number>

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * What gets logged?

async function test() {
  const result = getCount();  // getCount is async, returns 42
  console.log(result);
}
async function getCount() { return 42; }
test();
 */

// MY ANSWER:
// Primise { 42 }

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION:
/**
 * Rewrite using async/await (no .then):

function load() {
  return fetchUser(1)
    .then((user) => fetchOrders(user.id))
    .then((orders) => orders.length);
}
 */

// MY ANSWER:
// async function load() {
//  const user = await fetchUser(1);
// const orders = await fetchOrders(user.id);
// return orders.length
// }

// =============================================================================
// QUESTION 7
// =============================================================================

// QUESTION:
/**
 * Can you use await at the top level of a normal .js file (no async wrapper)?
When does top-level await work?
 */

// MY ANSWER:
// Yes but in ES modules

// =============================================================================
// QUESTION 8
// =============================================================================

// QUESTION:
/**
 * What's wrong here?

function saveData() {
  await fetch("/api/save", { method: "POST" });
}
 */

// MY ANSWER:
// No async added over parent function

// =============================================================================
// CODING — rewrite with async/await
// =============================================================================

function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

function fetchUser(id) {
  return delay(100).then(() => ({ id, name: `User ${id}` }));
}

function fetchOrders(userId) {
  return delay(100).then(() => [{ orderId: 1, userId }]);
}

// CODE Q1 — Rewrite getUserName using async/await (Q4 from promises used .then)

async function getUserNameAsync(id) {
  const userName = (await fetchUser(id)).name;
  return userName;
}

// CODE Q2 — Rewrite getUserWithOrders using async/await

async function getUserWithOrdersAsync(id) {
  const user = await fetchUser(id);
  const withOrder = Boolean(await fetchOrders(user.id));
  return { user, orders };
}

// CODE Q3 — Sequential vs parallel: which is faster? Implement the faster one.

async function loadProfileAndOrders(userId) {
  const [user, order] = await Promise.all([
    fetchOrders(userId),
    fetchUser(userId),
  ]);
  return { user, order };
}

// -----------------------------------------------------------------------------
// Tests — uncomment when ready
// -----------------------------------------------------------------------------

// async function runCodingTests() {
//   console.log("CODE Q1:", await getUserNameAsync(2));
//   const bundle = await getUserWithOrdersAsync(1);
//   console.log("CODE Q2:", bundle.user.name, bundle.orders.length);
//   const start = Date.now();
//   await loadProfileAndOrders(1);
//   console.log("CODE Q3 ~parallel ms:", Date.now() - start);
// }
// runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
