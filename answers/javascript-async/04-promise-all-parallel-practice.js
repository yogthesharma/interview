/**
 * PROMISE.ALL & PARALLEL — Your practice workspace
 * ===============================================
 *
 * 1. Run: node answers/javascript-async/04-promise-all-parallel.js
 * 2. Answer each question below
 * 3. Reply in chat to check
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * Profile + orders from two independent APIs — which is faster?

A) await getProfile(); await getOrders();
B) await Promise.all([getProfile(), getOrders()]);
 */

// MY ANSWER:
// Using the Promise.all if the promise calls are independent of each other

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * Promise.all([p1, p2, p3]) — p2 rejects. What happens to Promise.all?
Do you get p1 and p3's values?
 */

// MY ANSWER:
// It will cancel all the fulfiled promises even if one promise fails and we need to catch the rejected promise to avoid unhandled promise rejection problem

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * When would you use Promise.all in a real app? One example.
 */

// MY ANSWER:
// I mean suppose some user listing and filter listing both are independent on the first load so wanna use at that place

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * load user, then load orders for that user.id — parallel or sequential?
Why?
 */

// MY ANSWER:
// That is sequential as it is doing one after another

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * Promise.all([fetch(1), fetch(2), fetch(3)]) — result array order matches input?
 */

// MY ANSWER:
// Yes the result array matches input thats why we're able to array destructure it

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION:
/**
 * What does await Promise.all([]) resolve to?
 */

// MY ANSWER:
// Empty Array

// =============================================================================
// QUESTION 7
// =============================================================================

// QUESTION:
/**
 * Three API calls each take 100ms. Roughly how long:

A) await a(); await b(); await c();
B) await Promise.all([a(), b(), c()]);
 */

// MY ANSWER:
// A) 300 MS B) 100MS

// =============================================================================
// QUESTION 8
// =============================================================================

// QUESTION:
/**
 * One widget API fails on a dashboard with 4 widgets.
You still want to show the 3 that worked. Promise.all or something else?
 */

// MY ANSWER:
// Something else we haven't learnt it but Promise.allSettled will do the work

// =============================================================================
// CODING — parallel vs sequential
// =============================================================================

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function fetchUser(id) {
  return delay(100, { id, name: `User ${id}` });
}

function fetchOrders(userId) {
  return delay(100, [{ orderId: 1, userId }]);
}

// CODE Q1 — fetchAllUsers(ids): parallel fetch, return array of users

function fetchAllUsers(ids) {
  return Promise.all(ids.map((id) => fetchUser(id)));
}

// CODE Q2 — loadDashboard(): fetch stats, notifications, activity in parallel
// fake: delay(100) each, return { stats, notifications, activity }

async function loadDashboard() {
  const [stats, notifications, activity] = await Promise.all([
    delay(100, { visits: 100 }), // fake stats API
    delay(100, [{ id: 1, text: "hi" }]), // fake notifications API
    delay(100, [{ id: 1, action: "login" }]), // fake activity API
  ]);
  return { stats, notifications, activity };
}

// CODE Q3 — loadUserPage(userId): MUST be sequential — user first, then orders(user.id)

async function loadUserPage(userId) {
  const user = await fetchUser(userId);
  const orders = await fetchOrders(user.id);

  return { user, orders };
}

// -----------------------------------------------------------------------------
// Tests — uncomment when ready
// -----------------------------------------------------------------------------

// async function runCodingTests() {
//   const users = await fetchAllUsers([1, 2, 3]);
//   console.log("Q1:", users.map((u) => u.name));
//
//   const dash = await loadDashboard();
//   console.log("Q2 keys:", Object.keys(dash));
//
//   const page = await loadUserPage(1);
//   console.log("Q3:", page.user.name, page.orders.length);
//
//   const t0 = Date.now();
//   await fetchUser(1);
//   await fetchUser(2);
//   await fetchUser(3);
//   console.log("sequential ms:", Date.now() - t0);
//
//   const t1 = Date.now();
//   await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
//   console.log("parallel ms:", Date.now() - t1);
// }
// runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
