# Performance and memory considerations for desktop apps vs mobile?

**Target time:** 30–45 seconds

---

## Talk track

> **Desktop has more RAM and CPU** — but users open **many windows**, huge files, and leave apps running for days. Leaks compound.
>
> **Differences vs mobile:**
> - **No aggressive suspend** — background timers and sync keep running; profile idle CPU
> - **Larger data sets** — virtualize tables (`NSTableView`/`OutlineView`, lazy SwiftUI), stream files don't load 500MB JSON into memory
> - **Main thread** — still sacred for UI; offload parsing, indexing, thumbnails to background queues/actors
> - **Memory pressure** less common but ** Instruments** still essential for long sessions
>
> **Mac-specific:** efficient thumbnail generation, incremental save for documents, cancel work when window closes.
>
> Parallels **virtualized-react** thinking — render only what's visible, measure with profilers.

---

## Code

```swift
// Cancel work when document window closes
.task(id: documentID) {
    await indexDocument()
}
.onDisappear {
    indexer.cancel(documentID)
}
```

---

## Avoid

- Assuming desktop = unlimited memory
- Loading entire directories into memory for file browsers
