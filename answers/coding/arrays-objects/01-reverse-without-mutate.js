/**
 * 01 — Reverse an array WITHOUT mutating the original
 * Run: node 01-reverse-without-mutate.js
 */

const { deepEqual, runTests } = require("./test-utils");

/**
 * @param {unknown[]} arr
 * @returns {unknown[]}
 */
function reverseWithoutMutate(arr) {
  const copyArr = [...arr];
  return copyArr.reverse();
}

// --- Tests ---
const input = [1, 2, 3, 4];
const ok = runTests(
  "reverseWithoutMutate",
  (arr) => reverseWithoutMutate(arr),
  [
    { input: [1, 2, 3], expected: [3, 2, 1] },
    { input: ["a", "b"], expected: ["b", "a"] },
    { input: [], expected: [] },
    { input: [42], expected: [42] },
  ],
);

// Original must not change
const copy = [...input];
reverseWithoutMutate(input);
const notMutated = deepEqual(input, copy);
console.log(notMutated ? "✓ original not mutated" : "✗ original was mutated!");
process.exit(ok && notMutated ? 0 : 1);
