# Shared mutable state across threads — locks vs actors vs serial queues?

**Target time:** 45–60 seconds

---

## Talk track

> **Problem:** multiple threads mutating same state → data races.
>
> **NSLock / os_unfair_lock** — low-level, manual, easy to deadlock or forget unlock. Use in perf-critical C/Obj-C interop pockets.
>
> **Serial `DispatchQueue`** — classic Swift pattern (`queue.async { mutate }`); works but no compile-time safety; harder to reason about `sync` deadlocks.
>
> **`actor`** — Swift-native, compiler-checked isolation; **default choice** for shared mutable app state in new code.
>
> **Immutable + copy** — value types, pass copies into tasks — no sharing (best when feasible).
>
> **Sendable** types can cross task boundaries safely.

---

## Comparison

| Tool | Pros | Cons |
|------|------|------|
| Actor | Safe, readable | `await` overhead |
| Serial queue | Familiar | Manual, no compiler help |
| Lock | Fine-grained control | Error-prone |

---

## Avoid

- Global `var cache` without protection
- `actor` doing 2-second JSON parse blocking all other actor calls — extract to `nonisolated`/`Task`
