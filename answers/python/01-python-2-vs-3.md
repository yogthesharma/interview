# Python 2 vs 3 — anything still relevant today?

**Target time:** 20–30 seconds  
**Level:** Awareness — not a deep history lesson

---

## Talk track

> **Python 2 reached end of life in January 2020** — no security fixes since. Everything new is **Python 3** (today usually **3.11+** or **3.12+** on teams shipping FastAPI/Flask).
>
> **Why interviewers still ask:** brownfield maintenance, reading old blog posts, and knowing **breaking changes** that explain modern idioms:
> - `print` is a function — `print("hi")`
> - `/` is true division — `3 / 2 == 1.5`
> - `str` and `bytes` are distinct — encode/decode explicitly
> - Iterators everywhere — `range()` returns an object, not a list
>
> **Interview line:** *"I only write Python 3. I know 2 is legacy — if I touch old code I'd migrate or isolate it, not extend it."*

---

## Code

```python
# Python 3 — text vs bytes (common migration pain from Py2)
name = "Yog"
raw = name.encode("utf-8")      # bytes
again = raw.decode("utf-8")     # str

# Integer division clarity
assert 3 / 2 == 1.5
assert 3 // 2 == 1
```

---

## Avoid

- Claiming you still ship Python 2 in greenfield work
- Long nostalgic Py2 vs Py3 debate — keep it practical
