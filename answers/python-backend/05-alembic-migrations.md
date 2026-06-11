# Alembic migrations — autogenerate risks and review habits?

**Target time:** 45 seconds

---

## Talk track

> **Alembic** — SQLAlchemy migration tool. Revision chain: `alembic revision --autogenerate` → review → `alembic upgrade head`.
>
> **Autogenerate detects** — new tables/columns/indexes from model diff. **Does not** catch everything:
> - Renames → looks like drop + add (**data loss**)
> - Data backfills, constraint changes, partial indexes
> - Renaming column vs new column + copy
>
> **Review habits:**
> - Read every generated `upgrade()` / `downgrade()` in PR
> - **Expand/contract** for zero-downtime — add nullable column → backfill → add NOT NULL
> - Test on staging copy with prod-sized data
> - Never edit applied revisions in prod — new revision to fix
>
> **Parallels** Prisma migrate / Flyway discipline.

---

## Code

```python
# migrations/versions/abc_add_status.py
def upgrade():
    op.add_column("applications", sa.Column("status", sa.String(32), nullable=True))
    op.execute("UPDATE applications SET status = 'draft' WHERE status IS NULL")
    op.alter_column("applications", "status", nullable=False)

def downgrade():
    op.drop_column("applications", "status")
```

---

## Avoid

- Blind `autogenerate` + deploy without reading SQL
