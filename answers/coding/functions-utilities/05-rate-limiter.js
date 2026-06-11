/**
 * 05 — Simple rate limiter: max N calls per windowMs
 * Run: node 05-rate-limiter.js
 *
 * createRateLimiter(2, 100) → fn where 3rd call within 100ms throws or returns false
 * Design: isAllowed() returns boolean (sync token bucket / sliding window)
 */

const { runAsyncTests, sleep } = require("./test-utils");

/**
 * @param {number} maxCalls
 * @param {number} windowMs
 * @returns {{ isAllowed: () => boolean, reset?: () => void }}
 */
function createRateLimiter(maxCalls, windowMs) {
  const timestamps = [];

  function isAllowed() {
    const now = Date.now();
    while (timestamps.length && now - timestamps[0] >= windowMs) {
      timestamps.shift();
    }
    if (timestamps.length >= maxCalls) return false;
    timestamps.push(now);
    return true;
  }

  return { isAllowed };
}

async function main() {
  const ok = await runAsyncTests("createRateLimiter", null, [
    {
      label: "allows up to maxCalls",
      input: null,
      check: async () => {
        const limiter = createRateLimiter(2, 100);
        return limiter.isAllowed() && limiter.isAllowed();
      },
    },
    {
      label: "blocks over limit in window",
      input: null,
      check: async () => {
        const limiter = createRateLimiter(2, 100);
        limiter.isAllowed();
        limiter.isAllowed();
        return limiter.isAllowed() === false;
      },
    },
    {
      label: "resets after window",
      input: null,
      check: async () => {
        const limiter = createRateLimiter(1, 50);
        limiter.isAllowed();
        await sleep(60);
        return limiter.isAllowed() === true;
      },
    },
  ]);

  process.exit(ok ? 0 : 1);
}

main();
