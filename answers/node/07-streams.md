# What are streams? When do you use them?

**Target time:** 30–45 seconds

---

## Talk track

> **Streams** process data in **chunks** instead of loading everything into memory — Readable, Writable, Transform, Duplex.
>
> **Use when:**
> - Large file upload/download  
> - CSV/JSON parsing line by line  
> - Proxying HTTP response body  
> - Video/logs — continuous data
>
> **Benefit:** constant memory vs file size; start processing before full download.
>
> Node HTTP `req`/`res` are stream-like; `pipeline()` handles backpressure and errors.

---

## Code

```ts
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

await pipeline(
  createReadStream("export.csv"),
  createGzip(),
  createWriteStream("export.csv.gz"),
);
```

---

## Avoid

- Reading 500MB file into a string in a Lambda with 128MB RAM
