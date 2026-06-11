/**
 * 04 — Retry with exponential backoff
 * Run: node 04-retry-backoff.js
 *
 * retry(fn, { retries: 3, baseMs: 10 }) — fn may throw; retry with 10, 20, 40ms delays
 */

const { runAsyncTests, sleep } = require("./test-utils");

/**
 * @param {() => Promise<unknown>} fn
 * @param {{ retries?: number, baseMs?: number }} [options]
 * @returns {Promise<unknown>}
 */
async function retryWithBackoff(fn, options = {}) {
  let { retries = 3, baseMs } = options;
  let attempts = 0;

  while (true) {
    try {
      return await fn();
    } catch (error) {
      if (attempts >= retries) throw error;
      const timeToSleep = baseMs * 2 ** attempts;
      await sleep(timeToSleep);
      attempts++;
    }
  }
}

async function main() {
  const ok = await runAsyncTests(
    "retryWithBackoff",
    (input) => retryWithBackoff(input.fn, input.options),
    [
      {
        label: "succeeds first try",
        input: { fn: async () => 42, options: { retries: 3, baseMs: 5 } },
        expected: 42,
      },
      {
        label: "fails twice then succeeds",
        input: {
          fn: (() => {
            let n = 0;
            return async () => {
              n++;
              if (n < 3) throw new Error("fail");
              return "ok";
            };
          })(),
          options: { retries: 3, baseMs: 5 },
        },
        expected: "ok",
      },
      {
        label: "exhausts retries → throws",
        input: {
          fn: async () => {
            throw new Error("always");
          },
          options: { retries: 2, baseMs: 5 },
        },
        check: async (input) => {
          try {
            await retryWithBackoff(input.fn, input.options);
            return false;
          } catch (e) {
            return e.message === "always";
          }
        },
      },
    ],
  );

  process.exit(ok ? 0 : 1);
}

main();
