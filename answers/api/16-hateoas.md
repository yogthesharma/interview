# What is HATEOAS?

**Target time:** 30 seconds

---

## Talk track

> **HATEOAS** (Hypermedia as the Engine of Application State) — REST responses include **links** telling the client **what actions are available next**, not hard-coded URLs in the app.
>
> Example: GET application returns `_links: { submit: { href: "/applications/42/submit" } }` only when status is `draft`.
>
> **Reality:** most production APIs skip full HATEOAS — clients use **documented OpenAPI** + fixed routes. Pragmatic compromise: optional `links` for discoverability or **HAL/JSON:API** style in public platforms.
>
> Know the term for interviews; don't over-sell unless building hypermedia-driven clients.

---

## Code

```json
{
  "id": "app_42",
  "status": "draft",
  "_links": {
    "self": { "href": "/v1/applications/42" },
    "submit": { "href": "/v1/applications/42/submit", "method": "POST" }
  }
}
```

---

## Avoid

- Claiming your API is "fully REST" only because of HATEOAS links nobody uses
