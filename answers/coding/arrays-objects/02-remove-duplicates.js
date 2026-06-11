/**
 * 02 — Remove duplicates from an array (preserve first occurrence order)
 * Run: node 02-remove-duplicates.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} arr
 * @returns {unknown[]}
 */
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

const ok = runTests("removeDuplicates", (arr) => removeDuplicates(arr), [
  { input: [1, 2, 2, 3, 1, 4], expected: [1, 2, 3, 4] },
  { input: ["a", "a", "b"], expected: ["a", "b"] },
  { input: [], expected: [] },
  { input: [1], expected: [1] },
  { input: [true, true, false, true], expected: [true, false] },
]);

process.exit(ok ? 0 : 1);
