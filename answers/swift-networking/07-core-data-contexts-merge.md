# Core Data — main context vs background context, merge policies?

**Target time:** 45–60 seconds

---

## Talk track

> **`viewContext` (main)** — UI reads/writes; must stay on **main thread**.
>
> **Background context** — `persistentContainer.newBackgroundContext()` or `performBackgroundTask` — heavy imports, batch writes off main.
>
> **Parent/child contexts** — child saves push to parent; useful for drafts; understand save chain.
>
> **Merge policies:** `NSErrorMergeByPropertyObjectTrumpMergePolicy` (common) — in-memory changes win on conflict. **`automaticallyMergesChangesFromParent`** on viewContext when background saves.
>
> **Rule:** fetch on main for UI; bulk sync on background → save → merge notifications update UI.

---

## Code

```swift
let bg = container.newBackgroundContext()
bg.mergePolicy = NSMergeByPropertyObjectTrumpMergePolicy

try await bg.perform {
    // bulk insert
    try bg.save()
}

container.viewContext.automaticallyMergesChangesFromParent = true
```

---

## Avoid

- Long blocking import on `viewContext`
- Multiple writers without merge policy — mysterious overwrites
