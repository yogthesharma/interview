# What is Flask? When would you choose it over Django or FastAPI?

**Target time:** 45 seconds

---

## Talk track

> **Flask** is a lightweight **WSGI** Python web framework — minimal core, you add what you need via extensions.
>
> **Choose Flask when:** small/medium APIs or server-rendered apps, team wants **flexibility**, brownfield WSGI, Jinja templates, simple REST without heavy framework opinions.
>
> **Choose Django when:** batteries-included admin, ORM, auth, CMS-style apps, large convention-driven team.
>
> **Choose FastAPI when:** async APIs, automatic OpenAPI, Pydantic validation, greenfield JSON services.
>
> **Interview line:** *"Flask is my pick for pragmatic WSGI services; FastAPI when async + schema-first APIs matter."*

---

## Code

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.get("/health")
def health():
    return jsonify({"status": "ok"})
```

---

## Avoid

- Calling Flask "only for prototypes" — many production APIs run on Flask + Gunicorn
