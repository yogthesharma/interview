# How do you handle background tasks on iOS?

**Target time:** 30–45 seconds

---

## Talk track

> iOS is aggressive about suspending apps. Options depend on **work type**:
>
> 1. **`BGAppRefreshTask`** — periodic lightweight refresh (system schedules; not guaranteed)
> 2. **`BGProcessingTask`** — longer work (sync, ML) when device is idle/charging
> 3. **`URLSession` background configuration** — uploads/downloads continue after app backgrounds
> 4. **`beginBackgroundTask`** — short grace period (~30s) to finish critical work on background
> 5. **Push notification** with `content-available` — silent push wakes app briefly
>
> Register tasks in `AppDelegate`/`SceneDelegate`, declare **Background Modes** capability, always call `setTaskCompleted(success:)`.

---

## Code

```swift
// Short grace period
var taskID = UIApplication.shared.beginBackgroundTask {
    UIApplication.shared.endBackgroundTask(taskID)
}
defer { UIApplication.shared.endBackgroundTask(taskID) }
await savePendingChanges()
```

---

## Avoid

- Expecting reliable timers in background without background modes
- Long sync jobs without `BGProcessingTask` — iOS will kill the app
