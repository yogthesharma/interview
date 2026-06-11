# Push notifications — high-level flow?

**Target time:** 45–60 seconds

---

## Talk track

> **APNs** (Apple Push Notification service) delivers payloads to devices — app doesn't poll.
>
> **Flow:**
> 1. Enable **Push Notifications** capability + request user permission (`UNUserNotificationCenter`)
> 2. App registers with APNs → receives **device token**
> 3. Send token to **your backend** (per user/device)
> 4. Backend calls APNs with cert/key (.p8 Auth Key) + payload
> 5. APNs delivers to device — **foreground** (delegate shows banner), **background** (silent `content-available`), or **tapped** (deep link)
>
> **Types:** alert (user-visible), background refresh, VoIP (separate path).
>
> **Production:** handle token refresh, unsubscribe on logout, idempotent server sends, don't put secrets in payload.

---

## Code

```swift
UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, _ in
    guard granted else { return }
    DispatchQueue.main.async { UIApplication.shared.registerForRemoteNotifications() }
}

// AppDelegate — forward token to backend
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    let token = deviceToken.map { String(format: "%02x", $0) }.joined()
    api.registerDevice(token: token)
}
```

---

## Avoid

- Assuming simulator always works for push (needs real device)
- Storing PII in notification payload — it's not encrypted end-to-end on lock screen
