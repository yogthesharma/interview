# Add Alembic migration for a new column with safe deploy thinking

**Target time:** 10–15 min discussion + sketch  
**Pattern:** expand → backfill → contract (zero-downtime friendly)

---

## Interview approach

> For a new **NOT NULL** column on a live table I'd **expand**: add nullable column → deploy app that writes new field → **backfill** existing rows → deploy app that reads it → **contract**: set NOT NULL + default if needed. I'll show the Alembic `upgrade()` steps and mention rollback.

---

## Reference solution

```python
"""add priority to applications

Revision ID: abc123
"""
from alembic import op
import sqlalchemy as sa

revision = "abc123"
down_revision = "prev456"

def upgrade():
    # Step 1 — expand: nullable column
    op.add_column(
        "applications",
        sa.Column("priority", sa.String(length=16), nullable=True),
    )

    # Step 2 — backfill (batch in prod for huge tables)
    op.execute("UPDATE applications SET priority = 'normal' WHERE priority IS NULL")

    # Step 3 — contract: enforce NOT NULL
    op.alter_column("applications", "priority", nullable=False)

def downgrade():
    op.drop_column("applications", "priority")
```

**Talk track extras:**
- Huge table → batched `UPDATE ... WHERE id BETWEEN` in maintenance window or background job
- **Don't** rename via autogenerate blindly — manual migration
- Deploy order: migration before code that **requires** column, or code tolerant of NULL first

---

## Done when

- [ ] Explained expand/backfill/contract
- [ ] `upgrade()` and `downgrade()` both defined
- [ ] Mentioned reviewing autogenerate output
