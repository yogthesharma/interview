# How do you handle file uploads in APIs?

**Target time:** 45 seconds

---

## Talk track

> **Two patterns:**
>
> **1. Direct upload (multipart)** — `multipart/form-data` for small files (< few MB). Fastify `@fastify/multipart` — stream to disk/S3, validate MIME + size server-side.
>
> **2. Presigned URL (preferred at scale)** — API returns short-lived **S3 presigned PUT URL**; client uploads **directly to S3**; callback/webhook or `POST /documents` with `s3Key` to attach metadata.
>
> **Why presigned:** keeps API servers off the hot path, handles large PDFs (EOI evidence, census files).
>
> **Security:** virus scan, content-type sniffing, max size, auth on metadata endpoint, private bucket.

---

## Code

```ts
// Presigned flow
POST /v1/documents/upload-url
{ "filename": "census.csv", "contentType": "text/csv" }
→ { "uploadUrl": "https://s3...", "documentId": "doc_1", "expiresIn": 300 }

// Client PUTs file to uploadUrl, then:
POST /v1/applications/42/documents
{ "documentId": "doc_1" }
```

```ts
// Multipart (small)
const data = await request.file();
await pipeline(data.file, createWriteStream(path));
```

---

## Avoid

- Loading entire 50MB file into memory (`buffer entire file`)
