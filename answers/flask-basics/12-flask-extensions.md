# Common Flask extensions — SQLAlchemy, Migrate, Login, WTF?

**Target time:** 30 seconds

---

## Talk track

> | Extension | Purpose |
> |-----------|---------|
> | **Flask-SQLAlchemy** | ORM + session integration |
> | **Flask-Migrate** | Alembic migrations wrapper |
> | **Flask-Login** | Session user management |
> | **Flask-WTF** | Forms + CSRF |
> | **Flask-CORS** | CORS headers |
>
> Initialize in factory: `db.init_app(app)`.

---

## Code

```python
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    db.init_app(app)
    migrate.init_app(app, db)
    return app
```
