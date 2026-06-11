/**
 * EVENT LOOP — Your practice workspace
 * ====================================
 *
 * How to use:
 *   1. Copy a question from chat into a "QUESTION" block below
 *   2. Write your predicted order under "MY ANSWER"
 *   3. Ask in chat to check — don't peek at answers until you try
 *
 * Learn first: node 01-event-loop.js
 *
 * Rule to remember:  SYNC  →  Promise / await  →  setTimeout
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
console.log("1");
setTimeout(() => console.log("4"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("2");

// MY ANSWER:
// 1 2 3 4

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
console.log("A");
setTimeout(() => console.log("C"), 0);
console.log("B");

// MY ANSWER:
// A B C

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
async function f() {
  console.log("1");
  await Promise.resolve();
  console.log("3");
}
f();
console.log("2");

// MY ANSWER:
// 1 2 3

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
console.log("start");
Promise.resolve().then(() => console.log("mid"));
setTimeout(() => console.log("end"), 0);
console.log("finish");

// MY ANSWER:
// start finish mid end

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
console.log("S");
setTimeout(() => console.log("T1", 0));
Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T2"), 0);
});
Promise.resolve().then(() => console.log("P2"));
console.log("E");

// MY ANSWER:
// S E P1 P2 T1 T2

// =============================================================================
// NOTES (optional — jot why you thought that way)
// =============================================================================

//
