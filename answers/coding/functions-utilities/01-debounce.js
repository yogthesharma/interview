/**
 * 01 — Debounce: call fn only after ms quiet since last invoke
 * Run: node 01-debounce.js  (~1s)
 */

const { runAsyncTests, sleep } = require("./test-utils");

/**
 * @param {(...args: unknown[]) => void} fn
 * @param {number} ms
 * @returns {(...args: unknown[]) => void}
 */
function debounce(fn, ms) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}

async function main() {
  const ok = await runAsyncTests("debounce", null, [
    {
      label: "rapid calls → one execution",
      input: null,
      check: async () => {
        let count = 0;
        const fn = debounce(() => count++, 50);
        fn();
        fn();
        fn();
        await sleep(80);
        return count === 1;
      },
    },
    {
      label: "passes latest args",
      input: null,
      check: async () => {
        let last = null;
        const fn = debounce((x) => {
          last = x;
        }, 50);
        fn(1);
        fn(2);
        fn(3);
        await sleep(80);
        return last === 3;
      },
    },
    {
      label: "separate bursts → two executions",
      input: null,
      check: async () => {
        let count = 0;
        const fn = debounce(() => count++, 40);
        fn();
        await sleep(60);
        fn();
        await sleep(60);
        return count === 2;
      },
    },
  ]);

  process.exit(ok ? 0 : 1);
}

main();
