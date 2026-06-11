# Shallow copy vs deep copy?

**Target time:** 30–45 seconds

---

## Talk track

> **Assignment** (`b = a`) — same object, no copy.
>
> **Shallow copy** — new outer container, **inner objects shared**: `list.copy()`, `copy.copy()`, `dict.copy()`, slice `[:]`.
>
> **Deep copy** — recursive copy of nested structure: `copy.deepcopy()`.
>
> **When shallow is enough:** flat list of ints/strings — immutables inside.
>
> **When you need deep:** list of dicts, nested configs — mutating copy must not affect original.
>
> **Practical API habit:** return `dataclasses.replace()` or model copies instead of mutating inputs.

---

## Code

```python
import copy

original = [{"id": 1, "tags": ["a"]}]
shallow = original.copy()      # or list(original)
deep = copy.deepcopy(original)

shallow[0]["tags"].append("b")
# original[0]["tags"] is now ["a", "b"] — nested shared!

original2 = [{"id": 1, "tags": ["a"]}]
deep2 = copy.deepcopy(original2)
deep2[0]["tags"].append("b")
# original2 unchanged
```

---

## Avoid

- `deepcopy` on huge graphs or objects with locks/connections — copy manually or immutable models
