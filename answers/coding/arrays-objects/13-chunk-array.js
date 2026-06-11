/**
 * 13 — Chunk array into groups of size n (last chunk may be smaller)
 * Run: node 13-chunk-array.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} arr
 * @param {number} size
 * @returns {unknown[][]}
 */
function chunkArray(arr, size) {
  if (size <= 0) return [];
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const ok = runTests("chunkArray", ({ arr, size }) => chunkArray(arr, size), [
  { input: { arr: [1, 2, 3, 4, 5], size: 2 }, expected: [[1, 2], [3, 4], [5]] },
  { input: { arr: [1, 2, 3], size: 3 }, expected: [[1, 2, 3]] },
  { input: { arr: [1, 2, 3], size: 5 }, expected: [[1, 2, 3]] },
  { input: { arr: [], size: 2 }, expected: [] },
  {
    input: { arr: ["a", "b", "c", "d"], size: 1 },
    expected: [["a"], ["b"], ["c"], ["d"]],
  },
]);

process.exit(ok ? 0 : 1);
