# What's wrong with this code?

**Target time:** 30–60 seconds in interview  
**Broken file:** `01-whats-wrong-broken.js`  
**Fixed:** `solutions/01-whats-wrong-fixed.js`

---

## Bugs to spot

1. **`fetch` not awaited** — returns a Promise, not data; `.json()` called on Promise  
2. **No error handling** — failed HTTP still tries to parse  
3. **No check `res.ok`** — 404/500 treated as success

---

## Talk track

> The main bug is **missing `await` on `fetch`** — `getUser` returns a Promise chain that never resolves to user data correctly, and callers think they have JSON when they have a Promise.
>
> I'd also add **`res.ok` check**, try/catch or throw on bad status, and type the return. In production I'd use a shared fetch wrapper with timeout and structured errors.

---

## Fixed pattern

```js
async function getUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

---

## Avoid

- Only saying "add async" without explaining caller impact
