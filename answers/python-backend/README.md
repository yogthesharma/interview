# Python backend — persistence, jobs & ops

Spoken `.md` answers — rehearse **Talk track** out loud. SQLAlchemy, Celery, Redis, ops patterns.  
Maps to `questions.md` § Python backend — persistence, jobs & ops (technical) (14 questions).

| File | Question |
|------|----------|
| `01` | SQLAlchemy 2.0 — `select()`, flush vs commit |
| `02` | Sync vs async SQLAlchemy + FastAPI |
| `03` | Session per request |
| `04` | N+1 queries in ORM |
| `05` | Alembic migrations |
| `06` | Raw SQL vs ORM |
| `07` | Redis use cases |
| `08` | Celery architecture |
| `09` | Idempotent Celery tasks |
| `10` | Connection pooling |
| `11` | Transaction boundaries |
| `12` | DB deadlocks and retries |
| `13` | Secrets management |
| `14` | Observability for Python APIs |

**Your angle:** Same data discipline as **Prisma/Postgres at Atlys** — ORM syntax differs, footguns (N+1, pools) are identical.

**Python stack prep complete** — see `flask-fastapi-practical/` for live coding drills.
