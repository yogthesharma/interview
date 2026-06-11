/**
 * MEMORY LEAKS — Your practice workspace
 * ======================================
 *
 * Learn first: node 10-memory-leaks.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
// What is a memory leak in JavaScript? (one sentence)

// MY ANSWER:
// Memory is no longer needed but still referenced, so the garbage collector can't free it.

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * You add setInterval in a React useEffect but forget cleanup.
 * What goes wrong when the user navigates away?
 */

// MY ANSWER:
// The interval keeps running (wasted CPU/memory). Its callback may call setState on an
// unmounted component → React warning + closure keeps old component data alive.

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * Component fetches data, then unmounts before fetch completes.
 * What can go wrong if you call setState in the .then()?
 */

// MY ANSWER:
// React warns: "Can't perform a React state update on an unmounted component."
// Wasted work + closure/async handler can leak memory. Fix: AbortController in cleanup.

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * Which causes a leak — pick A or B?
 *
 * A) const cache = new Map() — store DOM nodes as keys, never delete
 * B) const cache = new WeakMap() — store DOM nodes as keys
 */

// MY ANSWER:
// A — Map holds a strong reference to keys; removed DOM nodes can't be garbage-collected.
// WeakMap (B) allows GC when nothing else references the node.

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * Write the cleanup pattern (pseudocode is fine):
 */

// MY ANSWER:
// Timer cleanup:
useEffect(() => {
  const id = setInterval(poll, 1000);
  return () => clearInterval(id);
}, []);

// Fetch cleanup:
// useEffect(() => {
//   const ac = new AbortController();
//   fetch(url, { signal: ac.signal }).then(...);
//   return () => ac.abort();
// }, [url]);

// =============================================================================
// NOTES
// =============================================================================

// Interview one-liner:
// "Leaks = unneeded memory still referenced. Always return cleanup from useEffect
//  (clearInterval, removeListener, abort fetch)."
