# Middleware order — what runs first?

**Target time:** 30 seconds

---

## Talk track

> **Starlette middleware stack** — **last added runs first** on incoming request (onion model).
>
> **Typical order (outer → inner on request):**
> 1. **Exception/catch-all** (if custom)
> 2. **CORS** — handle preflight early
> 3. **Request ID / logging** — tag every request
> 4. **Auth** (if middleware-based — prefer Depends when possible)
> 5. **Routing → dependencies → route**
>
> **On response:** reverse order — inner middleware wraps response last.
>
> **Built-in `CORSMiddleware`** — add before custom middleware if you want CORS outermost (common).
>
> **Interview tip:** if CORS fails only in prod, often middleware order or proxy headers — not the route.

---

## Code

```python
app = FastAPI(lifespan=lifespan)

# Added first = runs last on request (inner)
app.add_middleware(RequestIdMiddleware)

# Added last = runs first on request (outer) — CORS handles OPTIONS early
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Avoid

- Auth middleware that runs after body is consumed incorrectly for OPTIONS
