# Background tasks vs Celery for long-running work?

**Target time:** 30 seconds

---

## Talk track

> **`BackgroundTasks`** — quick post-response work, same process, not durable.
>
> **Celery** — durable queue, retries, scale workers. See `fastapi/08`, `python-async/10`.

---

## Code

```python
@router.post("/notify")
def notify(background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, ...)
```
