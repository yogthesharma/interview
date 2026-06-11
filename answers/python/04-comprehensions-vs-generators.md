# List/dict comprehensions vs generator expressions — memory tradeoff?

**Target time:** 30–45 seconds

---

## Talk track

> **Comprehension** (`[...]`, `{...}`, `{k: v ...}`) — **eager**: builds the whole collection in memory immediately.
>
> **Generator expression** (`(...)` without brackets in a function arg, or `(...)` alone) — **lazy**: yields one item at a time, constant memory for large streams.
>
> **When eager:** small/medium data, need length, reuse multiple times, index access.
>
> **When lazy:** huge files, DB cursors, pipelines — `sum(x * 2 for x in huge)`, log parsing, batch processing.
>
> **Generator function** (`yield`) — same idea, more readable for multi-step producers.
>
> **Interview one-liner:** *"Comprehensions for clarity on small data; generators when scale matters."*

---

## Code

```python
# Eager — whole list in RAM
squares = [n * n for n in range(1_000_000)]

# Lazy generator — one int at a time
gen = (n * n for n in range(1_000_000))
total = sum(gen)  # no million-item list allocated

# Dict comprehension
by_status = {app["id"]: app["status"] for app in applications}

# Generator function
def read_lines(path):
    with open(path) as f:
        for line in f:
            yield line.strip()
```

---

## Avoid

- Wrapping everything in list() and defeating laziness: `list(x for x in huge)` when you only iterate once
