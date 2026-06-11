# What is Node.js? How is it different from browser JS?

**Target time:** 30–45 seconds

---

## Talk track

> **Node.js** is a **JavaScript runtime** built on Chrome's **V8** engine — runs JS **outside the browser**, on servers, CLIs, tooling.
>
> **Same language** as browser JS (syntax, Promises, async/await) but **different APIs and environment:**
>
> | Browser | Node |
> |---------|------|
> | DOM, `window`, `document` | No DOM — `fs`, `path`, `http` |
> | Sandboxed for security | File system, env vars, processes |
> | Single-user UI | Servers, APIs, concurrency |
>
> Node is **event-driven, non-blocking I/O** — great for I/O-heavy APIs (DB, HTTP, files), not CPU-heavy work on one thread without workers.
>
> I use Node daily for **Fastify APIs** at Atlys-style product backends.

---

## Code

```js
// Browser only
document.getElementById("app");

// Node only
import fs from "node:fs/promises";
await fs.readFile("./config.json", "utf8");
```

---

## Avoid

- Saying Node is "just JavaScript" without mentioning different globals/APIs
