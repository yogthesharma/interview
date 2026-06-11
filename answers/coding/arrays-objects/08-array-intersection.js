/**
 * 08 — Intersection of two arrays (unique values, order of first array)
 * Run: node 08-array-intersection.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} a
 * @param {unknown[]} b
 * @returns {unknown[]}
 */
function intersection(a, b) {
  const setB = new Set(b);
  const seen = new Set();

  const result = [];

  for (const item of a) {
    if (setB.has(item) && !seen.has(item)) {
      result.push(item);
      seen.add(item);
    }
  }

  return result;
}

const ok = runTests("intersection", ({ a, b }) => intersection(a, b), [
  { input: { a: [1, 2, 2, 3], b: [2, 2, 4] }, expected: [2] },
  { input: { a: ["a", "b", "c"], b: ["b", "d"] }, expected: ["b"] },
  { input: { a: [1, 2, 3], b: [4, 5] }, expected: [] },
  { input: { a: [], b: [1] }, expected: [] },
  { input: { a: [1, 1, 1], b: [1] }, expected: [1] },
]);

process.exit(ok ? 0 : 1);
