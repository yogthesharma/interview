# Application factory — why mandatory for tests and multiple configs?

**Target time:** 30–45 seconds

---

## Talk track

> **Anti-pattern:** `app = Flask(__name__)` at import time with routes registered globally — hard to test, one config, import side effects.
>
> **Factory pattern:** `create_app(config_name)` builds app, wires extensions, registers blueprints, returns `app`.
>
> **Why mandatory:**
> 1. **Tests** — `app = create_app("testing")` with in-memory DB per test class
> 2. **Environments** — `development` / `staging` / `production` classes without `if DEBUG` sprinkled everywhere
> 3. **CLI** — `flask --app "app:create_app()" run`
> 4. **Workers** — Gunicorn imports factory: `gunicorn "app:create_app()"`
>
> **Interview one-liner:** *"Factory lets me spin isolated app instances — same pattern as Fastify `buildServer()` for tests."*

---

## Code

```python
# app/__init__.py
def create_app(config_name: str = "development") -> Flask:
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    from .blueprints.applications import bp as applications_bp
    app.register_blueprint(applications_bp, url_prefix="/api/v1")

    register_error_handlers(app)
    return app

# tests/conftest.py
@pytest.fixture
def app():
    return create_app("testing")

@pytest.fixture
def client(app):
    return app.test_client()
```

---

## Avoid

- Mutating a global `app` singleton across tests — order-dependent failures
