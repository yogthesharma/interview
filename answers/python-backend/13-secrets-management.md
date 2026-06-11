# Secrets management — env vars, AWS Secrets Manager, not in code?

**Target time:** 30–45 seconds

---

## Talk track

> **Never commit secrets** — API keys, `DATABASE_URL` with password, JWT signing keys, carrier credentials.
>
> **Layers:**
> 1. **Local dev** — `.env` gitignored, `python-dotenv` or direnv
> 2. **CI/CD** — platform secret store (GitHub Actions secrets)
> 3. **Prod** — env injected by ECS/k8s; **AWS Secrets Manager** or **Parameter Store** for rotation
> 4. **Load at startup** — pydantic `Settings` from env; fail fast if missing
>
> **Boson parallel:** `doctor` / pre-commit checks for leaked `.env` — same discipline.
>
> **Don't** log secrets; redact in error reports. **Separate** dev/staging/prod keys.

---

## Code

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    jwt_secret: str
    carrier_api_key: str

    model_config = {"env_file": ".env", "extra": "ignore"}

settings = Settings()  # raises if required vars missing
```

```bash
# Prod — injected, not in image
# DATABASE_URL=postgresql://...
# JWT_SECRET=...
```

---

## Avoid

- `SECRET_KEY = "changeme"` in git; secrets in Alembic revision files
