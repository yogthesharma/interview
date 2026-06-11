# GET vs POST vs PUT vs PATCH vs DELETE?

**Target time:** 45 seconds

---

## Talk track

| Method | Purpose | Body | Safe | Idempotent |
|--------|---------|------|------|------------|
| **GET** | Read resource(s) | No | Yes | Yes |
| **POST** | Create, action, submit | Yes | No | No* |
| **PUT** | Replace entire resource | Yes | No | Yes |
| **PATCH** | Partial update | Yes | No | Often yes |
| **DELETE** | Remove | Rare | No | Yes |

> **GET** — never change server state; cacheable.  
> **POST** — create (`POST /applications`) or commands (`POST /applications/42/submit`).  
> **PUT** — full replace — client sends whole object.  
> **PATCH** — only changed fields (`{ "status": "submitted" }`).  
> **DELETE** — remove resource.
>
> *POST idempotency can be added with **Idempotency-Key** header.

---

## Code

```http
GET    /v1/applications?page=1
POST   /v1/applications              { "employeeId": "e1", "planId": "p1" }
PUT    /v1/applications/42           { full resource }
PATCH  /v1/applications/42           { "status": "approved" }
DELETE /v1/applications/42
```

---

## Avoid

- GET with side effects (`GET /deleteUser?id=1`)
