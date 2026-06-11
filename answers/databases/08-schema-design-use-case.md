# How do you design a schema for [use case]?

**Target time:** 90 seconds (whiteboard)

---

## Talk track

> **Use case:** B2B SaaS-style **EOI / enrollment** — employer, employees, applications, quotes, plans.

> **Step 1 — entities & relationships**
> - `Employer` 1→N `Employee`  
> - `Employee` 1→N `Application` (per enrollment window)  
> - `Application` 1→N `Quote` (carrier responses)  
> - `Plan` referenced by application

> **Step 2 — keys & tenant isolation**
> - Every tenant-scoped table has `employerId` (auth/11)  
> - UUID PKs — safe in distributed APIs

> **Step 3 — state machine**
> - `Application.status`: draft → submitted → quoted → approved | rejected  
> - Timestamps: `createdAt`, `submittedAt`, `updatedAt`

> **Step 4 — indexes for access patterns**
> - List apps by employer + status: `@@index([employerId, status, createdAt])`  
> - Lookup employee by employer: `@@index([employerId, email])`

> **Step 5 — audit & soft delete**
> - `AuditLog` append-only  
> - `deletedAt` optional for compliance retention

---

## Code

```prisma
model Employer {
  id        String     @id @default(uuid())
  name      String
  employees Employee[]
}

model Employee {
  id           String        @id @default(uuid())
  employerId   String
  employer     Employer      @relation(fields: [employerId], references: [id])
  email        String
  applications Application[]

  @@unique([employerId, email])
  @@index([employerId])
}

model Application {
  id          String   @id @default(uuid())
  employerId  String
  employeeId  String
  employee    Employee @relation(fields: [employeeId], references: [id])
  planId      String
  status      String   // draft | submitted | ...
  submittedAt DateTime?
  quotes      Quote[]
  createdAt   DateTime @default(now())

  @@index([employerId, status, createdAt(sort: Desc)])
}

model Quote {
  id            String      @id @default(uuid())
  applicationId String
  application   Application @relation(fields: [applicationId], references: [id])
  carrierId     String
  premium       Decimal
  createdAt     DateTime    @default(now())
}
```

---

## Avoid

- Storing entire census blob in application row — normalize employees; attach files in S3
