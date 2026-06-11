/**
 * 11 — Two numbers that sum to target (return indices [i, j], i < j; or null)
 * Run: node 11-two-sum.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number] | null}
 */
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let left = target - nums[i];
    if (seen.has(left)) return [seen.get(left), i];
    seen.set(nums[i], i);
  }

  return null;
}

const ok = runTests("twoSum", ({ nums, target }) => twoSum(nums, target), [
  { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
  { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
  { input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
  { input: { nums: [1, 2, 3], target: 10 }, expected: null },
  { input: { nums: [], target: 0 }, expected: null },
]);

process.exit(ok ? 0 : 1);
