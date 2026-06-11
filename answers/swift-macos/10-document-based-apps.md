# Document-based apps — NSDocument or SwiftUI equivalents?

**Target time:** 30–45 seconds

---

## Talk track

> **Document-based apps** — one file per window (TextEdit, Xcode, Sketch): open, edit, save, autosave, versions.
>
> **AppKit `NSDocument`** — classic: subclass, implement `read(from:)` / `write(to:)`, undo support, duplicate window per document.
>
> **SwiftUI `DocumentGroup` + `FileDocument` / `ReferenceFileDocument`** — modern path. `FileDocument` for value-type docs; `ReferenceFileDocument` for class-based + fine-grained change tracking.
>
> **System gives you:** open/save panels, Recent Items, iCloud container optional, window-per-document via `DocumentGroup`.
>
> **Pick SwiftUI** for new Mac apps unless you need deep `NSDocument` customization.

---

## Code

```swift
struct NoteDocument: FileDocument {
    static var readableContentTypes: [UTType] { [.plainText] }
    var text: String = ""

    init(text: String = "") { self.text = text }
    init(configuration: ReadConfiguration) throws {
        text = String(data: configuration.file.regularFileContents ?? Data(), encoding: .utf8) ?? ""
    }
    func fileWrapper(configuration: WriteConfiguration) throws -> FileWrapper {
        FileWrapper(regularFileWithContents: Data(text.utf8))
    }
}
```

---

## Avoid

- Rolling custom open/save when `DocumentGroup` covers your case
- Blocking main thread on large file I/O — use async APIs / background
