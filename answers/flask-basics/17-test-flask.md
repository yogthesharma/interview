# How do you test a Flask app — pytest, test client?

**Target time:** 30 seconds

---

## Talk track

> **`create_app("testing")`** + in-memory DB. **`client = app.test_client()`** for HTTP without network.
>
> **pytest fixtures** for app/client/auth headers. Assert status + JSON body.
>
> See `flask-fastapi-practical/02`.

---

## Code

```python
def test_health(client):
    res = client.get("/health")
    assert res.status_code == 200
```
