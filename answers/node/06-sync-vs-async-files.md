# Sync vs async file operations?

**Target time:** 30 seconds

---

## Talk track

> **Sync** (`readFileSync`) — blocks the **event loop** until done. OK for **CLI scripts, startup config** (small files), bad under concurrent HTTP requests.
>
> **Async** (`readFile`, `fs.promises`) — non-blocking; **default for servers**.
>
> **Rule for APIs:** use **async** file I/O. Sync only at boot for tiny config if you accept the block.
>
> **Better for large files:** **streams** (see `07`) — don't load whole file into memory.

---

## Code

```ts
// ❌ In request handler — blocks all clients
import { readFileSync } from "node:fs";
const data = readFileSync("/big.csv", "utf8");

// ✅ Async
import { readFile } from "node:fs/promises";
const data = await readFile("/big.csv", "utf8");

// ✅ Large file — stream
import { createReadStream } from "node:fs";
createReadStream("/big.csv").pipe(transform).pipe(res);
```

---

## Avoid

- `readFileSync` inside hot API path
