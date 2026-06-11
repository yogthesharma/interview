/**
 * MEMORY LEAKS — Demos only
 * =========================
 *
 * Run:  node 10-memory-leaks.js
 *
 * Practice → 10-memory-leaks-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * MEMORY LEAK = stuff you don't need anymore stays in memory
 *               because something still REFERENCES it
 *               → garbage collector can't free it
 *
 * Common causes (browser / React):
 *   1. setInterval / setTimeout not cleared
 *   2. Event listeners not removed
 *   3. Closures holding big objects
 *   4. setState / fetch after component unmounted
 *   5. Global or growing caches (Map) never cleared
 *
 * Fix pattern in React:
 *   useEffect(() => {
 *     const id = setInterval(...);
 *     return () => clearInterval(id);  // cleanup!
 *   }, []);
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  MEMORY LEAKS — patterns & fixes                   ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: Timer not cleared ---

console.log("--- Example 1: forgotten timer ---");
console.log(`
❌ setInterval(poll, 1000) on mount, never clearInterval on unmount
✅ return () => clearInterval(id) in useEffect cleanup
`);

// --- Example 2: Map vs WeakMap ---

console.log("--- Example 2: Map holds object forever ---");

let user = { id: 1 };
const cache = new Map();
cache.set(user, "session data");

user = null; // we "forgot" user...
console.log("Map size still:", cache.size); // 1 — LEAK, Map still holds object

console.log(`
✅ Map keeps strong reference → GC can't collect
✅ WeakMap lets GC collect when nothing else references the key
`);

// --- Example 3: React async after unmount ---

console.log("--- Example 3: fetch after unmount ---");
console.log(`
❌ fetch('/api').then(data => setState(data))  // component may be gone
✅ AbortController + cleanup:
   useEffect(() => {
     const ac = new AbortController();
     fetch(url, { signal: ac.signal }).then(...);
     return () => ac.abort();
   }, [url]);
`);

// --- Example 4: Closure holding too much ---

console.log("--- Example 4: fat closure ---");
console.log(`
❌ onClick closes over entire hugeArray when it only needs .length
✅ const len = hugeArray.length; onClick uses len only
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Leak     = needed memory still referenced
 React    = always cleanup in useEffect return
 Timers   = clearInterval / clearTimeout
 Fetch    = AbortController.abort() on unmount
 DOM data = WeakMap instead of Map when possible

Practice: 10-memory-leaks-practice.js
`);
