# Context managers — `with` statement and `__enter__` / `__exit__`?

**Target time:** 30–45 seconds

---

## Talk track

> `with` guarantees **setup + teardown** even if an exception fires — the **context manager protocol**:
> - `__enter__` — acquire resource, return value bound to `as`
> - `__exit__` — cleanup; return `True` to suppress exception (rare)
>
> **Built-ins:** `open()`, locks, DB transactions.
>
> **`contextlib.contextmanager`** — write managers with `yield` instead of a class — great for quick scopes.
>
> **Why interviewers care:** files, connections, and sessions must **close/rollback** — `with` beats manual `try/finally` clutter.

---

## Code

```python
import time
from contextlib import contextmanager

# Built-in
with open("data.json") as f:
    data = f.read()

# Class-based
class db_session:
    def __enter__(self):
        self.conn = connect()
        return self.conn

    def __exit__(self, exc_type, exc, tb):
        if exc_type:
            self.conn.rollback()
        else:
            self.conn.commit()
        self.conn.close()
        return False  # don't suppress errors

# Generator style
@contextmanager
def timer(label: str):
    start = time.perf_counter()
    try:
        yield
    finally:
        print(f"{label}: {time.perf_counter() - start:.3f}s")

with timer("import_users"):
    import_users()
```

---

## Avoid

- Opening files/DB connections without `with` or explicit `finally`
