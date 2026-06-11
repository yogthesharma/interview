# `__init__` vs `__new__` — awareness?

**Target time:** 30 seconds  
**Level:** Awareness — rarely daily work unless metaclasses / singletons

---

## Talk track

> **`__new__(cls, ...)`** — creates the **instance** (calls `object.__new__`), runs **before** `__init__`. Returns the new object.
>
> **`__init__(self, ...)`** — **initializes** an already-created instance; no return value.
>
> **Flow:** `__new__` → `__init__`
>
> **When `__new__` matters:**
> - **Immutable types** — e.g. subclassing `str`, `tuple` (init can't replace `self`)
> - **Singleton** pattern (usually better with module-level instance)
> - **Metaclasses** — advanced, name-drop only unless asked
>
> **Interview line:** *"99% of my classes only use `__init__`. I know `__new__` is the allocator — relevant for immutables and rare patterns, not everyday Flask models."*

---

## Code

```python
class UpperStr(str):
    def __new__(cls, value: str):
        instance = super().__new__(cls, value.upper())
        return instance

class User:
    def __init__(self, name: str):
        self.name = name  # initialize attributes

s = UpperStr("hello")
assert s == "HELLO"
```

---

## Avoid

- Implementing singleton via `__new__` without thread-safety story — usually overkill
