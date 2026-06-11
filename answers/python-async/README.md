# Python — async & concurrency

Spoken `.md` answers — rehearse **Talk track** out loud. Inline Python examples.  
Maps to `questions.md` § Python — async & concurrency (technical) (10 questions).

| File | Question |
|------|----------|
| `01` | `async`/`await` vs threads |
| `02` | `asyncio` event loop basics |
| `03` | `asyncio` vs `threading` vs `multiprocessing` |
| `04` | `asyncio.gather` vs `TaskGroup` |
| `05` | `run_in_executor` for blocking code |
| `06` | Blocking the event loop (sync DB / `requests`) |
| `07` | `aiohttp` / `httpx` vs `requests` |
| `08` | Semaphores and connection limits |
| `09` | Testing async code — `pytest-asyncio` |
| `10` | Celery workers vs in-process async |

**Your angle:** Same mental model as Node event loop + FastAPI async endpoints — honest about Python-specific pitfalls (blocking ORM, GIL).

**Next:** `fastapi/`
