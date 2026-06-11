# Configuration per environment — dev/staging/prod patterns?

**Target time:** 30–45 seconds

---

## Talk track

> **12-factor:** config in **environment**, not code. `app.config.from_object()` or `from_mapping()`.
>
> **Pattern:**
> - `config.py` — `DevelopmentConfig`, `TestingConfig`, `ProductionConfig` classes
> - Secrets from **env vars** — `DATABASE_URL`, `SECRET_KEY`, `REDIS_URL`
> - `.env` locally via `python-dotenv` — **gitignored**
> - `FLASK_ENV` / `APP_CONFIG` selects class in factory
>
> **Production:** inject env in ECS/k8s/Docker Compose; sensitive values in Secrets Manager.
>
> **Validate at startup** — fail if `SECRET_KEY` missing in prod, not on first login.
>
> **Same habit as Node:** Zod/env-schema at boot — I treat Flask config the same way.

---

## Code

```python
import os

class BaseConfig:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ["SECRET_KEY"]

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///dev.db")

class TestingConfig(BaseConfig):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"

class ProductionConfig(BaseConfig):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]

config_by_name = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,
    "production": ProductionConfig,
}
```

---

## Avoid

- `SECRET_KEY = "dev-secret"` committed in `config.py` for production
