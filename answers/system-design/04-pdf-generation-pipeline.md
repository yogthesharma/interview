# Design a document (PDF) generation pipeline.

**Target time:** 10–12 min

---

## Talk track

> PDFs (EOI summary, quote letter) are **CPU/memory heavy** — separate **generation pipeline** from API.

---

## Architecture

```mermaid
flowchart TD
  A[QuoteApproved event] --> Q[SQS pdf-queue]
  Q --> L[PDF Lambda / container worker]
  L --> DB[(load application data)]
  L --> T[HTML template + render]
  T --> P[headless Chrome / pdf-lib / wkhtmltopdf]
  P --> S3[(S3: employerId/appId/quote.pdf)]
  L --> DB2[Update document record]
  L --> EB[DocumentReady event]
  EB --> E[Email with presigned link]
```

---

## Flow

```
1. Trigger: application approved OR user clicks "Download PDF"
2. Enqueue { applicationId, documentType, templateVersion }
3. Worker fetches data from RDS (tenant-scoped)
4. Render HTML template with employer branding
5. Convert to PDF (Lambda: watch memory + /tmp size; heavy jobs → Fargate)
6. Upload S3 — SSE-KMS, private bucket
7. Insert documents table: s3Key, checksum, createdAt
8. Notify user — email presigned URL (expires 1h) or in-app download API
```

---

## Design choices

| Choice | When |
|--------|------|
| Lambda | Simple 1–2 page PDFs, < 30s |
| Fargate/ECS worker | Complex layouts, large census attachments |
| Template in git/S3 | Version `templateVersion` for audit |
| Async only | Always — `202 { documentId }` + poll |

---

## Security

- Presigned GET — short TTL (api/14)  
- `employerId` in key path — validate JWT matches (aws/23)  
- Virus scan if user-uploaded merges into PDF

---

## Avoid

- Generating PDF synchronously in submit API
