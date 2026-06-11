# REST vs GraphQL — tradeoffs?

**Target time:** 45 seconds

---

## Talk track

> **REST**
> - Simple resources + HTTP caching  
> - Great for **public/B2B APIs**, mobile clients with known screens  
> - Over-fetching / multiple round trips if UI needs many resources

> **GraphQL**
> - Client asks for **exact shape** in one request  
> - Great for **complex UIs**, many clients with different data needs  
> - Harder caching (POST to single endpoint), N+1 resolver risk, complexity at scale

> **This role / my experience:** **REST + React Query** on product UIs — pragmatic. GraphQL shines when many client types need flexible queries (marketplaces, big mobile apps).
>
> **Pick REST** when integrators want stable contracts; **GraphQL** when you own the client and query flexibility dominates.

---

## Code

```graphql
# GraphQL — one request, shaped response
query { application(id: "42") { id status employee { name } } }
```

```http
# REST — may need 2 calls or accept over-fetch
GET /applications/42
GET /employees/e1
```

---

## Avoid

- "GraphQL is always better" — operational cost is real
