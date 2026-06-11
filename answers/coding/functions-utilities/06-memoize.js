/**
 * 06 — Memoize a function (cache by args)
 * Run: node 06-memoize.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {(...args: unknown[]) => unknown} fn
 * @returns {(...args: unknown[]) => unknown}
 */
function memoize(fn) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) return cache.get(key);

    const response = fn(...args);

    cache.set(key, response);

    return response;
  };
}

let computeCalls = 0;
function expensive(x) {
  computeCalls++;
  return x * 2;
}

const ok = runTests("memoize", () => null, [
  {
    label: "same args → cached",
    input: null,
    check: () => {
      computeCalls = 0;
      const memoized = memoize(expensive);
      return memoized(5) === 10 && memoized(5) === 10 && computeCalls === 1;
    },
  },
  {
    label: "different args → recompute",
    input: null,
    check: () => {
      computeCalls = 0;
      const memoized = memoize(expensive);
      memoized(1);
      memoized(2);
      return computeCalls === 2;
    },
  },
  {
    label: "multiple args",
    input: null,
    check: () => {
      computeCalls = 0;
      const add = memoize((a, b) => {
        computeCalls++;
        return a + b;
      });
      return add(1, 2) === 3 && add(1, 2) === 3 && computeCalls === 1;
    },
  },
]);

process.exit(ok ? 0 : 1);
