/**
 * 08 — once: wrapped function runs at most one time
 * Run: node 08-once.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {(...args: unknown[]) => unknown} fn
 * @returns {(...args: unknown[]) => unknown}
 */
function once(fn) {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }

    return result;
  };
}

const ok = runTests("once", () => null, [
  {
    label: "runs only once",
    input: null,
    check: () => {
      let count = 0;
      const fn = once(() => ++count);
      fn();
      fn();
      fn();
      return count === 1;
    },
  },
  {
    label: "returns first result",
    input: null,
    check: () => {
      const fn = once(() => 99);
      return fn() === 99 && fn() === 99;
    },
  },
  {
    label: "passes args on first call",
    input: null,
    check: () => {
      const fn = once((a, b) => a + b);
      return fn(2, 3) === 5;
    },
  },
]);

process.exit(ok ? 0 : 1);
