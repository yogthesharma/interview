/**
 * DEBOUNCE vs THROTTLE — Demos only
 * ==================================
 *
 * Run:  node 09-debounce-throttle.js
 *
 * Practice → 09-debounce-throttle-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * DEBOUNCE — wait until events STOP, then run ONCE
 *   Use: search input, resize end, form validation while typing
 *   User types a-p-p quickly → only "app" triggers API (after 300ms pause)
 *
 * THROTTLE — run AT MOST once every N ms while events keep firing
 *   Use: scroll, mousemove, button spam prevention
 *   Scroll fires 100x/sec → handler runs ~5x/sec (if 200ms throttle)
 *
 * ---------------------------------------------------------------------------
 */

function debounce(fn, delayMs) {
  let timerId = null;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delayMs);
  };
}

function throttle(fn, intervalMs) {
  let lastRun = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRun >= intervalMs) {
      lastRun = now;
      fn.apply(this, args);
    }
  };
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runDemo() {
  console.log(`
╔════════════════════════════════════════════════════╗
║  DEBOUNCE vs THROTTLE                              ║
╚════════════════════════════════════════════════════╝
`);

  console.log("--- Debounce: rapid typing → one API call ---\n");

  const search = debounce((q) => console.log("API search:", q), 300);

  search("a");
  search("ap");
  search("app");

  await wait(400);

  console.log(`
✅ Only "app" logged — timer reset on each keystroke
`);

  console.log("--- Throttle: rapid scroll → capped calls ---\n");

  const onScroll = throttle(() => console.log("scroll handler fired"), 200);

  onScroll();
  onScroll();
  onScroll();

  await wait(250);
  onScroll();

  await wait(100);

  console.log(`
✅ First scroll fires immediately
   Next ones ignored until 200ms passes
`);

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Debounce  → wait for PAUSE      → search box
 Throttle  → max 1 per interval  → scroll / resize

 React: clear timeout on unmount (debounce cleanup)

Practice: 09-debounce-throttle-practice.js
`);
}

runDemo().catch(console.error);
