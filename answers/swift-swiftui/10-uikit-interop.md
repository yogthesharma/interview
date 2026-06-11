# SwiftUI + UIKit interop — UIViewRepresentable / UIViewControllerRepresentable?

**Target time:** 30–45 seconds

---

## Talk track

> **`UIViewRepresentable`** — embed **UIKit view** in SwiftUI (`MKMapView`, `UITextView`, legacy controls). Implement `makeUIView` + `updateUIView`; optional `Coordinator` for delegates.
>
> **`UIViewControllerRepresentable`** — embed full **view controller** (camera, document picker, complex UIKit screen).
>
> **`UIHostingController`** — opposite direction: SwiftUI inside UIKit navigation.
>
> **When:** API not in SwiftUI, gradual migration, performance-critical UIKit component. Pass data in, use `context.coordinator` for callbacks out.

---

## Code

```swift
struct MapView: UIViewRepresentable {
    var region: MKCoordinateRegion

    func makeUIView(context: Context) -> MKMapView {
        let map = MKMapView()
        map.delegate = context.coordinator
        return map
    }

    func updateUIView(_ map: MKMapView, context: Context) {
        map.setRegion(region, animated: true)
    }

    func makeCoordinator() -> Coordinator { Coordinator() }
    final class Coordinator: NSObject, MKMapViewDelegate {}
}
```

---

## Avoid

- Representable wrapper without `updateUIView` syncing state changes
- Embedding entire UIKit app shell when SwiftUI `NavigationStack` would suffice
