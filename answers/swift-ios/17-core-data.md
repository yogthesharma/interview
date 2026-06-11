# What is Core Data? When is it the right choice?

**Target time:** 30–45 seconds

---

## Talk track

> **Core Data** is Apple's **object graph persistence** framework — not just SQLite (though SQL store is common). Manages models, relationships, migrations, faulting, and background contexts.
>
> **Right choice when:** offline-first app, complex queries/filtering, large datasets, relationships (orders → line items), need merge policies across threads.
>
> **Not right when:** tiny key-value prefs (UserDefaults), secrets (Keychain), greenfield iOS 17+ with simpler needs (**SwiftData** may suffice), or server is sole source of truth with no offline requirement.
>
> **Pattern:** main `viewContext` for UI; `performBackgroundTask` or child contexts for writes.

---

## Code (mental model)

```swift
// NSManagedObject subclass + NSPersistentContainer
let container = NSPersistentContainer(name: "AppModel")
container.loadPersistentStores { _, error in /* handle */ }

let ctx = container.viewContext
let fetch = NSFetchRequest<Order>(entityName: "Order")
fetch.predicate = NSPredicate(format: "status == %@", "pending")
let orders = try ctx.fetch(fetch)
```

---

## Avoid

- Calling Core Data "an ORM only" — it's a full object lifecycle manager
- UI reads/writes on background context without merge
