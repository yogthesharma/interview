/**
 * CURRYING — Your practice workspace
 * ==================================
 *
 * Learn first: node 08-currying.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
const multiply = (a) => (b) => a * b;

const double = multiply(2);
console.log(double(5));
console.log(double(10));

// MY ANSWER:
// 10 20

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
const add = (a) => (b) => (c) => a + b + c;

console.log(add(10)(20)(5));

// MY ANSWER:
// 35

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
const buildUrl = (base) => (path) => `${base}${path}`;

const api = buildUrl("https://api.example.com");
console.log(api("/users"));
console.log(api("/health"));

// MY ANSWER:
// https://api.example.com/users https://api.example.com/health

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

const sayHello = greet.bind(null, "Hello");

console.log(sayHello("Yog"));
console.log(sayHello("Alex"));

// MY ANSWER:
// Hello, Yog Hello, Alex

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * Currying: So currying is the concept where we divide the function taking multiple arguments into nested functions taking less number of arguments for reusability.
 * How it is different: bind is basically assinging the current function to another variable i think with ownership
 */

// MY ANSWER:

// =============================================================================
// NOTES
// =============================================================================

//
