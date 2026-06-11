/**
 * ALLSETTLED, RACE & ANY — Demos only
 * ====================================
 *
 * Run:  node answers/javascript-async/05-promise-allSettled-race.js
 *
 * Practice → 05-promise-allSettled-race-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 20 SECONDS
 * ---------------------------------------------------------------------------
 *
 * allSettled — wait for ALL, get { status, value/reason } each (partial OK)
 * race       — first SETTLED wins (fulfill OR reject)
 * any        — first FULFILLED wins (ignores rejects until all fail)
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
║  ALLSETTLED, RACE & ANY                            ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- Promise.allSettled ---\n");

  const settled = await Promise.allSettled([
    fetchUser(1),
    failAfter(50),
    fetchUser(2),
  ]);

  settled.forEach((r, i) => {
    console.log(r);
    const detail = r.status === "fulfilled" ? r.value.name : r.reason.message;
    console.log(`  [${i}] ${r.status}:`, detail);
  });

  console.log(`
✅ Use when partial success is fine — e.g. 5 widgets, show what loaded.
`);

  console.log("--- Promise.race ---\n");

  const winner = await Promise.race([wait(200, "slow"), wait(50, "fast")]);
  console.log("Race winner:", winner);

  console.log(`
✅ Timeout pattern: Promise.race([fetch(url), timeout(5000)])
   First reject also wins the race.
`);

  console.log("--- Promise.any ---\n");

  try {
    const firstOk = await Promise.any([
      failAfter(50, new Error("down")),
      wait(100, "backup server"),
    ]);
    console.log("Any winner:", firstOk);
  } catch (e) {
    console.log("All failed:", e.message);
  }

  console.log(`
✅ any = first success. race = first settled (success OR failure).
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 allSettled   all done, per-item status (partial OK)
 race         first settled (timeout / fastest response)
 any          first fulfilled (fastest healthy server)

Practice: 05-promise-allSettled-race-practice.js
`);
}

runDemo().catch(console.error);
