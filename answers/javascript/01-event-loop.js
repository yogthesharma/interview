/**
 * EVENT LOOP — Demos only
 * =======================
 *
 * Run:  node 01-event-loop.js
 *
 * Practice quiz → see 01-event-loop-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * JavaScript runs ONE line at a time (single thread).
 *
 * When code finishes, the engine checks TWO waiting lines:
 *
 *   1. MICROTASK line  (Promises, await)     ← goes FIRST
 *   2. MACROTASK line  (setTimeout, clicks)  ← goes SECOND
 *
 * Sync code always runs before both.
 *
 *   Order:  SYNC  →  PROMISES  →  setTimeout
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runSimpleDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  EVENT LOOP — watch the numbers in order           ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- Example 1: The basic rule ---\n");

  console.log("① sync");
  setTimeout(() => console.log("④ setTimeout"), 0);
  Promise.resolve().then(() => console.log("③ Promise"));
  console.log("② sync");

  await wait(50);

  console.log(`
✅ You should see:  ① → ② → ③ → ④

Rule: Sync first. Then Promise. Then setTimeout.
`);

  console.log("--- Example 2: Why setTimeout(0) is not instant ---\n");

  console.log("A");
  setTimeout(() => console.log("C"), 0);
  console.log("B");

  await wait(50);

  console.log(`
✅ You should see:  A → B → C

setTimeout(0) means "run LATER", not "run now".
`);

  console.log("--- Example 3: async/await ---\n");

  async function sayHi() {
    console.log("1");
    await Promise.resolve(); // pause here — rest runs as Promise
    console.log("3");
  }

  sayHi();
  console.log("2");

  await wait(50);

  console.log(`
✅ You should see:  1 → 2 → 3

Code BEFORE await = normal sync.
Code AFTER await = runs like a Promise (later).
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET (memorize this one line)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   SYNC  →  Promise / await  →  setTimeout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Practice:  node 01-event-loop-practice.js
Answers:   node 01-event-loop-practice.js --answers
`);
}

runSimpleDemo().catch(console.error);
