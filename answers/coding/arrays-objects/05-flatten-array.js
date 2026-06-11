/**
 * 05 — Flatten a nested array (one level deep OR fully nested — pick one, document in comment)
 * Default: fully flatten any depth
 * Run: node 05-flatten-array.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} arr
 * @returns {unknown[]}
 */
function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    acc.push(...(Array.isArray(item) ? flattenArray(item) : [item]));
    return acc;
  }, []);
}

const ok = runTests("flattenArray", (arr) => flattenArray(arr), [
  { input: [1, [2, 3], 4], expected: [1, 2, 3, 4] },
  { input: [1, [2, [3, [4]]]], expected: [1, 2, 3, 4] },
  { input: [], expected: [] },
  { input: [[[]]], expected: [] },
  { input: ["a", ["b", "c"]], expected: ["a", "b", "c"] },
]);

process.exit(ok ? 0 : 1);
