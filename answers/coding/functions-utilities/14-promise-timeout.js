/**
 * 14 — Timeout wrapper for a promise
 * Run: node 14-promise-timeout.js
 *
 * withTimeout(promise, ms) — rejects with Error('Timeout') if not settled in ms
 */

const { runAsyncTests, sleep } = require("./test-utils");

/**
 * @param {Promise<unknown>} promise
 * @param {number} ms
 * @returns {Promise<unknown>}
 */
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timeout")), ms);
    Promise.resolve(promise)
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

async function main() {
  const ok = await runAsyncTests(
    "withTimeout",
    (input) => withTimeout(input.promise, input.ms),
    [
      {
        label: "resolves before timeout",
        input: { promise: Promise.resolve("ok"), ms: 100 },
        expected: "ok",
      },
      {
        label: "rejects on timeout",
        input: { promise: sleep(200).then(() => "late"), ms: 50 },
        check: async (input) => {
          try {
            await withTimeout(input.promise, input.ms);
            return false;
          } catch (e) {
            return e.message === "Timeout";
          }
        },
      },
      {
        label: "propagates original rejection",
        input: {
          promise: Promise.reject(new Error("fail")),
          ms: 100,
        },
        check: async (input) => {
          try {
            await withTimeout(input.promise, input.ms);
            return false;
          } catch (e) {
            return e.message === "fail";
          }
        },
      },
    ],
  );

  process.exit(ok ? 0 : 1);
}

main();
