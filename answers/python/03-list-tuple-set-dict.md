# `list` vs `tuple` vs `set` vs `dict` — when use each?

**Target time:** 45–60 seconds

---

## Talk track

> | Type | Ordered | Mutable | Duplicates | Typical use |
> |------|---------|---------|------------|-------------|
> | **list** | Yes | Yes | Yes | Sequences you change — queue, rows, build-up |
> | **tuple** | Yes | No | Yes | Fixed records, return multiples, dict keys |
> | **set** | No* | Yes | No | Membership, dedup, intersections |
> | **dict** | Yes** | Yes | Keys unique | Lookup by key — maps, JSON-like objects |
>
> \*Insertion order preserved in Py3.7+ but sets aren't indexed  
> \*\*Insertion-ordered since 3.7
>
> **Rules of thumb:**
> - Need key → value? **dict**
> - Need uniqueness or fast `in`? **set**
> - Fixed shape record (`id`, `name`)? **tuple** or dataclass
> - General ordered collection you'll edit? **list**
>
> **API design:** return `tuple` or dataclass for small fixed bundles; don't overuse dicts when schema matters — that's where **Pydantic** wins on FastAPI.

---

## Code

```python
users = [{"id": 1, "name": "Ann"}, {"id": 2, "name": "Bob"}]

by_id = {u["id"]: u for u in users}           # dict — O(1) lookup
seen_ids = {u["id"] for u in users}           # set — dedup / membership
sorted_names = tuple(sorted(u["name"] for u in users))  # tuple — immutable snapshot

# set ops
a, b = {1, 2, 3}, {3, 4}
a & b   # intersection {3}
a | b   # union {1,2,3,4}
```

---

## Avoid

- Using list when you need uniqueness — `if x not in lst` is O(n)
