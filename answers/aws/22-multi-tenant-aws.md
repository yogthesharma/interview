# What is multi-tenant architecture on AWS?

**Target time:** 60 seconds

---

## Talk track

> **Multi-tenant SaaS** — one AWS deployment serves many customers (employers). Isolation strategy is a **spectrum**:

| Model | Isolation | Cost / ops | Typical fit |
|-------|-----------|------------|-------------|
| **Shared app + shared DB** | Row-level `employerId` (auth/11) | Lowest cost | Common default |
| **Shared app + schema per tenant** | Postgres schema per employer | Medium | Regulated clients |
| **Silos** — stack per tenant | Account/VPC/database each | Highest | Enterprise / compliance |

> **Shared stack pattern (most likely):**
> - One API Gateway + Lambda fleet (or Fastify on Fargate)  
> - RDS Postgres with tenant column + optional RLS  
> - S3 prefix per tenant: `s3://docs/{employerId}/...`  
> - SQS messages include `employerId` in body  
> - JWT carries `employerId` — every handler scopes queries

> **Noisy neighbor:** rate limits per API key/tenant; reserved concurrency per critical tenant (rare).

---

## Code

```text
                    ┌─ employer: acme  ─┐
API Gateway + Lambda ─┼─ employer: beta ─┼→ Shared RDS (employer_id column)
                    └─ employer: gamma─┘
S3: acme/*  beta/*  gamma/*
IAM: app role shared; tenant isolation in APPLICATION CODE + DB policies
```

---

## Cross-ref

- `auth/11-multi-tenant-auth.md`  
- `aws/23-isolate-tenant-data.md`

---

## Avoid

- Separate AWS account per tenant unless enterprise contract requires it — ops explosion
