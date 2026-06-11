/**
 * 02 — Throttle: at most one call per ms window
 * Run: node 02-throttle.js
 */

const { runAsyncTests, sleep } = require("./test-utils");

/**
 * @param {(...args: unknown[]) => void} fn
 * @param {number} ms
 * @returns {(...args: unknown[]) => void}
 */
function throttle(fn, ms) {
  let last = 0;

  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn(...args);
    }
  };
}

async function main() {
  const ok = await runAsyncTests("throttle", null, [
    {
      label: "burst in window → first call runs",
      input: null,
      check: async () => {
        let count = 0;
        const fn = throttle(() => count++, 100);
        fn();
        fn();
        fn();
        await sleep(20);
        return count === 1;
      },
    },
    {
      label: "after window → can run again",
      input: null,
      check: async () => {
        let count = 0;
        const fn = throttle(() => count++, 50);
        fn();
        await sleep(70);
        fn();
        await sleep(20);
        return count === 2;
      },
    },
  ]);

  process.exit(ok ? 0 : 1);
}

main();
