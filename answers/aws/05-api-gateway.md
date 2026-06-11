# What is API Gateway?

**Target time:** 45 seconds

---

## Talk track

> **API Gateway** = managed **front door** for HTTP APIs → routes to Lambda, HTTP backends, or AWS services.
>
> **Types:**
> - **HTTP API** — cheaper, simpler, JWT authorizers, Lambda proxy  
> - **REST API** — older, more features (request validation, API keys, usage plans)  
> - **WebSocket API** — real-time connections

> **What it does:**
> - Routing `POST /v1/applications` → Lambda  
> - **Auth** — JWT/Cognito/IAM authorizer before Lambda runs  
> - **Throttling** — rate limits per stage/key  
> - **CORS** — can set at gateway (auth/05)  
> - TLS termination, custom domains

> **vs ALB:** ALB → containers/EC2; API GW → Lambda/serverless-first. Many teams use **both** — ALB for main Fastify service, API GW for webhooks/Lambda.

---

## Code

```yaml
# HTTP API → Lambda (SAM/Serverless style)
Events:
  Api:
    Type: HttpApi
    Properties:
      Path: /applications
      Method: POST
      Auth:
        Authorizer: JwtAuthorizer
```

```text
Client → API Gateway → Lambda (submit)
                     → 202 { jobId }
Background: SQS → worker Lambda (not through API GW timeout)
```

---

## Avoid

- Putting 2-minute work in sync Lambda behind API GW (29s integration timeout on REST; HTTP API similar constraints)
