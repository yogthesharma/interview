/**
 * PROMISE.ALL & PARALLEL — Demos only
 * ====================================
 *
 * Run:  node answers/javascript-async/04-promise-all-parallel.js
 *
 * Practice → 04-promise-all-parallel-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 20 SECONDS
 * ---------------------------------------------------------------------------
 *
 * Promise.all([a, b, c]) — run in parallel, wait for ALL
 * One reject → entire Promise.all rejects (fail-fast)
 *
 * Independent calls → Promise.all
 * B needs A's result   → await A; await B (sequential)
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function failAfter(ms, err = new Error("fail")) {
  return new Promise((_, reject) => setTimeout(() => reject(err), ms));
}

function fetchUser(id) {
  return wait(100, { id, name: `User ${id}` });
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  PROMISE.ALL & PARALLEL                            ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- Promise.all — all succeed ---\n");

  const [u1, u2, u3] = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3),
  ]);
  console.log("Users:", u1.name, u2.name, u3.name);

  console.log("--- One rejects → all fails ---\n");

  try {
    await Promise.all([fetchUser(1), failAfter(50), fetchUser(2)]);
  } catch (e) {
    console.log("Promise.all rejected:", e.message);
  }

  console.log(`
✅ p1 and p3 may still finish in background, but Promise.all already rejected.
   You don't get their values — catch the error instead.
`);

  console.log("--- Parallel vs sequential ---\n");

  const t0 = Date.now();
  await fetchUser(1);
  await fetchUser(2);
  await fetchUser(3);
  console.log("Sequential ~300ms:", Date.now() - t0, "ms");

  const t1 = Date.now();
  await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
  console.log("Parallel ~100ms:", Date.now() - t1, "ms");

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Promise.all       all results OR first reject fails all
 Use when          need every result (dashboard widgets)
 Parallel          Promise.all([getProfile(), getOrders()])
 Sequential        await getUser(); await getOrders(user.id)

Practice: 04-promise-all-parallel-practice.js
`);
}

runDemo().catch(console.error);
