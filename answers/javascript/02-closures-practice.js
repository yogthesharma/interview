/**
 * CLOSURES — Your practice workspace
 * ==================================
 *
 * How to use:
 *   1. Copy a question from chat into "QUESTION"
 *   2. Write what gets printed under "MY ANSWER"
 *   3. Reply in chat to check
 *
 * Learn first: node 02-closures.js
 *
 * Rule: inner function remembers variables from where it was created
 */

// =============================================================================
// QUESTION 1
// =============================================================================
// QUESTION:
function make() {
  let x = 10;
  return () => x + 1;
}
const fn = make();
console.log(fn());
console.log(fn());

// MY ANSWER:
// 11 11

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
function make2() {
  let x = 0;
  return () => ++x;
}

const a = make2();
const b = make2();

console.log(a());
console.log(a());
console.log(b());

// MY ANSWER:
// 1 2 1

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
const funcs = [];

for (var i = 0; i < 3; i++) {
  funcs.push(function () {
    return i;
  });
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());

// MY ANSWER:
// 3 3 3

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
const funcs2 = [];

for (let i = 0; i < 3; i++) {
  funcs2.push(function () {
    return i;
  });
}

console.log(funcs2[0]());
console.log(funcs2[1]());
console.log(funcs2[2]());

// MY ANSWER:
// 0 1 2

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// MY ANSWER:
// 3 3 3

// =============================================================================
// NOTES
// =============================================================================

//
