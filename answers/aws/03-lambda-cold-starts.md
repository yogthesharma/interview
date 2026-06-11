# What are Lambda cold starts?

**Target time:** 45 seconds

---

## Talk track

> **Cold start** = new execution environment must **init** before your handler runs:
> 1. Download deployment package  
> 2. Start runtime (Node)  
> 3. Run top-level imports / DB client init  
> 4. Then handler executes

> **Warm start** = AWS **reuses** container → skip 1–3 → faster.

> **What makes cold starts worse:** large bundle, heavy imports (full AWS SDK, Prisma in Lambda), VPC-attached Lambda (ENI setup), big memory not always helping init time.

> **Mitigations:**
> - **Provisioned concurrency** — keep N warm instances (cost)  
> - Smaller bundle — esbuild, tree-shake, `@aws-sdk/client-*` per service  
> - Lazy-init DB outside handler but reuse on warm container  
> - Split: API on API GW + **Fastify on Fargate** for latency-sensitive paths

> **Interview:** cold starts matter for **user-facing sync APIs**; often OK for **async SQS workers**.

---

## Code

```ts
// Reuse client across warm invocations
let prisma: PrismaClient | undefined;

export const handler = async (event) => {
  if (!prisma) prisma = new PrismaClient(); // init once per container
  // ...
};
```

---

## Avoid

- "Lambda is always slow" — warm path is fine; measure P99 with cold vs provisioned
