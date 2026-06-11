# How do you deploy Flask — Gunicorn, uWSGI, Docker?

**Target time:** 30 seconds

---

## Talk track

> **Gunicorn** workers + reverse proxy (nginx/ALB). **Docker** image with `CMD gunicorn ...`.
>
> Health checks, env secrets, non-root user. See `flask/07`, `flask/08`.

---

## Code

```dockerfile
CMD ["gunicorn", "app:create_app()", "-w", "4", "-b", "0.0.0.0:8000"]
```
