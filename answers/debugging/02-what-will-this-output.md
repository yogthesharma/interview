# What will this code output?

**Target time:** 20–30 seconds  
**Run:** `node 02-what-will-this-output.js`

---

## Answer (order)

```
1
4
3
2
```

---

## Talk track

> **Synchronous** `console.log('1')` runs first.  
> `setTimeout` schedules macrotask `2`.  
> `Promise.then` schedules microtask `3`.  
> Sync `4` runs before microtasks.  
> **Microtasks drain** → `3`, then **macrotask** → `2`.
>
> Classic event loop: sync → microtasks → next macrotask.

---

## Avoid

- Saying `2` before `3` (timer is macrotask, Promise is microtask)
