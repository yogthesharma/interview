# How does the Node event loop differ from the browser?

**Target time:** 45 seconds

---

## Talk track

> **Same core idea:** single-threaded JS, **call stack**, **microtasks** (Promises), **macrotasks** (timers, I/O callbacks).
>
> **Browser adds:** rendering, `requestAnimationFrame`, user events — UI paint between tasks.
>
> **Node adds:** **libuv** thread pool for some I/O (file system, DNS), **phases** (timers, poll, check, close). No DOM or paint.
>
> **Practical difference:** long **CPU work** blocks both; in Node it blocks **all requests** on that process until done — use workers or offload. Browser blocks UI thread → jank.
>
> **Both:** `await` yields control; microtasks run before next timer/macrotask.

---

## Code (same output in both)

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// 1 4 3 2
```

---

## Avoid

- Claiming Node is multi-threaded for all JS execution — only I/O/delegation
