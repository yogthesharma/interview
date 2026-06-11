# How do you layer a Flask app — routes, services, repositories?

**Target time:** 45–60 seconds

---

## Talk track

> **Layered, boring, clear** — same idea as Fastify/Express projects I've shipped:
>
> ```
> app/
>   __init__.py      # application factory
>   blueprints/      # HTTP adapters by domain
>   services/        # business rules, orchestration
>   repositories/    # DB queries (SQLAlchemy)
>   models/          # ORM models
>   schemas/         # Marshmallow / Pydantic for I/O
>   extensions.py    # db, migrate, login — init once
>   config.py
> ```
>
> **Blueprint (route)** — parse input, auth check, call service, map to HTTP status. **No SQL in the route.**
>
> **Service** — "submit application", "request quote" — transactions, validation, calls repo + external APIs.
>
> **Repository** — `get_by_id`, `list_for_employer` — keeps ORM queries in one place, easy to mock in tests.
>
> **Why hireable:** juniors dump logic in views; seniors keep routes thin so you can test business rules without `test_client` for everything.

---

## Code

```python
# blueprints/applications.py
@bp.post("/applications")
def create_application():
    data = CreateApplicationSchema().load(request.get_json())
    app = application_service.create(g.current_user.employer_id, data)
    return ApplicationOutSchema().dump(app), 201

# services/application_service.py
def create(employer_id: int, data: dict) -> Application:
    if not employer_repo.is_active(employer_id):
        raise DomainError("employer inactive")
    return application_repo.insert(employer_id=employer_id, **data)

# repositories/application_repo.py
def insert(**kwargs) -> Application:
    app = Application(**kwargs)
    db.session.add(app)
    db.session.flush()
    return app
```

---

## Avoid

- 500-line `views.py` with raw SQL and carrier API calls mixed together
