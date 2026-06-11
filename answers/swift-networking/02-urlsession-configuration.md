# URLSession configuration — caching, timeouts, waitsForConnectivity?

**Target time:** 30–45 seconds

---

## Talk track

> **`URLSessionConfiguration`** — tune per use case:
>
> - **`.default`** — reasonable cache, general API
> - **`.ephemeral`** — no disk cache (sensitive)
> - **`.background`** — uploads/downloads continue when app backgrounds
>
> **`timeoutIntervalForRequest`** — per-request stall limit; **`timeoutIntervalForResource`** — total transfer cap.
>
> **`waitsForConnectivity`** — queue requests when offline, resume when network returns (iOS 11+); pair with UI offline state.
>
> **`httpMaximumConnectionsPerHost`** — throttle parallel downloads.
>
> **Cache:** `urlCache` + `requestCachePolicy` — `.returnCacheDataElseLoad` for cacheable GETs.

---

## Code

```swift
let config = URLSessionConfiguration.default
config.timeoutIntervalForRequest = 30
config.waitsForConnectivity = true
config.requestCachePolicy = .useProtocolCachePolicy
config.urlCache = URLCache(memoryCapacity: 20_000_000, diskCapacity: 100_000_000)

let session = URLSession(configuration: config)
```

---

## Avoid

- Infinite timeouts on mobile networks
- Caching POST responses with sensitive PII
