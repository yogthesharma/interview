/**
 * 15 — sleep / delay function
 * Run: node 15-sleep.js
 */

const { runAsyncTests } = require("./test-utils");

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const ok = await runAsyncTests("sleep", (ms) => sleep(ms), [
    {
      label: "waits roughly ms",
      input: 50,
      check: async () => {
        const start = Date.now();
        await sleep(50);
        return Date.now() - start >= 40;
      },
    },
    {
      label: "resolves to undefined",
      input: 10,
      expected: undefined,
    },
    {
      label: "zero ms resolves quickly",
      input: 0,
      check: async () => {
        const start = Date.now();
        await sleep(0);
        return Date.now() - start < 50;
      },
    },
  ]);

  process.exit(ok ? 0 : 1);
}

main();
