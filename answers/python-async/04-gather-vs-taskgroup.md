# `asyncio.gather` vs `asyncio.TaskGroup`?

**Target time:** 30–45 seconds

---

## Talk track

> **`asyncio.gather(*aws)`** — run coroutines **concurrently**, await all results. `return_exceptions=True` collects errors instead of failing fast.
>
> **`asyncio.TaskGroup`** (3.11+) — structured concurrency: child tasks tied to parent scope — if one fails, **siblings are cancelled** on exit (like `try/finally` for tasks). Safer default for new code.
>
> | | `gather` | `TaskGroup` |
> |---|----------|-------------|
> | Style | Functional batch | Structured scope |
> | Error handling | First error or `return_exceptions` | Cancels siblings on failure |
> | When | Simple parallel fetch | Parent task owns children |
>
> **Interview line:** *"For parallel API calls I'd use `gather` or `TaskGroup`; prefer `TaskGroup` when I want automatic cancellation on partial failure."*

---

## Code

```python
import asyncio

async def fetch(url: str) -> str:
    ...

# gather — classic
results = await asyncio.gather(fetch("/a"), fetch("/b"), fetch("/c"))

# TaskGroup — structured (3.11+)
async def fetch_all(urls: list[str]) -> list[str]:
    results: list[str] = []
    async with asyncio.TaskGroup() as tg:
        tasks = [tg.create_task(fetch(u)) for u in urls]
    return [t.result() for t in tasks]
```

---

## Avoid

- Creating tasks without awaiting or without a group — orphaned tasks warn in 3.11+
