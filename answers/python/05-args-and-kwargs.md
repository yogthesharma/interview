# `*args` and `**kwargs` — how do you use them cleanly?

**Target time:** 30–45 seconds

---

## Talk track

> `*args` — collects **extra positional** arguments into a **tuple**.  
> `**kwargs` — collects **extra keyword** arguments into a **dict**.
>
> **Clean uses:**
> 1. **Wrappers / decorators** — forward to inner function: `func(*args, **kwargs)`
> 2. **Flexible public API** — optional extensions without breaking callers
> 3. **Unpacking at call site** — `fn(*positional_list, **options_dict)`
>
> **Keep it clean:**
> - Prefer **explicit named parameters** for real domain args (`user_id`, `limit`)
> - Type hint: `*args: object`, `**kwargs: Any` or `Unpack` in 3.12+
> - Don't hide required fields inside `kwargs` — hard to read and validate
> - `def f(a, b, *args, **kwargs)` — only `a`, `b` are required; rest is escape hatch

---

## Code

```python
def log_and_call(fn, *args, **kwargs):
  print(f"calling {fn.__name__}")
  return fn(*args, **kwargs)

def paginate(query, *, page: int = 1, limit: int = 20, **filters):
    # explicit page/limit; open-ended filters via kwargs
    return query.filter_by(**filters).offset((page - 1) * limit).limit(limit)

opts = {"status": "active", "region": "us"}
# paginate(q, page=2, **opts)

# Unpacking
rows = [(1, "a"), (2, "b")]
# for pair in rows: process(*pair)
```

---

## Avoid

- `def create_user(**kwargs)` with ten possible keys and no schema — use a dataclass or Pydantic model
