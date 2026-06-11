# How would you fix this memory leak?

**Target time:** 30–45 seconds  
**Broken file:** `04-memory-leak-broken.js`  
**Fixed:** `solutions/04-memory-leak-fixed.js`

---

## The bug

1. **`setInterval` never cleared** when `destroy()` is called  
2. **Listener not removed** — `window` / EventEmitter keeps reference to handler + `Poller` instance

Classic in SPAs: effect without cleanup, subscriptions on route change.

---

## Talk track

> **Symptoms:** memory grows, CPU stays busy after navigating away, duplicate handlers firing.
>
> **Fix:** return cleanup from `useEffect` — `clearInterval`, `removeEventListener`, `abort()` fetch, unsubscribe socket.
>
> In class/long-lived modules: **`destroy()`** must clear every timer and listener it registered.

---

## React parallel

```tsx
useEffect(() => {
  const id = setInterval(poll, 1000);
  return () => clearInterval(id);
}, []);
```

---

## Avoid

- Only mentioning WeakMap — start with clearInterval/removeListener
