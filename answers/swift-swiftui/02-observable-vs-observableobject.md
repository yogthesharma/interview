# @Observable (iOS 17+) vs ObservableObject — migration thinking?

**Target time:** 30–45 seconds

---

## Talk track

> **`ObservableObject` + `@Published`** — reference-type VM; emits `objectWillChange` on any `@Published` mutation; views use `@StateObject` / `@ObservedObject` / `@EnvironmentObject`. Works all the way back; boilerplate and coarse-grained updates (whole view may refresh).
>
> **`@Observable` macro (Observation framework)** — compiler tracks **which properties** each view reads; **finer-grained** updates, no `ObservableObject` conformance, use `@Bindable` for bindings. iOS 17+.
>
> **Migration:** replace `class Foo: ObservableObject` with `@Observable class Foo`, drop `@Published`, swap `@ObservedObject` → plain property or `@Bindable` for `$` bindings. Keep `ObservableObject` for iOS 16 support or third-party libs not on Observation yet.
>
> Same shift as React moving from context-wide rerenders to more targeted subscriptions.

---

## Code

```swift
// iOS 17+
@Observable
final class ProfileStore {
    var name = ""
    var email = ""
}

struct ProfileView: View {
    @Bindable var store: ProfileStore

    var body: some View {
        TextField("Name", text: $store.name)
    }
}
```

---

## Avoid

- Mixing `@Observable` and `ObservableObject` in one tree without clear ownership
- `@ObservedObject` on `@Observable` types — wrong property wrapper
