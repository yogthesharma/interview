# Virtual environments — `venv`, Poetry, pip-tools — your workflow?

**Target time:** 30–45 seconds

---

## Talk track

> **Problem:** system Python is shared — projects need **isolated dependencies** and reproducible installs.
>
> **`venv`** (stdlib) — `python -m venv .venv`, activate, `pip install -r requirements.txt`. Simple, universal, CI-friendly.
>
> **`pip-tools`** — `requirements.in` → compiled **pinned** `requirements.txt` for reproducible prod builds.
>
> **Poetry / uv** — `pyproject.toml` as single source: deps, scripts, lockfile. Poetry popular on teams; **uv** is fast modern alternative.
>
> **My workflow answer (honest senior IC):**
> - Clone repo → create venv or use Poetry
> - **Lockfile committed** — same versions in CI and prod
> - **Never** `pip install` globally for app deps
> - Docker image installs from lock/requirements in build stage
>
> **Parallels Node:** `venv` ≈ per-project `node_modules`; lockfile ≈ `package-lock.json`.

---

## Code

```bash
# venv + pip
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Poetry
poetry install
poetry run pytest
poetry add fastapi

# pip-tools
pip-compile requirements.in -o requirements.txt
pip-sync requirements.txt
```

---

## Avoid

- Committing `.venv/` to git
- Unpinned `requirements.txt` in production services
