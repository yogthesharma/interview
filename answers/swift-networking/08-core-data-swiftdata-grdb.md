# Core Data vs SwiftData vs SQLite/GRDB — tradeoffs?

**Target time:** 45–60 seconds

---

## Talk track

> **Core Data** — mature, relationships, migrations, iCloud (complex), UIKit-era patterns; learning curve; object graph overhead.
>
> **SwiftData** — Swift-native (iOS 17+), `@Model`, SwiftUI integration, simpler happy path; younger — advanced migrations/queries still evolving.
>
> **SQLite / GRDB** — SQL control, predictable performance, good for **sync engines**, event logs, read-heavy analytics; more manual schema work.
>
> **Pick Core Data:** large existing stack, complex object graph.
> **Pick SwiftData:** greenfield iOS 17+ with SwiftUI.
> **Pick GRDB:** need SQL, fine-grained migrations, cross-platform Rust/SQLite mindset (like Boson locally).

---

## Comparison

| | Core Data | SwiftData | GRDB |
|---|-----------|-----------|------|
| Ergonomics | Medium | High | Lower |
| Maturity | High | Growing | High |
| SwiftUI | OK | Great | Manual |

---

## Avoid

- Core Data for trivial key-value prefs
- SwiftData when min deployment target is iOS 15
