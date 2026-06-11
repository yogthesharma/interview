/**
 * 12 — Rotate array right by k steps (return new array)
 * Run: node 12-rotate-array.js
 *
 * rotate([1,2,3,4,5], 2) => [4,5,1,2,3]
 * k may be larger than length — use k % length
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} arr
 * @param {number} k
 * @returns {unknown[]}
 */
function rotateArray(arr, k) {
  if (arr.length === 0) return [];

  const steps = k % arr.length;

  const left = arr.slice(-steps);
  const right = arr.slice(0, -steps);

  return left.concat(right);
}

const ok = runTests("rotateArray", ({ arr, k }) => rotateArray(arr, k), [
  { input: { arr: [1, 2, 3, 4, 5], k: 2 }, expected: [4, 5, 1, 2, 3] },
  { input: { arr: [1, 2, 3], k: 0 }, expected: [1, 2, 3] },
  { input: { arr: [1, 2, 3], k: 3 }, expected: [1, 2, 3] },
  { input: { arr: [1, 2, 3], k: 4 }, expected: [3, 1, 2] },
  { input: { arr: [], k: 5 }, expected: [] },
]);

process.exit(ok ? 0 : 1);
