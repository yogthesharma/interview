# Certificate pinning — tradeoffs and maintenance cost?

**Target time:** 30–45 seconds

---

## Talk track

> **Pinning** — app trusts only specific cert/public key, not full system CA store — mitigates MITM with rogue CA (corporate proxy, compromised CA).
>
> **Implementation:** `URLSessionDelegate` `urlSession(_:didReceive:completionHandler:)` compare server cert hash to pinned SPKI; or use TrustKit / Alamofire ServerTrustEvaluator.
>
> **Costs:** breaks when server rotates certs unless you pin backup keys or update app; **ops burden**; App Store apps need rotation playbook.
>
> **When:** high-security finance/health; often **not** first ship for MVP — ATS + TLS 1.2+ is baseline.
>
> **Alternative:** shorter-lived tokens, mTLS for B2B, device attestation.

---

## Tradeoffs

| Pros | Cons |
|------|------|
| Strong MITM defense | Cert rotation breaks old apps |
| Compliance story | Debugging harder behind proxies |

---

## Avoid

- Pinning without server team coordination on rotation
- Pinning HTTP cleartext endpoints (ATS should block anyway)
