# How do you build a REST API with Flask (plain routes vs Flask-RESTful)?

**Target time:** 30 seconds

---

## Talk track

> **Plain routes + jsonify** — most teams today; full control, simple.
>
> **Flask-RESTful** — class-based resources — optional; some find it heavy.
>
> Either way: validation layer, consistent status codes, blueprints, no HTML errors.

---

## Code

```python
@bp.post("")
def create():
    return jsonify(app_service.create(...)), 201

@bp.get("/<id>")
def get_one(id):
    app = app_service.get(id)
    if not app:
        abort(404)
    return jsonify(app), 200
```
