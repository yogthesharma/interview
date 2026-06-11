# How do you isolate tenant data?

**Target time:** 60 seconds

---

## Talk track

> **Application layer (primary)** — same as auth/11, repeated for AWS context:
> - Tenant id from **JWT** — never trust body alone  
> - Every query scoped: `WHERE employer_id = :tenant`  
> - 404 not 403 for cross-tenant resource ids

> **AWS resource layer:**

| Service | Isolation pattern |
|---------|-------------------|
| **RDS** | Shared DB + `employerId` column; optional Postgres RLS |
| **DynamoDB** | PK prefix `EMP#acme` (databases/10) |
| **S3** | Key prefix `{employerId}/`; IAM condition on prefix if per-tenant roles |
| **SQS** | `employerId` in message; consumer validates before processing |
| **Logs** | Structured field `employerId` — redact in shared dashboards |
| **KMS** | Per-tenant CMK for strict compliance (heavy) |

> **IAM alone is NOT tenant isolation** — Lambda role can read whole bucket; **your code** enforces path prefix.

> **Testing:** integration tests — tenant A token cannot read tenant B S3 key or DB row.

---

## Code

```ts
// S3 get — always prefix with token tenant
const key = `${request.user.employerId}/applications/${appId}/quote.pdf`;
await s3.send(new GetObjectCommand({ Bucket: DOCS_BUCKET, Key: key }));

// DynamoDB
Key: { pk: `EMP#${employerId}`, sk: `APP#${appId}` }

// SQS consumer — reject wrong tenant
const msg = JSON.parse(record.body);
if (msg.employerId !== expectedFromApplicationRecord) throw new Error("tenant mismatch");
```

```json
// S3 bucket policy snippet — deny cross-prefix if using per-tenant IAM roles
"Condition": { "StringLike": { "s3:prefix": ["${aws:PrincipalTag/employerId}/*"] } }
```

---

## Avoid

- `GetObject` on user-supplied key without validating prefix matches JWT tenant
