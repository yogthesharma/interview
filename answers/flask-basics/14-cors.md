# How do you handle CORS in Flask?

**Target time:** 20 seconds

---

## Talk track

> **CORS** — browser blocks cross-origin JS unless server allows via headers.
>
> Use **flask-cors**: `CORS(app, origins=["https://app.example.com"])`.
>
> Preflight `OPTIONS` handled by extension. Don't use `*` with credentials.

---

## Code

```python
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": settings.CORS_ORIGINS}})
    return app
```
