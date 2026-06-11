# What is a primary key vs foreign key?

**Target time:** 30–45 seconds

---

## Talk track

> **Primary key (PK)** — unique identifier for a row in a table. One per table. Never null.  
> - Natural: email (rare — emails change)  
> - Surrogate: UUID / auto-increment `id` (common)

> **Foreign key (FK)** — column referencing **another table's PK** — enforces referential integrity.
>
> `applications.employee_id` → `employees.id`  
> Can't create application for non-existent employee.  
> **ON DELETE** behavior: `CASCADE`, `RESTRICT`, `SET NULL` — design explicitly.

> **Prisma:** `@id`, `@relation(fields: [employeeId], references: [id])`

---

## Code

```prisma
model Employee {
  id           String        @id @default(uuid())
  employerId   String
  applications Application[]
}

model Application {
  id         String   @id @default(uuid())
  employeeId String
  employee   Employee @relation(fields: [employeeId], references: [id])
  status     String
}
```

---

## Avoid

- Storing related data only as string id with no FK — orphan rows slip in
