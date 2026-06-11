# Common mistake: blocking I/O inside async endpoints?

**Target time:** 30 seconds

---

## Talk track

> Sync HTTP/DB/sleep in `async def` **blocks event loop** — global latency spike.
>
> Fix: async libraries, `def` route, or `run_in_executor`. See `python-async/06`, `flask-fastapi-practical/06`.

---

## Code

```python
# BAD
async def bad():
    return requests.get(url).json()

# GOOD
async def good(client: httpx.AsyncClient = Depends(get_http)):
    return (await client.get(url)).json()
```
