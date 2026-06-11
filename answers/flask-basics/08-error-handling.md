# Error handling in Flask — custom handlers, HTTP exceptions?

**Target time:** 30 seconds

---

## Talk track

> `@app.errorhandler(404)` / `@app.errorhandler(Exception)` — return JSON for APIs.
>
> Use Werkzeug `abort(404)` or raise custom domain errors mapped in handlers. Never leak tracebacks in prod.
>
> See `flask/10`, `flask-fastapi-practical/08`.

---

## Code

```python
@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": {"code": "not_found", "message": str(e)}}), 404
```
