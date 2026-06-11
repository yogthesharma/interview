/**
 * 07 — Merge two sorted arrays into one sorted array
 * Run: node 07-merge-sorted-arrays.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function mergeSortedArrays(a, b) {
  // This is a two pointer kind of problem
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  return result.concat(a.slice(i), b.slice(j));
}

const ok = runTests(
  "mergeSortedArrays",
  ({ a, b }) => mergeSortedArrays(a, b),
  [
    { input: { a: [1, 3, 5], b: [2, 4, 6] }, expected: [1, 2, 3, 4, 5, 6] },
    { input: { a: [], b: [1, 2] }, expected: [1, 2] },
    { input: { a: [1], b: [] }, expected: [1] },
    { input: { a: [1, 1, 2], b: [1, 3] }, expected: [1, 1, 1, 2, 3] },
    { input: { a: [], b: [] }, expected: [] },
  ],
);

process.exit(ok ? 0 : 1);
