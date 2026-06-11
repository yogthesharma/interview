# `typing` module — `Optional`, `Union`, `Literal`, `TypedDict`?

**Target time:** 45–60 seconds

---

## Talk track

> **Type hints** document intent + enable **mypy/pyright** — they don't enforce at runtime alone (unless Pydantic validates).
>
> | Construct | Meaning |
> |-----------|---------|
> | `Optional[str]` | `str \| None` — may be missing |
> | `Union[int, str]` | one of several types — prefer `int \| str` in 3.10+ |
> | `Literal["draft", "submitted"]` | fixed string enum |
> | `TypedDict` | dict with known keys — JSON shapes |
> | `list[str]`, `dict[str, int]` | generics — 3.9+ built-in syntax |
>
> **Modern style (3.10+):** `def f(x: str | None) -> list[str]:`
>
> **Interview tie-in:** FastAPI + Pydantic = runtime validation; hints still help IDE and reviewers.

---

## Code

```python
from typing import Literal, TypedDict

Status = Literal["draft", "submitted", "approved"]

class ApplicationDict(TypedDict):
    id: int
    status: Status
    employer_id: int

def find_by_status(
    apps: list[ApplicationDict],
    status: Status,
) -> list[ApplicationDict]:
    return [a for a in apps if a["status"] == status]

def get_region(user: dict) -> str | None:
    return user.get("region")  # Optional[str]
```

---

## Avoid

- Over-annotating every local variable — focus on public APIs and boundaries
