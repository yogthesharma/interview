# Profiling with Instruments — Time Profiler, Allocations, Leaks, Energy?

**Target time:** 45–60 seconds

---

## Talk track

> **Instruments** — Xcode profiling suite; attach to device/simulator.
>
> **Time Profiler** — CPU hotspots; find main-thread work, heavy JSON decode, layout thrash.
>
> **Allocations** — memory churn, transient objects; pair with **Leaks** and **Memory Graph** for retain cycles.
>
> **Leaks** — heap leaks over time; delegates, timers, closures.
>
> **Energy Log** — GPS, networking, display wake — battery regressions.
>
> **Habit:** profile on **real device**; reproduce scroll jank or slow launch; fix biggest frame first.

---

## When to use which

| Symptom | Tool |
|---------|------|
| Jank / slow | Time Profiler |
| Memory growth | Allocations + Leaks |
| Battery drain | Energy |
| Mystery crash | Memory Graph + Zombies |

---

## Avoid

- Optimizing cold paths Instruments didn't flag
- Profiling only Simulator for GPU/performance-critical UI
