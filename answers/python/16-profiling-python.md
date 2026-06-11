# How do you profile slow Python code — `cProfile`, `py-spy`?

**Target time:** 45–60 seconds

---

## Talk track

> **Measure first** — don't optimize guesses. Same mindset as frontend profiling / Node latency work.
>
> **`cProfile`** — stdlib, deterministic: which functions eat cumulative time.
> - `python -m cProfile -o out.prof app.py`
> - `snakeviz out.prof` or `pstats` in REPL
>
> **`py-spy`** — **sampling** profiler, attach to **running** prod/staging process — low overhead, no code changes.
>
> **`line_profiler`** — line-by-line hot spots in dev.
>
> **Workflow:**
> 1. Reproduce slowness with realistic data size
> 2. Profile — find top 1–2 functions
> 3. Fix — algorithm, DB query (N+1), cache, batch I/O, move CPU to worker
> 4. Re-profile to confirm
>
> **API backends:** also log **slow request** middleware + DB query logging — often faster than CPU profiling.

---

## Code

```bash
# cProfile — sort by cumulative time
python -m cProfile -s cumtime script.py

# py-spy — live process (needs permissions)
py-spy top --pid 12345
py-spy record -o profile.svg --pid 12345
```

```python
# Quick inline (stdlib)
import cProfile
cProfile.run("build_report(applications)", sort="cumtime")
```

---

## Avoid

- Optimizing cold import time before fixing O(n²) loop or missing DB index
