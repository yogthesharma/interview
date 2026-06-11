# React — practical (complete reference)

**All 12 exercises implemented** — run the app, click through each route, read the code.

## Run

```bash
cd answers/react-practical/app
npm install   # first time
npm run dev
```

## How to study (no need to re-implement)

1. Open home → pick exercise  
2. Read matching `PageXX*.tsx` in `app/src/pages/`  
3. Read paired `0X-*.md` for the interview one-liner  
4. Cross-ref `react-conceptual/` for the spoken answer

## Files

| Route | Page | Pattern |
|-------|------|---------|
| `/01-search-filter` | Page01 | controlled input + filter |
| `/02-paginated-list` | Page02 | client pagination |
| `/03-todo-list` | Page03 | list CRUD state |
| `/04-form-validation` | Page04 | controlled form + errors |
| `/05-fetch-display` | Page05 | fetch + loading/error/retry |
| `/06-debounced-search` | Page06 | useDebounce hook |
| `/07-modal-dropdown` | Page07 | modal + click-outside |
| `/08-infinite-scroll` | Page08 | scroll listener + chunk load |
| `/09-fix-rerenders` | Page09 | memo + useCallback |
| `/10-fix-use-effect` | Page10 | effect deps + abort |
| `/11-fix-stale-closure` | Page11 | ref for latest value |
| `/12-custom-hooks` | Page12 | useDebounce + useFetch |

`solutions/` mirrors `pages/` and `hooks/` for offline diff — app is the source of truth.
