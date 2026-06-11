# `is` vs `==` — when does it matter?

**Target time:** 30 seconds

---

## Talk track

> **`==`** — **value equality** — calls `__eq__` — are the contents the same?
>
> **`is`** — **identity** — same object in memory (`id(a) == id(b)`)
>
> **Use `==`** for almost everything: strings, numbers, lists, dicts.
>
> **Use `is`** only for **singletons**:
> - `x is None` (never `x == None`)
> - `x is True` / `x is False` — rare; usually `if x:` / `if not x:`
>
> **Gotcha:** small integers and interned strings may accidentally `is` equal — **don't rely on that**; use `==` for data.
>
> **Interview example:** two lists with same items — `==` True, `is` False unless same reference.

---

## Code

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

a == b   # True  — same values
a is b   # False — different objects
a is c   # True  — same object

x = None
if x is None:
    ...

# Wrong
# if x == None:  # works but unpythonic
```

---

## Avoid

- `if result is []` or comparing mutable literals with `is`
