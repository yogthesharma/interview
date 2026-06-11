# Which HTTP methods should be idempotent?

**Target time:** 20–30 seconds

---

## Talk track

> **By HTTP spec / safe practice:**
>
> | Method | Idempotent? |
> |--------|-------------|
> | GET, HEAD, OPTIONS | Yes (no state change) |
> | PUT | Yes — replace same state each time |
> | DELETE | Yes — deleting twice = still deleted |
> | PATCH | **Should be** — design partial updates idempotently |
> | POST | **No** by default — use Idempotency-Key for creates |
>
> **Idempotent ≠ safe** — DELETE is idempotent but not safe (changes state).

---

## Code

```http
PUT /users/1  { "name": "Ann", "role": "admin" }   # 2nd call → same result
POST /users   { "name": "Ann" }                    # 2nd call → second user unless keyed
```

---

## Avoid

- POST for updates when PUT/PATCH is clearer
