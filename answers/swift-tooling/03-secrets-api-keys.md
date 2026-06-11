# Managing secrets and API keys — xcconfig, build settings, not in repo?

**Target time:** 30–45 seconds

---

## Talk track

> **Never commit** production API keys, signing certs, or tokens to git.
>
> **Approaches:**
> - **xcconfig** (gitignored) + `INFOPLIST_KEY_` / build settings injected at compile time
> - **CI secrets** — GitHub Actions / Bitrise env vars → generate xcconfig in pipeline
> - **Backend proxy** — mobile calls your API; secrets stay server-side (best for sensitive ops)
>
> **Client keys** (Maps SDK, analytics) are extractable from IPA — treat as **public constraints** + server-side limits, not true secrets.
>
> Same as `.env` + CI on Node — `.env.example` in repo, real values in vault.

---

## Code

```xcconfig
// Secrets.xcconfig (gitignored)
API_KEY = $(API_KEY_FROM_CI)
```

```swift
// Generated or build-setting bridged
let apiKey = Bundle.main.object(forInfoDictionaryKey: "API_KEY") as? String
```

---

## Avoid

- `Secrets.swift` committed with prod keys
- Shared 1Password link in Slack as "secret management"
