# SwiftUI vs UIKit — when would you use each?

**Target time:** 30–45 seconds

---

## Talk track

> **SwiftUI** — declarative UI, state-driven, less boilerplate, great for new screens and multi-platform (iOS/macOS). Preview-driven dev. **iOS 13+** (mature ~iOS 16+).
>
> **UIKit** — imperative, mature ecosystem, full control over transitions, complex collection layouts, deep third-party libs. Still required for some APIs and legacy apps.
>
> **When SwiftUI:** greenfield features, standard forms/lists, rapid iteration.
>
> **When UIKit:** heavy customization, existing large UIKit codebase, APIs not wrapped in SwiftUI yet — or **`UIViewRepresentable`** bridge.
>
> **Real teams:** mix both — SwiftUI shell + UIKit components.

---

## Code

```swift
// SwiftUI — declarative
struct ProfileView: View {
    @State private var name = ""
    var body: some View {
        TextField("Name", text: $name)
    }
}

// UIKit bridge when needed
struct MapView: UIViewRepresentable {
    func makeUIView(context: Context) -> MKMapView { MKMapView() }
    func updateUIView(_ uiView: MKMapView, context: Context) {}
}
```

---

## Avoid

- "SwiftUI replaced UIKit" — production apps still use both
- Picking SwiftUI for a feature that needs fine-grained UIKit control without a plan
