# Mutable vs immutable types — examples and pitfalls?

**Target time:** 30–45 seconds

---

## Talk track

> **Immutable** — can't change in place after creation; operations create **new** objects: `int`, `float`, `str`, `tuple`, `frozenset`, `bytes`.
>
> **Mutable** — can change contents in place: `list`, `dict`, `set`, most custom classes.
>
> **Why it matters in interviews:**
> 1. **Default argument trap** — `def f(items=[])` mutates the same list across calls
> 2. **Shared references** — passing a list into a function; callee appends → caller sees it
> 3. **Hashability** — only immutable types can be dict keys / set members (`tuple` yes, `list` no)
> 4. **Thread safety** — immutables are safer to share; mutables need locks or discipline
>
> **Fix habits:** `None` defaults + copy, `tuple` for fixed records, don't mutate inputs unless API says so.

---

## Code

```python
# Pitfall: mutable default
def bad(page=1, tags=[]):
    tags.append(page)  # same list object every call!
    return tags

def good(page=1, tags=None):
    tags = tags or []
    tags = [*tags, page]  # or tags.copy()
    return tags

# Immutable str — "change" creates new object
s = "hello"
s.upper()   # new str; s unchanged

# dict keys
key = ("user", 42)   # OK — tuple is immutable
# key = ["user", 42]  # TypeError: unhashable
```

---

## Avoid

- Saying "everything in Python is passed by reference" without explaining object identity vs assignment
