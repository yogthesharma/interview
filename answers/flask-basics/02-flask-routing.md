# How does Flask routing work?

**Target time:** 30 seconds

---

## Talk track

> Routes map **URL + HTTP method** → view function via `@app.route` or `@app.get/post`.
>
> **Path variables:** `/users/<int:user_id>`. **Methods:** `methods=["GET","POST"]`.
>
> **Return:** string, dict (JSON if jsonify), tuple `(body, status)`, or `Response`.
>
> **Blueprints** add URL prefixes — register on app.

---

## Code

```python
@app.get("/api/v1/applications/<app_id>")
def get_application(app_id: str):
    return {"id": app_id}, 200

@app.post("/api/v1/applications")
def create_application():
    data = request.get_json()
    ...
```
