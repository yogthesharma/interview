# How do you load test a service?

**Target time:** 30 seconds — honest IC level

---

## Talk track

> **Goal:** simulate **expected + peak traffic** — find breaking point, latency p95/p99, error rate under load.
>
> **Tools:** k6, Artillery, Locust, JMeter; AWS can use distributed load tests on API Gateway/Lambda in some setups.
>
> **Process:**
> 1. Define scenario (RPS, duration, endpoints mix)  
> 2. Baseline on staging  
> 3. Ramp up — watch latency, 5xx, DB throttling, Lambda concurrency  
> 4. Fix bottleneck → retest
>
> **Honest:** I've run lighter load checks and profilied APIs; not a dedicated performance engineer. I know **why** teams do it before big launches.

---

## Code (k6 sketch)

```js
import http from "k6/http";
import { check } from "k6";

export const options = { vus: 50, duration: "30s" };

export default function () {
  const res = http.get("https://staging.api.example.com/health");
  check(res, { "status 200": (r) => r.status === 200 });
}
```

---

## Avoid

- Load testing production without approval
