# How do you optimize bundle size?

**Target time:** 45 seconds

---

## Talk track

> **Measure:** `vite build` / webpack analyzer — see what's heavy.
>
> **Tactics:**
> - **Tree shaking** — ESM imports, avoid importing whole lodash (`import debounce from 'lodash/debounce'`)  
> - **Code splitting** — routes lazy-loaded  
> - **Dynamic import** heavy libs (charts, editors) only when needed  
> - **Replace heavy deps** — date-fns vs moment, smaller alternatives  
> - **Check duplicates** — two versions of same package  
> - **Compression** — gzip/brotli at CDN  
> - **Don't ship dev tools** to prod
>
> Vite + modern bundlers split chunks automatically for dynamic `import()` — still audit analyzer.

---

## Code

```tsx
// Bad
import _ from "lodash";

// Better
import debounce from "lodash/debounce";

// Route split
const Charts = lazy(() => import("./Charts"));
```

---

## Avoid

- Premature micro-frontend split before measuring bundle
