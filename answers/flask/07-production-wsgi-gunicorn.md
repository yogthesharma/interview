# Production WSGI — Gunicorn workers, threads vs gevent?

**Target time:** 45–60 seconds

---

## Talk track

> **Flask dev server is not production** — single-threaded, no hardening. Production = **WSGI server** in front of the app.
>
> **Gunicorn** — common choice: pre-fork **workers** (processes), each runs the Flask app.
>
> **Workers (processes):** `gunicorn -w 4 "app:create_app()"` — rule of thumb `(2 × CPU) + 1`, tune with load tests. Crashed worker respawns.
>
> **Threads per worker:** `gunicorn -w 2 --threads 4` — helps **I/O-bound** sync views; watch DB pool size (`workers × threads`).
>
> **Gevent/eventlet** — monkey-patch for **many concurrent I/O** connections on fewer processes; works with some stacks, not all C extensions are greenlet-safe.
>
> **Behind reverse proxy:** nginx/ALB terminates TLS, sets timeouts, passes `X-Forwarded-For`.
>
> **Interview line:** *"I/O-bound Flask API → enough workers + connection pooling; CPU-heavy work → Celery, not more threads."*

---

## Code

```bash
# Typical production command
gunicorn "app:create_app()" \
  --bind 0.0.0.0:8000 \
  --workers 4 \
  --threads 2 \
  --timeout 30 \
  --access-logfile - \
  --error-logfile -

# Docker CMD
# CMD ["gunicorn", "app:create_app()", "-b", "0.0.0.0:8000", "-w", "4"]
```

---

## Avoid

- `flask run` in production Dockerfile
- Pool size 5 with 4 workers × 8 threads — connection exhaustion
