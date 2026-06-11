# Jinja2 templating — role in a Flask app?

**Target time:** 20–30 seconds

---

## Talk track

> **Jinja2** — server-side HTML templates: `render_template("applications.html", apps=apps)`.
>
> Features: inheritance (`{% extends %}`), loops, filters, auto-escaping (XSS mitigation).
>
> **JSON APIs** skip Jinja; **admin/internal tools** and SSR pages use it.

---

## Code

```python
@app.get("/dashboard")
def dashboard():
    return render_template("dashboard.html", apps=application_service.list())
```
