/**
 * CLOSURES — Demos only
 * =====================
 *
 * Run:  node 02-closures.js
 *
 * Practice → see 02-closures-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * A closure = a function that REMEMBERS variables from where it was created,
 * even after the outer function finished.
 *
 *   function outer() {
 *     let secret = 42;
 *     return function inner() { return secret; };  // inner "closes over" secret
 *   }
 *
 * Classic interview trap: loop + setTimeout + var → prints same number 3 times.
 * Fix: use let, or IIFE to capture each value.
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  CLOSURES — run this file and read the output      ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: Counter remembers its variable ---

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log("--- Example 1: counter ---");
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

console.log(`
✅ Each call adds 1 — the inner function remembers "count".
`);

// --- Example 2: Two counters = two separate memories ---

const counterA = makeCounter();
const counterB = makeCounter();
console.log("--- Example 2: two counters ---");
console.log("A:", counterA()); // 1
console.log("B:", counterB()); // 1
console.log("A:", counterA()); // 2

console.log(`
✅ counterA and counterB don't share count — separate closures.
`);

// --- Example 3: THE CLASSIC TRAP (var + loop) ---

console.log("--- Example 3: var + loop (wait for setTimeout) ---");

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var trap:", i), 0);
}

setTimeout(() => {
  console.log(`
✅ var trap prints: 3, 3, 3
Why? One shared "i". Loop ends at 3. All callbacks see 3.
`);

  // --- Example 4: FIX with let ---

  console.log("--- Example 4: let + loop ---");

  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let fix:", j), 0);
  }

  setTimeout(() => {
    console.log(`
✅ let fix prints: 0, 1, 2
Why? let creates a NEW j each loop turn — each callback gets its own j.
`);

    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Closure     = function remembers outer variables
 var + loop  = same variable shared → trap
 let + loop  = new variable each time → fixed

Practice:  paste questions in 02-closures-practice.js
`);
  }, 50);
}, 50);
