# How do you manage configuration and environment variables in Flask?

**Target time:** 30 seconds

---

## Talk track

> **12-factor:** config via environment. `app.config.from_object(DevelopmentConfig)` or `from_mapping()`.
>
> Local `.env` gitignored; prod injects `DATABASE_URL`, `SECRET_KEY`. Fail at startup if missing in prod.
>
> See `flask/06`, `python-backend/13`.

---

## Code

```python
class ProductionConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]
```
