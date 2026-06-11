# CDN — when do you need one?

**Target time:** 30 seconds

---

## Talk track

> **CDN** (CloudFront, Cloudflare) serves content from **edge locations** close to users — lower latency, less load on origin.
>
> **Use when:**
> - Global users downloading **static assets** (JS, CSS, images, fonts)  
> - High traffic on **cacheable GET** content  
> - Need **DDoS protection / TLS at edge**
>
> **Skip / less critical:** tiny internal admin app with 50 users in one region; highly dynamic personalized API responses (cache carefully or don't).
>
> Typical setup: S3 + CloudFront for frontend build; API stays on origin unless cacheable public reads.

---

## Code

```html
<!-- Built assets with hashed filenames — safe long cache at CDN -->
<script src="https://d111111.cloudfront.net/assets/index-a1b2c3.js"></script>
```

---

## Avoid

- CDN-caching authenticated API responses without Vary/cache key discipline
