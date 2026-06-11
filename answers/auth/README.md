# Authentication & security (high level)

Spoken `.md` answers — rehearse **Talk track** + **Flow** sections out loud.  
Each file has step-by-step request flows + mermaid diagrams where useful.  
Fastify + B2B multi-tenant angle. Maps to `questions.md` § Authentication & security (12 questions).

## Read in this order (auth flows build on each other)

```
01 JWT login + per-request verify
  → 02 session vs JWT decision
  → 03 where client stores tokens
  → 04 refresh when access expires
  → 05 CORS (browser + cookies)
  → 11 tenant scope on every query
  → 12 RBAC middleware chain

06–10 security layers on the same request path (SQLi, XSS, CSRF, secrets)
```

| File | Question |
|------|----------|
| `01` | JWT authentication |
| `02` | JWT vs session cookies |
| `03` | Where to store tokens (frontend) |
| `04` | Refresh token flow |
| `05` | CORS |
| `06` | SQL injection prevention |
| `07` | Sanitize user input |
| `08` | XSS prevention |
| `09` | CSRF |
| `10` | Secrets in code |
| `11` | Multi-tenant auth isolation |
| `12` | Role-based access control |

**Cross-ref:** `api/04-status-400-401-403-404-500.md`, `node/09-process-env-best-practices.md`

**Next:** `databases/` (18) — or optional Fastify `auth/server` runnable demo.
