/**
 * RETRY & EXPONENTIAL BACKOFF — Demos only
 * =========================================
 *
 * Run:  node answers/javascript-async/06-retry-backoff.js
 *
 * Practice → 06-retry-backoff-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 15 SECONDS
 * ---------------------------------------------------------------------------
 *
 * Retry loop: try → catch → wait → try again
 * Backoff: delay doubles each attempt (1s → 2s → 4s) so you don't hammer server
 * Add jitter in prod to avoid thundering herd
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  RETRY & EXPONENTIAL BACKOFF                       ║
╚════════════════════════════════════════════════════╝
`);

  let attempts = 0;

  async function flakyApi() {
    attempts++;
    if (attempts < 3) throw new Error(`attempt ${attempts} failed`);
    return "success";
  }

  async function retryWithBackoff(fn, maxRetries = 3, baseDelayMs = 100) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (e) {
        if (i === maxRetries - 1) throw e;
        const delay = baseDelayMs * 2 ** i;
        console.log(`  retry in ${delay}ms (${e.message})`);
        await wait(delay);
      }
    }
  }

  const result = await retryWithBackoff(flakyApi, 4, 50);
  console.log("Result:", result);

  console.log(`
✅ Only retry idempotent/safe calls (GET), or use idempotency keys for POST.
   Cap max retries. Log failures for alerting.
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Retry loop     for + try/catch + await delay
 Backoff        delay = base * 2^attempt
 Jitter         randomize delay in prod
 Safe to retry  GET, idempotent ops — not blind POST

Practice: 06-retry-backoff-practice.js
`);
}

runDemo().catch(console.error);
