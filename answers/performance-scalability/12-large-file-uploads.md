# How do you handle large file uploads efficiently?

**Target time:** 45 seconds

---

## Talk track

> **Don't** stream huge files through your API server memory if avoidable.
>
> **Patterns:**
> - **Presigned S3 URL** — client uploads direct to S3; API only issues URL + records metadata after  
> - **Multipart upload** — chunks for very large files, resume on failure  
> - **Progress UI** on client — `XMLHttpRequest` / fetch with readable stream progress  
> - **Validate** type/size server-side on completion webhook or HEAD object  
> - **Async processing** — virus scan, PDF parse in queue after upload
>
> Atlys-style doc uploads: size limits, client validation, backend stores reference not binary in DB.

---

## Code

```ts
// 1. API returns presigned PUT URL
POST /uploads/init → { uploadUrl, fileId }

// 2. Client uploads direct to S3
await fetch(uploadUrl, { method: "PUT", body: file });

// 3. Client notifies complete
POST /uploads/{fileId}/complete
```

---

## Avoid

- `bodyParser` accepting 500MB into Node memory
