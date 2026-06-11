/**
 * ASYNC / AWAIT — Demos only
 * ==========================
 *
 * Run:  node answers/javascript-async/02-async-await.js
 *
 * Practice → 02-async-await-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 20 SECONDS
 * ---------------------------------------------------------------------------
 *
 * async fn always returns Promise<T>
 * await pauses until Promise settles (inside async fn only)
 *
 * Same as .then() chains — but reads top-to-bottom
 * Forgot await? → you get the Promise object, not the value
 *
 * Callback hell → Promises → async/await (flatten nesting)
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function fetchUser(id) {
  return wait(100, { id, name: `User ${id}` });
}

function fetchOrders(userId) {
  return wait(100, [{ id: 1, userId }]);
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  ASYNC / AWAIT                                     ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- .then() vs async/await (same logic) ---\n");

  fetchUser(1)
    .then((u) => fetchOrders(u.id))
    .then((o) => console.log(".then orders:", o.length));

  await wait(250);

  async function loadOrders(userId) {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(user.id);
    return orders;
  }

  const orders = await loadOrders(2);
  console.log("async/await orders:", orders.length);

  console.log(`
✅ await pros: linear code, try/catch for errors
   .then pros: one-liners, no async wrapper needed
`);

  console.log("--- Missing await ---\n");

  async function getName() {
    return "Yog";
  }

  console.log("No await:", getName());
  console.log("With await:", await getName());

  console.log(`
✅ async fn() without await → Promise { value }, not the value itself
`);

  console.log("--- async return type ---\n");

  async function returnsNumber() {
    return 42;
  }

  console.log("returnsNumber():", returnsNumber());
  console.log("await returnsNumber():", await returnsNumber());

  console.log(`
✅ return 42 inside async → Promise.resolve(42)
   throw err              → Promise.reject(err)
`);

  console.log("--- Avoid callback hell ---\n");
  console.log(`
  Callback:  getUser(id, (u) => getOrders(u.id, (o) => save(o, cb)))
  Promise:   getUser(id).then(u => getOrders(u.id)).then(save)
  async:     const u = await getUser(id); await save(await getOrders(u.id))
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 async fn       always returns Promise<T>
 await          only inside async fn (or top-level module)
 missing await  bug — you hold Promise, not value
 callback hell  fix with .then chains or async/await

Practice: 02-async-await-practice.js
`);
}

runDemo().catch(console.error);
