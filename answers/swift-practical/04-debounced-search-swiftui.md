# Implement debounced search in SwiftUI

**Target time:** 10–15 min

---

## Approach

> Text changes fast → debounce 300ms → call API.  
> Use `.task(id: query)` cancellation or `Task.sleep` + check cancellation.

---

## Solution

```swift
@MainActor
@Observable
final class SearchViewModel {
    var query = ""
    var results: [Item] = []
    var isSearching = false

    private let api: SearchAPI
    private var searchTask: Task<Void, Never>?

    init(api: SearchAPI) { self.api = api }

    func onQueryChange(_ text: String) {
        query = text
        searchTask?.cancel()
        searchTask = Task {
            try? await Task.sleep(nanoseconds: 300_000_000)
            guard !Task.isCancelled else { return }
            await search(text)
        }
    }

    private func search(_ text: String) async {
        guard !text.isEmpty else { results = []; return }
        isSearching = true
        defer { isSearching = false }
        results = (try? await api.search(text)) ?? []
    }
}

struct SearchView: View {
    @State private var vm = SearchViewModel(api: LiveSearchAPI())

    var body: some View {
        VStack {
            TextField("Search", text: Binding(
                get: { vm.query },
                set: { vm.onQueryChange($0) }
            ))
            .textFieldStyle(.roundedBorder)

            if vm.isSearching { ProgressView() }
            List(vm.results) { Text($0.name) }
        }
        .padding()
    }
}
```

---

## Avoid

- New `URLSession` task per keystroke without cancel
- `onChange` + `Task` without cancelling previous task
