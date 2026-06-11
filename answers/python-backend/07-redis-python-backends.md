# Redis in Python backends — cache, rate limit, session store?

**Target time:** 45 seconds

---

## Talk track

> **Redis** — in-memory data store; common Python client `redis-py` or `aioredis` for async.
>
> **Use cases:**
> 1. **Cache** — hot reads (`GET employer:{id}:config`), TTL, cache-aside pattern
> 2. **Rate limiting** — sliding window / token bucket counters per IP or API key
> 3. **Session store** — Flask session or JWT blocklist / refresh token rotation
> 4. **Celery broker** — message queue (with RabbitMQ alternative)
> 5. **Pub/sub** — lightweight notifications (not durable log — use Kafka/SQS for that)
>
> **Cache invalidation:** on write, delete keys or short TTL + accept staleness for low-risk reads.
>
> **Honest:** most my direct caching is **React Query** client-side; I understand Redis at API layer for rate limits and sessions.

---

## Code

```python
import json
import redis

r = redis.Redis.from_url(settings.REDIS_URL, decode_responses=True)

def get_employer_config(employer_id: int) -> dict:
    key = f"employer:{employer_id}:config"
    cached = r.get(key)
    if cached:
        return json.loads(cached)
    config = load_from_db(employer_id)
    r.setex(key, 300, json.dumps(config))
    return config

def rate_limit_allow(key: str, limit: int, window_sec: int) -> bool:
    count = r.incr(key)
    if count == 1:
        r.expire(key, window_sec)
    return count <= limit
```

---

## Avoid

- Redis as primary source of truth for business data without persistence story
