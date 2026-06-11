/**
 * 12 — Curry a function
 * Run: node 12-curry.js
 *
 * curry(add)(1)(2)(3) === 6  for add(a,b,c) => a+b+c
 * Also support: curry(add)(1, 2)(3)
 */

const { runTests } = require("./test-utils");

/**
 * @param {(...args: unknown[]) => unknown} fn
 * @returns {(...args: unknown[]) => unknown}
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...next) => curried(...args, ...next);
  };
}

function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

const ok = runTests("curry", () => null, [
  {
    label: "one arg at a time",
    input: null,
    check: () => curry(add)(1)(2)(3) === 6,
  },
  {
    label: "mixed partial calls",
    input: null,
    check: () => curry(add)(1, 2)(3) === 6,
  },
  {
    label: "two-arg function",
    input: null,
    check: () => curry(multiply)(3)(4) === 12,
  },
  {
    label: "all args at once still works",
    input: null,
    check: () => curry(add)(1, 2, 3) === 6,
  },
]);

process.exit(ok ? 0 : 1);
