/**
 * HOISTING + var / let / const — Your practice workspace
 * ========================================================
 *
 * 1. Paste question from chat
 * 2. Write what prints OR what error (ReferenceError / TypeError / undefined)
 * 3. Reply in chat to check
 *
 * Learn first: node 03-hoisting-var-let-const.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
console.log(x);
var x = 5;
console.log(x);

// MY ANSWER:
// undefined 5

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:

console.log(y);
let y = 5;

// MY ANSWER:
// Reference Error

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:

if (true) {
  var a = 1;
  var b = 2;
}

console.log(a);
console.log(b);

// MY ANSWER:
// 1 2

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
const obj = { count: 1 };
obj.count = 2;
console.log(obj.count);

obj = { count: 99 };

// MY ANSWER:
// 2 Reference Error (Can't ReAssign A Const Value)

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
console.log(typeof ghostVar);
var ghostVar = "hello";

console.log(typeof ghostLet);
let ghostLet = "hello";

// MY ANSWER:
// undefined Reference Error

// =============================================================================
// NOTES
// =============================================================================

//
