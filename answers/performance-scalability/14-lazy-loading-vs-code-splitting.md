# Lazy loading vs code splitting?

**Target time:** 30 seconds

---

## Talk track

> **Code splitting** — build tool breaks JS into **separate chunks** loaded on demand (usually per route or dynamic `import()`).
>
> **Lazy loading** — **when** you load — often images (`loading="lazy"`) or components (`React.lazy`) **when user navigates or scrolls near**.
>
> **Relationship:** `React.lazy` + `import()` **is** code splitting for JS. Lazy loading images is separate (defer network until viewport).
>
> Both improve **initial load**; splitting helps **JS parse time**, image lazy helps **bandwidth**.

---

## Code

```tsx
// JS — code split + lazy component
const Admin = lazy(() => import("./Admin"));
<Suspense fallback={<Spinner />}><Admin /></Suspense>

// Image — lazy load
<img src={url} loading="lazy" alt="" width={400} height={300} />
```

---

## Avoid

- Lazy-loading above-the-fold hero image (hurts LCP)
