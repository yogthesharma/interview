/**
 * RACE CONDITIONS & ABORT — Demos only
 * =====================================
 *
 * Run:  node answers/javascript-async/07-race-abort.js
 *
 * Practice → 07-race-abort-practice.js
 *
 * ---------------------------------------------------------------------------
 * IN 20 SECONDS
 * ---------------------------------------------------------------------------
 *
 * Race condition: slow response arrives AFTER fast one → stale UI
 * Fix 1: request ID — ignore if id !== latest
 * Fix 2: AbortController — cancel previous fetch
 *
 * React: new AbortController per effect; abort() in useEffect cleanup
 *
 * ---------------------------------------------------------------------------
 */

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  RACE CONDITIONS & ABORT                           ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- Stale response (race condition) ---\n");

  let requestId = 0;

  async function search(query) {
    const id = ++requestId;
    await wait(100);
    return { id, query };
  }

  const slow = search("a");
  await wait(10);
  const fast = await search("ab");
  const slowResult = await slow;

  console.log("UI should show:", fast.query);
  console.log("Stale response also arrived:", slowResult.query);

  console.log(`
✅ Without guard, slow "a" can overwrite fast "ab" in state.
   Fix: if (response.id !== latestId) return;
`);

  console.log("--- AbortController ---\n");

  const controller = new AbortController();

  fetch("https://httpbin.org/delay/2", { signal: controller.signal }).catch(
    (e) => console.log("Fetch aborted:", e.name)
  );

  controller.abort();
  await wait(50);

  console.log(`
✅ fetch(url, { signal: controller.signal })
   controller.abort() in cleanup when query changes or unmount
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Race condition   out-of-order async responses
 Request ID       ignore stale responses
 AbortController  cancel in-flight fetch
 React cleanup    useEffect return () => controller.abort()

Practice: 07-race-abort-practice.js
`);
}

runDemo().catch(console.error);
