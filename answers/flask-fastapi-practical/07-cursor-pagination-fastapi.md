# Implement cursor-based pagination in FastAPI

**Target time:** 20–25 min live  
**Pattern:** opaque cursor, `limit+1` has-more check, stable sort

---

## Interview approach

> Cursor pagination uses a **stable sort key** (usually `created_at, id`) and an opaque **cursor** from the client — better than offset for large tables. I'll accept `?limit=20&cursor=...`, fetch `limit+1` rows, return `items` + `next_cursor` if more exist.

---

## Reference solution

```python
from base64 import urlsafe_b64encode, urlsafe_b64decode
from datetime import datetime
from pydantic import BaseModel

class Page(BaseModel):
    items: list[ApplicationOut]
    next_cursor: str | None

def encode_cursor(created_at: datetime, id: str) -> str:
    raw = f"{created_at.isoformat()}|{id}"
    return urlsafe_b64encode(raw.encode()).decode()

def decode_cursor(cursor: str) -> tuple[datetime, str]:
    created_at_str, id_ = urlsafe_b64decode(cursor.encode()).decode().split("|", 1)
    return datetime.fromisoformat(created_at_str), id_

@router.get("", response_model=Page)
def list_applications(
    limit: int = Query(20, ge=1, le=100),
    cursor: str | None = None,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    stmt = (
        select(Application)
        .where(Application.employer_id == user.employer_id)
        .order_by(Application.created_at.desc(), Application.id.desc())
    )
    if cursor:
        c_at, c_id = decode_cursor(cursor)
        stmt = stmt.where(
            (Application.created_at < c_at)
            | ((Application.created_at == c_at) & (Application.id < c_id))
        )

    rows = db.execute(stmt.limit(limit + 1)).scalars().all()
    has_more = len(rows) > limit
    items = rows[:limit]
    next_cursor = None
    if has_more:
        last = items[-1]
        next_cursor = encode_cursor(last.created_at, last.id)

    return Page(items=items, next_cursor=next_cursor)
```

---

## Done when

- [ ] Stable sort (tie-breaker column)
- [ ] No `OFFSET` for deep pages
- [ ] `next_cursor` null on last page
