# Write pytest tests for a Flask route using the test client and fixtures

**Target time:** 15–20 min live  
**Pattern:** factory app fixture, auth header helper, assert status + JSON

---

## Interview approach

> I'll use **`create_app("testing")`** with in-memory SQLite, a **`client` fixture** from Flask's test client, and override auth so tests don't need real JWT infra. Test happy path + 404 + 422 validation.

---

## Reference solution

```python
# tests/conftest.py
import pytest
from app import create_app
from app.extensions import db

@pytest.fixture
def app():
    app = create_app("testing")
    with app.app_context():
        db.create_all()
        yield app
        db.session.remove()
        db.drop_all()

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def auth_headers(app):
    user = seed_user(employer_id=1)
    token = make_test_token(user.id)
    return {"Authorization": f"Bearer {token}"}

# tests/test_applications.py
def test_create_application(client, auth_headers):
    res = client.post(
        "/api/v1/applications",
        json={"employee_email": "ann@example.com", "coverage_amount": 50_000},
        headers=auth_headers,
    )
    assert res.status_code == 201
    body = res.get_json()
    assert body["status"] == "draft"
    assert body["employee_email"] == "ann@example.com"

def test_create_invalid_email_returns_422(client, auth_headers):
    res = client.post(
        "/api/v1/applications",
        json={"employee_email": "not-an-email", "coverage_amount": 50_000},
        headers=auth_headers,
    )
    assert res.status_code == 422
    assert res.get_json()["error"]["code"] == "validation_error"

def test_get_missing_returns_404(client, auth_headers):
    res = client.get("/api/v1/applications/does-not-exist", headers=auth_headers)
    assert res.status_code == 404
```

---

## Done when

- [ ] `conftest.py` uses testing config + fresh DB per test module
- [ ] At least one happy path + one validation failure + one 404
- [ ] No network calls in unit tests
