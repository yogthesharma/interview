# Sandboxing and entitlements on macOS — what do you need to know?

**Target time:** 45–60 seconds

---

## Talk track

> **App Sandbox** restricts what your app can access — file system, network, hardware. **Required for Mac App Store**; recommended for direct download too (Gatekeeper expectations).
>
> **Entitlements** — plist flags declaring capabilities: `com.apple.security.files.user-selected.read-write`, outgoing network, camera, etc. Request **least privilege** — Apple reviews broad entitlements.
>
> **User-selected files:** `NSOpenPanel` / `NSSavePanel` grant temporary access; persist with **security-scoped bookmarks** for reopen.
>
> **Non-sandboxed** apps (some dev tools) have full user permissions but harder distribution trust — users see warnings.
>
> **Hardened Runtime** pairs with notarization for non-Store distribution.

---

## Common entitlements

| Entitlement | Use |
|-------------|-----|
| `files.user-selected.read-write` | Open/save dialogs |
| `network.client` | API calls |
| `app-sandbox` | Enable sandbox (required for MAS) |

---

## Avoid

- Requesting full disk access without a clear need
- Assuming sandboxed app can read `~/Documents` paths without user grant
