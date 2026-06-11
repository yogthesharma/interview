# Worker threads vs child processes — awareness?

**Target time:** 30 seconds — high level

---

## Talk track

> **Problem:** CPU-heavy work (image resize, PDF parse, bcrypt many rounds) **blocks the event loop** on main thread.
>
> **Worker threads** (`worker_threads`) — **shared memory possible**, lighter, same Node process, good for **CPU-bound JS** tasks in parallel.
>
> **Child processes** (`child_process`, `fork`) — **separate process**, isolated memory, heavier startup, good for **running separate programs** or crash isolation.
>
> **Awareness level:** know when to **offload** from request thread; on the team scale often **async queue + worker Lambda** instead of threads in API process.
>
> **I haven't** built heavy worker-thread pools daily — but I know **don't block the main thread** on bcrypt/PDF in request handler.

---

## Code (sketch)

```ts
// worker_threads — CPU task off main thread
import { Worker } from "node:worker_threads";
new Worker("./hash-worker.js", { workerData: { password } });
```

---

## Avoid

- Spawning a process per HTTP request
