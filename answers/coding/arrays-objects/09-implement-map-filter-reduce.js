/**
 * 09 — Implement map, filter, reduce from scratch (no .map/.filter/.reduce)
 * Run: node 09-implement-map-filter-reduce.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} arr
 * @param {(item: unknown, index: number, array: unknown[]) => unknown} fn
 * @returns {unknown[]}
 */
function myMap(arr, fn) {
  const result = [];

  for (const item of arr) {
    result.push(fn(item));
  }

  return result;
}

/**
 * @param {unknown[]} arr
 * @param {(item: unknown, index: number, array: unknown[]) => boolean} fn
 * @returns {unknown[]}
 */
function myFilter(arr, fn) {
  const result = [];

  for (const item of arr) {
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
}

/**
 * @param {unknown[]} arr
 * @param {(acc: unknown, item: unknown, index: number, array: unknown[]) => unknown} fn
 * @param {unknown} initial
 * @returns {unknown}
 */
function myReduce(arr, fn, initial) {
  let result = initial;
  for (const item of arr) {
    result = fn(result, item);
  }
  return result;
}

let allPass = true;

allPass =
  runTests("myMap", ({ arr, fn }) => myMap(arr, fn), [
    {
      input: { arr: [1, 2, 3], fn: (x) => x * 2 },
      expected: [2, 4, 6],
    },
    { input: { arr: [], fn: (x) => x }, expected: [] },
  ]) && allPass;

allPass =
  runTests("myFilter", ({ arr, fn }) => myFilter(arr, fn), [
    {
      input: { arr: [1, 2, 3, 4], fn: (x) => x % 2 === 0 },
      expected: [2, 4],
    },
    {
      input: { arr: ["a", "bb", "ccc"], fn: (s) => s.length > 1 },
      expected: ["bb", "ccc"],
    },
  ]) && allPass;

allPass =
  runTests("myReduce", ({ arr, fn, initial }) => myReduce(arr, fn, initial), [
    {
      input: { arr: [1, 2, 3], fn: (acc, x) => acc + x, initial: 0 },
      expected: 6,
    },
    {
      input: { arr: ["a", "b"], fn: (acc, x) => acc + x, initial: "" },
      expected: "ab",
    },
    {
      input: {
        arr: [{ v: 1 }, { v: 2 }],
        fn: (acc, x) => acc + x.v,
        initial: 0,
      },
      expected: 3,
    },
  ]) && allPass;

process.exit(allPass ? 0 : 1);
