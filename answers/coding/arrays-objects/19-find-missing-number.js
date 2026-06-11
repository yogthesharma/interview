/**
 * 19 — Find missing number in sequence 1..n (one number missing, unsorted input)
 * Run: node 19-find-missing-number.js
 *
 * findMissing([1, 2, 4, 5], 5) => 3  (contains 4 of 5 numbers from 1..5)
 */

const { runTests } = require("./test-utils");

/**
 * @param {number[]} nums
 * @param {number} n — full range is 1..n
 * @returns {number}
 */
function findMissing(nums, n) {
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((sum, x) => sum + x, 0);
  console.log({ expected, actual });
  return expected - actual;
}

const ok = runTests("findMissing", ({ nums, n }) => findMissing(nums, n), [
  { input: { nums: [1, 2, 4, 5], n: 5 }, expected: 3 },
  { input: { nums: [2, 3, 1, 5], n: 5 }, expected: 4 },
  { input: { nums: [1], n: 2 }, expected: 2 },
  { input: { nums: [2], n: 2 }, expected: 1 },
  { input: { nums: [3, 2, 1, 5, 4], n: 6 }, expected: 6 },
]);

process.exit(ok ? 0 : 1);
