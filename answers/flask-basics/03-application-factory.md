# What is the application factory pattern? Why use it?

**Target time:** 30 seconds

---

## Talk track

> **`create_app(config)`** builds and configures Flask instead of global `app = Flask(__name__)`.
>
> **Why:** testing with different configs, CLI, multiple environments, no import side effects.
>
> See also: `flask/02` for production detail.

---

## Code

```python
def create_app(config_name="development"):
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])
    db.init_app(app)
    app.register_blueprint(api_bp, url_prefix="/api/v1")
    return app
```
