# What is a correlation / request ID?

**Target time:** 20–30 seconds

---

## Talk track

> A **correlation ID** (request ID) is a **unique ID per incoming request** that follows the call through your system — API → queue → worker → downstream service.
>
> You generate it at the edge (API Gateway / first Lambda), pass it in **headers** (`X-Request-Id`) and include it in **every log line** for that request.
>
> **Why:** when something fails, you search one ID and see the **full story** across services instead of guessing which logs belong together.
>
> I've used this pattern debugging Atlys visa flows — frontend error + backend log tied by request id or trace id.

---

## Avoid

- Confusing with user ID or session ID only
