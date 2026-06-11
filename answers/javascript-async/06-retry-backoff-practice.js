/**
 * RETRY & EXPONENTIAL BACKOFF — Your practice workspace
 * =====================================================
 *
 * 1. Run: node answers/javascript-async/06-retry-backoff.js
 * 2. Answer each question below
 * 3. Reply in chat to check
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * Write pseudocode (3–5 lines): retry with exponential backoff,
max 3 retries, start delay 1s, double each time.
 */

// MY ANSWER:
// async function retryWithBackoff(fn, maxRetries = 3, startDelay = 1000) {
//   for (let i = 1; i <= maxRetries; i++) {
//     try {
//       await fn();
//     } catch (e) {
//       if (i === maxRetries) throw e;
//       const delay = startDelay * 2 ** (i - 1);
//       await wait(delay);
//     }
//   }
// }

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * Why use exponential backoff instead of retrying immediately every 100ms?
 */

// MY ANSWER:
// To prevent server load and give the server time to recover

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * Should you blindly retry a failed POST /api/payment?
Why or why not?
 */

// MY ANSWER:
// risk of duplicate payment (charge twice). POST is often not idempotent.

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * What is jitter in backoff, and why add it in production?
 */

// MY ANSWER:
// add randomness to delay so all clients don't retry at the exact same moment

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * baseDelay = 1000ms. Delays before retry attempts 1, 2, 3?
(formula: base * 2^attempt, attempt starts at 0)
 */

// MY ANSWER:
// 1 Sec, 2 Sec, 4 Sec

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION:
/**
 * retryWithBackoff(fn, 3) — fn fails all 3 times.
What happens on the last attempt?
 */

// MY ANSWER:
// Throw the error from the catch block

// =============================================================================
// CODING
// =============================================================================

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// CODE Q1 — retry(fn, maxRetries): simple retry, fixed 50ms delay between attempts

async function retry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const data = await fn();
      return data;
    } catch (e) {
      if (i == maxRetries - 1) throw e;
      await wait(50);
    }
  }
}

// CODE Q2 — retryWithBackoff(fn, maxRetries, baseDelayMs): exponential backoff

async function retryWithBackoff(fn, maxRetries = 3, baseDelayMs = 100) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const data = await fn();
      return data;
    } catch (e) {
      if (i == maxRetries - 1) throw e;
      const delay = baseDelayMs * 2 ** i;
      await wait(delay);
    }
  }
}

// CODE Q3 — flakyFetch: fails first 2 calls, succeeds on 3rd. Use retryWithBackoff to get data.

let flakyCalls = 0;

async function flakyFetch() {
  flakyCalls++;
  if (flakyCalls < 3) throw new Error(`fail ${flakyCalls}`);
  return { data: "ok" };
}

async function getDataWithRetry() {
  retryWithBackoff(flakyFetch, 3, 1000);
}

// -----------------------------------------------------------------------------
// Tests — uncomment when ready
// -----------------------------------------------------------------------------

// async function runCodingTests() {
//   let n = 0;
//   const fn = async () => {
//     n++;
//     if (n < 2) throw new Error("nope");
//     return "ok";
//   };
//   console.log("Q1:", await retry(fn, 3));
//
//   flakyCalls = 0;
//   console.log("Q3:", await getDataWithRetry());
// }
// runCodingTests().catch(console.error);

// =============================================================================
// NOTES
// =============================================================================

//
