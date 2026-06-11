# Lightweight migrations vs heavyweight Core Data migrations?

**Target time:** 30–45 seconds

---

## Talk track

> **Lightweight (automatic)** — add optional attribute, add entity, add relationship with defaults — Core Data infers mapping model. Enable `shouldMigrateStoreAutomatically` + `shouldInferMappingModelAutomatically`.
>
> **Heavyweight** — rename without mapping, change attribute type, split entities, required non-default fields on existing rows — need **custom `NSMappingModel`** or **manual migration** (export/import, versioned stores).
>
> **Planning:** version model (`OrderModel v2`), test migration on real user DB snapshot in CI, backup before destructive change.
>
> **SwiftData:** schema migration APIs improving — still plan schema changes carefully.

---

## Code

```swift
let description = container.persistentStoreDescriptions.first!
description.shouldMigrateStoreAutomatically = true
description.shouldInferMappingModelAutomatically = true
```

---

## Avoid

- Renaming properties without mapping model — silent data loss
- Shipping migration never tested on large production store
