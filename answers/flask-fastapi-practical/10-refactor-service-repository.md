# Refactor fat route handler into service + repository layers

**Target time:** 20–25 min live  
**Pattern:** extract SQL and rules from route

---

## Interview approach

> I'll read the fat handler, identify **HTTP concerns** (stay in route), **business rules** (move to service), **DB access** (move to repo). Route becomes ~5 lines. Mention tests can target service without HTTP.

---

## Before (fat handler)

```python
@bp.post("/applications/<app_id>/submit")
def submit(app_id: str):
    app = Application.query.filter_by(id=app_id, employer_id=g.user.employer_id).first()
    if not app:
        return jsonify({"error": "not found"}), 404
    if app.status != "draft":
        return jsonify({"error": "already submitted"}), 409
    app.status = "submitted"
    app.submitted_at = datetime.utcnow()
    db.session.add(AuditLog(application_id=app_id, action="submitted"))
    carrier = requests.post(CARRIER_URL, json={"app_id": app_id}, timeout=10)
    carrier.raise_for_status()
    db.session.commit()
    return jsonify({"id": app.id, "status": app.status}), 200
```

## After (layered)

```python
# routes
@bp.post("/applications/<app_id>/submit")
def submit(app_id: str):
    try:
        app = application_service.submit(db.session, g.user.employer_id, app_id)
    except ApplicationNotFound:
        return error_json("not_found", 404)
    except InvalidTransition as e:
        return error_json(e.code, 409, e.message)
    return ApplicationOutSchema().dump(app), 200

# services/application_service.py
def submit(db: Session, employer_id: int, app_id: str) -> Application:
    app = application_repo.get_for_update(db, employer_id, app_id)
    if not app:
        raise ApplicationNotFound(app_id)
    if app.status != "draft":
        raise InvalidTransition("already_submitted")
    app.status = "submitted"
    app.submitted_at = utcnow()
    audit_repo.add(db, app_id, "submitted")
    carrier_client.request_quote(app_id)  # or enqueue async
    db.commit()
    return app

# repositories/application_repo.py
def get_for_update(db: Session, employer_id: int, app_id: str) -> Application | None:
    return db.execute(
        select(Application)
        .where(Application.employer_id == employer_id, Application.id == app_id)
        .with_for_update()
    ).scalar_one_or_none()
```

---

## Done when

- [ ] Route has no direct ORM/query logic
- [ ] Service owns transaction + business rules
- [ ] Repo scoped by `employer_id`
- [ ] Carrier call extracted (sync or queued — mention tradeoff)
