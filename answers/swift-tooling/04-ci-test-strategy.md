# Unit tests vs UI tests vs snapshot tests — what belongs in CI?

**Target time:** 45–60 seconds

---

## Talk track

> **CI on every PR:** **unit tests** (ViewModels, parsers, repositories with mocks) — fast, deterministic, main gate.
>
> **UI tests (XCUITest):** smoke flows only — login, critical purchase/submit path; slow, flaky; nightly or pre-release, not 500 tests per PR.
>
> **Snapshot tests:** design system components, key screens; pin OS version; optional on PR, block release branch if visual contract matters.
>
> **Also in CI:** SwiftLint/SwiftFormat, build Release, sometimes `xcodebuild analyze`.
>
> **My bias from web CI:** same pyramid — many unit, few integration, minimal e2e.

---

## Pyramid

| Layer | CI frequency |
|-------|----------------|
| Unit | Every PR |
| Snapshot | PR or release |
| UI e2e | Nightly / pre-ship |

---

## Avoid

- UI test suite blocking every PR with 45-minute runtime
- Zero tests because "SwiftUI is hard to test"
