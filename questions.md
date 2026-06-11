# Round 2 — Possible Interview Questions

Questions only. No answers. Use with `prepare.md` and `ace.md`.

Organized by category. Not all will be asked — round 2 is usually **one main exercise + some follow-ups**.

**Legend:** `— Done` = answers/prepped in `answers/` folder · `(x/y)` = questions done / total in section

**Overall progress:** 669 / 669 question bullets prepped

---

## Opening & intro (9/9) — Done

- Tell me about yourself. — Done
- Walk me through your resume. — Done
- What are you working on currently? — Done
- Why this company? — Done
- Why are you looking for a change? — Done
- What do you know about what we build? — Done
- How did round 1 go from your perspective? — Done
- What stood out to you from the first round? — Done
- What are you hoping to get out of this conversation today? — Done

---

## Background & experience (19/19) — Done

- How many years of experience do you have with TypeScript? — Done
- How many years with React? — Done
- How many years with Node.js? — Done
- What's your strongest area — frontend, backend, or full stack? — Done
- Describe your current role and responsibilities. — Done
- What's the most complex system you've worked on? — Done
- Have you worked in a startup environment before? — Done
- Have you worked remotely before? How do you stay effective? — Done
- What's the size of your current team? — Done
- How do you collaborate with product / design / QA? — Done
- Tell me about a time you disagreed with a technical decision. What did you do? — Done
- Tell me about a time you had to push back on a deadline. — Done
- Describe a project you're most proud of. — Done
- Describe a project that failed or didn't go as planned. — Done
- What's the hardest bug you've ever fixed? — Done
- Tell me about a time you had to learn something new quickly. — Done
- Have you ever been on call or handled a production incident? — Done
- How do you approach code reviews — giving and receiving? — Done
- What's your experience with agile / scrum? — Done

---

## Project deep-dive (they pick something from your resume) (19/19) — Done

- Tell me more about [project X]. — Done
- What was your specific contribution vs the team's? — Done
- What was the architecture? — Done
- Why did you choose that tech stack? — Done
- What were the main tradeoffs? — Done
- What would you do differently if you rebuilt it today? — Done
- How did you test it? — Done
- How did you deploy it? — Done
- What broke in production? — Done
- How did you monitor / debug it? — Done
- What was the scale — users, requests, data volume? — Done
- How long did it take to build? — Done
- What was the business impact? — Done
- Who were the stakeholders? — Done
- What was the hardest technical decision on that project? — Done
- Did you work with legacy code or greenfield? — Done
- How did you handle migrations or refactors? — Done
- Did you write documentation? What kind? — Done
- Show me / explain [specific feature you mentioned]. — Done

---

## JavaScript — conceptual (23/23) — Done

- Explain the event loop. — Done
- What's the difference between microtasks and macrotasks? — Done
- What is a closure? Give an example. — Done
- What is hoisting? — Done
- `var` vs `let` vs `const` — when do you use each? — Done
- `==` vs `===` — when does it matter? — Done
- Explain `this` in JavaScript. — Done
- How does `bind`, `call`, and `apply` work? — Done
- What is the prototype chain? — Done
- Shallow copy vs deep copy — how do you do each? — Done
- What are pure functions? — Done
- What is immutability and why does it matter? — Done
- Explain currying. — Done
- What is debouncing? When would you use it? — Done
- What is throttling? When would you use it? — Done
- How does `setTimeout(..., 0)` behave? — Done
- What gets logged and in what order? (event loop puzzle) — Done
- What is a memory leak in JS? How do you avoid one? — Done
- Difference between `null` and `undefined`? — Done
- What is optional chaining (`?.`)? — Done
- What is nullish coalescing (`??`)? — Done
- How do you check if something is an array? — Done
- How do you safely access nested object properties? — Done

---

## JavaScript — async (15/15) — Done

Prep: `answers/javascript-async/` — all 7 topics complete

- How do Promises work? — Done
- `async/await` vs `.then()` — pros and cons? — Done
- What happens if you don't `await` an async function? — Done
- How do you handle errors in async code? — Done
- What is `Promise.all`? When would you use it? — Done
- What is `Promise.allSettled`? When would you use it? — Done
- What is `Promise.race`? — Done
- How do you run multiple async operations in parallel? — Done
- How do you retry a failed API call? — Done
- What is exponential backoff? — Done
- What is a race condition in async code? — Done
- How do you cancel an in-flight request? — Done
- What is `async` function return type? — Done
- How do you avoid callback hell? — Done
- What happens if one promise in `Promise.all` rejects? — Done

---

## TypeScript — conceptual (18/18) — Done

Prep: `answers/typescript/` — `npm run demo:all`

- Why use TypeScript over JavaScript? — Done
- `interface` vs `type` — when do you use which? — Done
- What are generics? Give an example. — Done
- What is a union type? — Done
- What is a discriminated union? — Done
- What is type narrowing? — Done
- What does `unknown` mean vs `any`? — Done
- What is `never` used for? — Done
- What are utility types — `Pick`, `Omit`, `Partial`, `Record`? — Done
- How do you type a function? — Done
- How do you type async function return values? — Done
- How do you type API responses? — Done
- What is `as const`? — Done
- How do you handle optional properties? — Done
- What are enums? Do you use them? — Done
- How strict is your `tsconfig` usually? — Done
- How do you type React component props? — Done
- What is module augmentation? — Done

---

## Coding — arrays & objects (live or discussion) (20/20) — Done

Prep: `answers/coding/arrays-objects/` — run stubs + `solutions/`

- Reverse an array without mutating the original. — Done (`coding/arrays-objects/01`)
- Remove duplicates from an array. — Done (`coding/arrays-objects/02`)
- Find the first non-repeating character in a string. — Done (`coding/arrays-objects/03`)
- Group an array of objects by a key. — Done (`coding/arrays-objects/04`)
- Flatten a nested array. — Done (`coding/arrays-objects/05`)
- Flatten a nested object. — Done (`coding/arrays-objects/06`)
- Merge two sorted arrays. — Done (`coding/arrays-objects/07`)
- Find intersection of two arrays. — Done (`coding/arrays-objects/08`)
- Implement `map`, `filter`, or `reduce` from scratch. — Done (`coding/arrays-objects/09`)
- Sort an array of objects by multiple fields. — Done (`coding/arrays-objects/10`)
- Find two numbers that sum to a target. — Done (`coding/arrays-objects/11`)
- Rotate an array. — Done (`coding/arrays-objects/12`)
- Chunk an array into groups of size N. — Done (`coding/arrays-objects/13`)
- Deep clone an object. — Done (`coding/arrays-objects/14`)
- Compare two objects for equality. — Done (`coding/arrays-objects/15`)
- Transform API response shape A into shape B. — Done (`coding/arrays-objects/16`)
- Parse CSV or simple string into structured data. — Done (`coding/arrays-objects/17`)
- Count frequency of words / characters. — Done (`coding/arrays-objects/18`)
- Find missing number in a sequence. — Done (`coding/arrays-objects/19`)
- Implement pagination logic on an in-memory array. — Done (`coding/arrays-objects/20`)

---

## Coding — functions & utilities (live or discussion) (15/15) — Done

Prep: `answers/coding/functions-utilities/` — run stubs + `solutions/`

- Implement debounce. — Done (`coding/functions-utilities/01`)
- Implement throttle. — Done (`coding/functions-utilities/02`)
- Implement `Promise.all` from scratch. — Done (`coding/functions-utilities/03`)
- Implement retry with backoff. — Done (`coding/functions-utilities/04`)
- Implement a simple rate limiter. — Done (`coding/functions-utilities/05`)
- Implement memoization. — Done (`coding/functions-utilities/06`)
- Implement a simple LRU cache. — Done (`coding/functions-utilities/07`)
- Implement `once` — function that only runs once. — Done (`coding/functions-utilities/08`)
- Implement `compose` or `pipe` for functions. — Done (`coding/functions-utilities/09`)
- Implement a pub/sub (event emitter). — Done (`coding/functions-utilities/10`)
- Implement `bind` from scratch. — Done (`coding/functions-utilities/11`)
- Curry a function. — Done (`coding/functions-utilities/12`)
- Write a function that serializes concurrent calls (queue). — Done (`coding/functions-utilities/13`)
- Implement timeout wrapper for a promise. — Done (`coding/functions-utilities/14`)
- Implement sleep / delay function. — Done (`coding/functions-utilities/15`)

---

## Coding — strings & logic (10/10) — Done

Prep: `answers/coding/strings-logic/` — run stubs + `solutions/`

- Check if a string is a palindrome. — Done (`coding/strings-logic/01`)
- Check if two strings are anagrams. — Done (`coding/strings-logic/02`)
- Find longest substring without repeating characters. — Done (`coding/strings-logic/03`)
- Validate parentheses / brackets. — Done (`coding/strings-logic/04`)
- Parse and evaluate simple expression. — Done (`coding/strings-logic/05`)
- Format phone number / currency. — Done (`coding/strings-logic/06`)
- Slugify a string. — Done (`coding/strings-logic/07`)
- Truncate string with ellipsis. — Done (`coding/strings-logic/08`)
- FizzBuzz (yes, still happens). — Done (`coding/strings-logic/09`)
- Valid email / URL validation (regex or logic). — Done (`coding/strings-logic/10`)

---

## React — conceptual (29/29) — Done

- What is React? How does it work at a high level? — Done
- Virtual DOM — what is it and why? — Done
- What is JSX? — Done
- Controlled vs uncontrolled components? — Done
- What are React keys and why do they matter? — Done
- What causes a component to re-render? — Done
- How do you prevent unnecessary re-renders? — Done
- When should you use `useMemo`? — Done
- When should you use `useCallback`? — Done
- When should you **not** memoize? — Done
- Explain `useEffect` — what is it for? — Done
- What are common `useEffect` mistakes? — Done
- What is the dependency array? — Done
- What is cleanup in `useEffect`? — Done
- `useEffect` vs `useLayoutEffect`? — Done
- What is lifting state up? — Done
- Props drilling — what do you do about it? — Done
- Context API — when to use vs when to avoid? — Done
- React Query / SWR — why use them? — Done
- Server state vs client state? — Done
- How do you handle forms in React? — Done
- How do you handle loading and error states? — Done
- Error boundaries — what are they? — Done
- Code splitting / lazy loading in React? — Done
- What is React Strict Mode? — Done
- Class components vs hooks — your experience? — Done
- How do you optimize a large list? — Done
- What is virtualization? — Done
- How do you test React components? — Done

---

## React — practical (live coding possible) (12/12) — Done

Prep: `answers/react-practical/` — Vite app + reference `.md` per exercise

- Build a search input that filters a list. — Done (`react-practical/01` → `/01-search-filter`)
- Build a paginated list. — Done (`react-practical/02`)
- Build a todo list with add / delete / toggle. — Done (`react-practical/03`)
- Build a form with validation. — Done (`react-practical/04`)
- Build a component that fetches and displays API data. — Done (`react-practical/05`)
- Build a debounced search component. — Done (`react-practical/06`)
- Build a modal / dropdown. — Done (`react-practical/07`)
- Build an infinite scroll list. — Done (`react-practical/08`)
- Fix a component that re-renders too often. — Done (`react-practical/09`)
- Fix a `useEffect` with missing or wrong dependencies. — Done (`react-practical/10`)
- Fix stale closure bug in React. — Done (`react-practical/11`)
- Implement a custom hook — `useFetch`, `useDebounce`, etc. — Done (`react-practical/12`)

---

## Swift — iOS & mobile (29/29) — Done

Prep: `answers/swift-ios/` — rehearse **Talk track** out loud

- What is Swift? How does it compare to Objective-C? — Done (`swift-ios/01`)
- Value types vs reference types — `struct` vs `class`? — Done (`swift-ios/02`)
- What is ARC? How does memory management work in Swift? — Done (`swift-ios/03`)
- What are optionals? How do you unwrap them safely? — Done (`swift-ios/04`)
- `guard let` vs `if let` — when do you use each? — Done (`swift-ios/05`)
- What is protocol-oriented programming in Swift? — Done (`swift-ios/06`)
- What are closures? What does `@escaping` mean? — Done (`swift-ios/07`)
- How does `async/await` work in Swift? — Done (`swift-ios/08`)
- `throws`, `Result`, and error handling in Swift? — Done (`swift-ios/09`)
- What is `Codable`? How do you decode JSON from an API? — Done (`swift-ios/10`)
- SwiftUI vs UIKit — when would you use each? — Done (`swift-ios/11`)
- SwiftUI data flow — `@State`, `@Binding`, `@ObservedObject`, `@StateObject`, `@EnvironmentObject`? — Done (`swift-ios/12`)
- What is the SwiftUI view lifecycle? — Done (`swift-ios/13`)
- What is Combine? When would you use it vs `async/await`? — Done (`swift-ios/14`)
- How do you fetch data from a REST API on iOS (`URLSession`)? — Done (`swift-ios/15`)
- How do you persist data on iOS — UserDefaults, Keychain, Core Data, SwiftData? — Done (`swift-ios/16`)
- What is Core Data? When is it the right choice? — Done (`swift-ios/17`)
- iOS app lifecycle states — what happens on background / foreground? — Done (`swift-ios/18`)
- How do you handle background tasks on iOS? — Done (`swift-ios/19`)
- How do you optimize long lists — `UITableView`, `UICollectionView`, or SwiftUI `List`? — Done (`swift-ios/20`)
- What causes retain cycles in iOS? How do you fix them? — Done (`swift-ios/21`)
- What is `@MainActor`? Why does UI work belong on the main thread? — Done (`swift-ios/22`)
- Concurrency in Swift — actors, `Task`, `Sendable`? — Done (`swift-ios/23`)
- MVVM vs MVC — which patterns have you used on iOS? — Done (`swift-ios/24`)
- How do you structure a medium-sized iOS app? — Done (`swift-ios/25`)
- Unit testing on iOS — XCTest, mocking, UI tests? — Done (`swift-ios/26`)
- Push notifications — high-level flow? — Done (`swift-ios/27`)
- Deep linking / universal links — basics? — Done (`swift-ios/28`)
- App Store / TestFlight submission — your experience? — Done (`swift-ios/29`)

---

## Swift — macOS & desktop (12/12) — Done

Prep: `answers/swift-macos/` — rehearse **Talk track** out loud

- macOS vs iOS development — key differences? — Done (`swift-macos/01`)
- AppKit vs SwiftUI on macOS — when do you use each? — Done (`swift-macos/02`)
- Windowed apps vs menu bar apps — tradeoffs? — Done (`swift-macos/03`)
- How do you handle keyboard shortcuts and menu commands? — Done (`swift-macos/04`)
- Multi-window support in SwiftUI on macOS? — Done (`swift-macos/05`)
- Sandboxing and entitlements on macOS — what do you need to know? — Done (`swift-macos/06`)
- File system access — security-scoped bookmarks? — Done (`swift-macos/07`)
- Code signing and notarization — high-level steps? — Done (`swift-macos/08`)
- Distributing a Mac app — App Store vs direct download? — Done (`swift-macos/09`)
- Document-based apps — `NSDocument` or SwiftUI equivalents? — Done (`swift-macos/10`)
- Mac Catalyst — what is it? When would you use it? — Done (`swift-macos/11`)
- Performance and memory considerations for desktop apps vs mobile? — Done (`swift-macos/12`)

---

## Swift — language & type system (technical) (18/18) — Done

Prep: `answers/swift-language/` — rehearse **Talk track** out loud

- Generics and generic constraints (`where` clauses) — give an example? — Done (`swift-language/01`)
- Protocols with `associatedtype` — when do you need them? — Done (`swift-language/02`)
- `some Protocol` vs `any Protocol` — what's the difference? — Done (`swift-language/03`)
- Protocol extensions — how do they enable default behavior? — Done (`swift-language/04`)
- Property wrappers — `@State`, `@Published`, `@AppStorage`; how would you write a custom one? — Done (`swift-language/05`)
- Enums with associated values vs structs — when is each a better model? — Done (`swift-language/06`)
- `indirect` enums — what problem do they solve? — Done (`swift-language/07`)
- Extensions — what can you extend, and what are you not allowed to extend? — Done (`swift-language/08`)
- Copy-on-write in `Array` / `Dictionary` — why does it matter for performance? — Done (`swift-language/09`)
- `weak` vs `unowned` — when is `unowned` safe? — Done (`swift-language/10`)
- Capture lists in closures — `[weak self]`, `[unowned self]`? — Done (`swift-language/11`)
- What is a retain cycle? Common iOS/macOS causes beyond closures? — Done (`swift-language/12`)
- `final`, `open`, `public`, `internal` — how do you think about API surface? — Done (`swift-language/13`)
- Value semantics — why does Swift prefer structs for models? — Done (`swift-language/14`)
- `Equatable` / `Hashable` — when must you implement them manually? — Done (`swift-language/15`)
- `Identifiable` and `Codable` synthesis — when does the compiler fail to synthesize? — Done (`swift-language/16`)
- Objective-C interoperability — `@objc`, bridging headers, when is Obj-C still in the stack? — Done (`swift-language/17`)
- Swift 6 / strict concurrency — `Sendable`, data-race safety (awareness)? — Done (`swift-language/18`)

---

## Swift — UIKit & interface (technical) (14/14) — Done

Prep: `answers/swift-uikit/` — rehearse **Talk track** out loud

- Auto Layout — constraints, intrinsic content size, compression resistance? — Done (`swift-uikit/01`)
- Storyboards vs XIB vs programmatic UI vs SwiftUI — tradeoffs on a real team? — Done (`swift-uikit/02`)
- `UIViewController` lifecycle — order of `viewDidLoad` through `viewDidDisappear`? — Done (`swift-uikit/03`)
- Delegation pattern — why is it everywhere in UIKit? — Done (`swift-uikit/04`)
- `UITableView` / `UICollectionView` cell reuse — how does dequeuing work? — Done (`swift-uikit/05`)
- `UICollectionViewCompositionalLayout` — when would you use it? — Done (`swift-uikit/06`)
- Diffable data source — what problems does it solve? — Done (`swift-uikit/07`)
- Custom `UITableViewCell` layout — constraints vs manual frames? — Done (`swift-uikit/08`)
- View controller containment — child VCs, when use? — Done (`swift-uikit/09`)
- Responder chain and touch handling — basics? — Done (`swift-uikit/10`)
- Safe area, layout margins, and keyboard avoidance? — Done (`swift-uikit/11`)
- Dark mode and dynamic colors — `UIColor` semantic colors? — Done (`swift-uikit/12`)
- Dynamic Type — supporting accessible text sizes? — Done (`swift-uikit/13`)
- Push / present / modal presentation — memory and lifecycle implications? — Done (`swift-uikit/14`)

---

## Swift — SwiftUI (technical) (12/12) — Done

Prep: `answers/swift-swiftui/` — rehearse **Talk track** out loud

- What triggers a SwiftUI view `body` re-evaluation? — Done (`swift-swiftui/01`)
- `@Observable` (iOS 17+) vs `ObservableObject` — migration thinking? — Done (`swift-swiftui/02`)
- `@State` vs `@Binding` vs `@Bindable` — ownership rules? — Done (`swift-swiftui/03`)
- Environment values and custom `@Environment` keys? — Done (`swift-swiftui/04`)
- `NavigationStack` / `navigationDestination` vs older navigation APIs? — Done (`swift-swiftui/05`)
- `.task` vs `.onAppear` — which for async fetch and why? — Done (`swift-swiftui/06`)
- How do you prevent redundant network calls on re-render? — Done (`swift-swiftui/07`)
- `List` performance with large data sets — pitfalls? — Done (`swift-swiftui/08`)
- `@ViewBuilder` — what is it doing under the hood? — Done (`swift-swiftui/09`)
- SwiftUI + UIKit interop — `UIViewRepresentable` / `UIViewControllerRepresentable`? — Done (`swift-swiftui/10`)
- Previews — how do you use them effectively in a team workflow? — Done (`swift-swiftui/11`)
- Testing SwiftUI views — snapshot tests, ViewInspector, or logic-only tests? — Done (`swift-swiftui/12`)

---

## Swift — concurrency & threading (technical) (12/12) — Done

Prep: `answers/swift-concurrency/` — rehearse **Talk track** out loud

- Grand Central Dispatch — main queue vs global queues, sync vs async `dispatch`? — Done (`swift-concurrency/01`)
- When is `DispatchQueue.main.async` still the right tool? — Done (`swift-concurrency/02`)
- Structured concurrency — `Task`, child tasks, cancellation? — Done (`swift-concurrency/03`)
- `async let` vs `TaskGroup` — when use each? — Done (`swift-concurrency/04`)
- Actor isolation — what bugs does it prevent? — Done (`swift-concurrency/05`)
- `@MainActor` on types vs individual methods? — Done (`swift-concurrency/06`)
- Calling UIKit/AppKit from a background thread — what breaks? — Done (`swift-concurrency/07`)
- Shared mutable state across threads — locks vs actors vs serial queues? — Done (`swift-concurrency/08`)
- How do you test async Swift code? — Done (`swift-concurrency/09`)
- Priority inversion and QoS — awareness? — Done (`swift-concurrency/10`)
- Continuations — bridging callback APIs to `async/await`? — Done (`swift-concurrency/11`)
- Debugging EXC_BAD_ACCESS and data races — tools and habits? — Done (`swift-concurrency/12`)

---

## Swift — architecture & production (hirable) (16/16) — Done

Prep: `answers/swift-architecture/` — rehearse **Talk track** out loud

- MVVM on iOS — what goes in the ViewModel? — Done (`swift-architecture/01`)
- Coordinator (or router) pattern for navigation — benefits? — Done (`swift-architecture/02`)
- Clean Architecture / VIPER / TCA — any experience or opinions? — Done (`swift-architecture/03`)
- Dependency injection — constructor injection vs service locator vs factories? — Done (`swift-architecture/04`)
- How do you structure a medium app into modules (SPM targets)? — Done (`swift-architecture/05`)
- Repository pattern for networking + persistence? — Done (`swift-architecture/06`)
- Feature flags and gradual rollout on mobile? — Done (`swift-architecture/07`)
- Error modeling — typed errors vs generic `Error`? — Done (`swift-architecture/08`)
- Logging and analytics — what do you instrument in production? — Done (`swift-architecture/09`)
- Crash reporting workflow — Crashlytics, Sentry, symbolicated stacks? — Done (`swift-architecture/10`)
- Code review on iOS — what do you look for beyond style? — Done (`swift-architecture/11`)
- On-call / production incidents on mobile — hotfix and rollback flow? — Done (`swift-architecture/12`)
- Brownfield vs greenfield — integrating Swift into an Obj-C codebase? — Done (`swift-architecture/13`)
- Technical debt on mobile — when to rewrite vs wrap UIKit? — Done (`swift-architecture/14`)
- How do you onboard a new iOS engineer to your architecture? — Done (`swift-architecture/15`)
- What makes a senior iOS/macOS engineer hirable — your bar? — Done (`swift-architecture/16`)

---

## Swift — networking, persistence & security (technical) (14/14) — Done

Prep: `answers/swift-networking/` — rehearse **Talk track** out loud

- Design a production networking layer — protocol, session, decode, errors? — Done (`swift-networking/01`)
- `URLSession` configuration — caching, timeouts, `waitsForConnectivity`? — Done (`swift-networking/02`)
- Auth token refresh — how do you queue requests during refresh? — Done (`swift-networking/03`)
- Pagination and infinite scroll — cursor vs offset on mobile? — Done (`swift-networking/04`)
- Offline-first — local source of truth, sync on reconnect? — Done (`swift-networking/05`)
- `URLCache` vs custom disk cache for images/API? — Done (`swift-networking/06`)
- Core Data — main context vs background context, merge policies? — Done (`swift-networking/07`)
- Core Data vs SwiftData vs SQLite/GRDB — tradeoffs? — Done (`swift-networking/08`)
- Lightweight migrations vs heavyweight Core Data migrations? — Done (`swift-networking/09`)
- Keychain — storing refresh tokens; what not to put in UserDefaults? — Done (`swift-networking/10`)
- Certificate pinning — tradeoffs and maintenance cost? — Done (`swift-networking/11`)
- App Transport Security — when are exceptions acceptable? — Done (`swift-networking/12`)
- Handling sensitive / PII data on device? — Done (`swift-networking/13`)
- Image pipeline — downsampling, memory spikes, `NSCache`? — Done (`swift-networking/14`)

---

## Swift — tooling, CI/CD & App Store (hirable) (12/12) — Done

Prep: `answers/swift-tooling/` — rehearse **Talk track** out loud

- Swift Package Manager vs CocoaPods vs Carthage — what would you pick today? — Done (`swift-tooling/01`)
- Xcode schemes, targets, and build configurations? — Done (`swift-tooling/02`)
- Managing secrets and API keys — xcconfig, build settings, not in repo? — Done (`swift-tooling/03`)
- Unit tests vs UI tests vs snapshot tests — what belongs in CI? — Done (`swift-tooling/04`)
- Fastlane, Xcode Cloud, or Bitrise — experience or ideal pipeline? — Done (`swift-tooling/05`)
- TestFlight distribution and beta feedback loops? — Done (`swift-tooling/06`)
- App Store review rejections you've handled or heard about? — Done (`swift-tooling/07`)
- Versioning and release trains for mobile apps? — Done (`swift-tooling/08`)
- dSYM upload and crash symbolication? — Done (`swift-tooling/09`)
- Profiling with Instruments — Time Profiler, Allocations, Leaks, Energy? — Done (`swift-tooling/10`)
- App launch time — what do you measure and optimize? — Done (`swift-tooling/11`)
- Bitcode / app thinning / asset catalogs — awareness? — Done (`swift-tooling/12`)

---

## Swift — practical (live coding possible) (10/10) — Done

Prep: `answers/swift-practical/` — read **Interview approach**, then code reference

- Fetch and decode JSON with `URLSession` + `Codable` + `async/await` — Done (`swift-practical/01`)
- Model polymorphic API JSON with enums + associated values — Done (`swift-practical/02`)
- Fix a retain cycle between a view controller and a network callback — Done (`swift-practical/03`)
- Implement debounced search in SwiftUI — Done (`swift-practical/04`)
- Build a paginated list with loading, empty, and error states — Done (`swift-practical/05`)
- Write a `URLProtocol` mock or protocol-based mock for unit tests — Done (`swift-practical/06`)
- Implement a simple in-memory image cache with eviction — Done (`swift-practical/07`)
- Parse and display diffable list updates (insert/delete/move) — Done (`swift-practical/08`)
- Add pull-to-refresh and cancellation for an in-flight request — Done (`swift-practical/09`)
- Refactor callback-based API to `async/await` with `withCheckedContinuation` — Done (`swift-practical/10`)

---

## Node.js & backend (14/14) — Done

- What is Node.js? How is it different from browser JS? — Done
- How does the Node event loop differ from the browser? — Done
- What is middleware in Express (or similar)? — Done
- How do you structure a Node API project? — Done
- How do you handle errors in Express? — Done
- Sync vs async file operations? — Done
- What are streams? When do you use them? — Done
- How do you manage environment variables? — Done
- `process.env` best practices? — Done
- How do you handle uncaught exceptions? — Done
- Worker threads vs child processes — awareness? — Done
- How do you rate limit an API? — Done
- How do you validate request bodies? — Done
- How do you version APIs? — Done

---

## Flask — Python web framework (20/20) — Done

Prep: `answers/flask-basics/` — rehearse **Talk track** out loud

- What is Flask? When would you choose it over Django or FastAPI? — Done (`flask-basics/01`)
- How does Flask routing work? — Done (`flask-basics/02`)
- What is the application factory pattern? Why use it? — Done (`flask-basics/03`)
- What are Flask blueprints? How do you structure a medium project? — Done (`flask-basics/04`)
- Application context vs request context — what's the difference? — Done (`flask-basics/05`)
- How do you manage configuration and environment variables in Flask? — Done (`flask-basics/06`)
- How do you validate request data in Flask? — Done (`flask-basics/07`)
- Error handling in Flask — custom handlers, HTTP exceptions? — Done (`flask-basics/08`)
- `before_request`, `after_request`, and teardown hooks — when use each? — Done (`flask-basics/09`)
- How do you handle sessions and cookies in Flask? — Done (`flask-basics/10`)
- Jinja2 templating — role in a Flask app? — Done (`flask-basics/11`)
- Common Flask extensions — SQLAlchemy, Migrate, Login, WTF? — Done (`flask-basics/12`)
- How do you build a REST API with Flask (plain routes vs Flask-RESTful)? — Done (`flask-basics/13`)
- How do you handle CORS in Flask? — Done (`flask-basics/14`)
- Flask security basics — CSRF, secret key, session hardening? — Done (`flask-basics/15`)
- What is WSGI? How does Flask fit in? — Done (`flask-basics/16`)
- How do you test a Flask app — pytest, test client? — Done (`flask-basics/17`)
- How do you deploy Flask — Gunicorn, uWSGI, Docker? — Done (`flask-basics/18`)
- Background jobs with Flask — Celery, RQ, or similar? — Done (`flask-basics/19`)
- Flask vs Django — tradeoffs for a small team? — Done (`flask-basics/20`)

---

## FastAPI — Python async APIs (22/22) — Done

Prep: `answers/fastapi-basics/` — rehearse **Talk track** out loud

- What is FastAPI? Why has it become popular? — Done (`fastapi-basics/01`)
- FastAPI vs Flask — when do you pick each? — Done (`fastapi-basics/02`)
- How does Pydantic power request and response validation? — Done (`fastapi-basics/03`)
- Path parameters vs query parameters vs request body? — Done (`fastapi-basics/04`)
- How do you define response models and status codes? — Done (`fastapi-basics/05`)
- Dependency injection in FastAPI — how and why? — Done (`fastapi-basics/06`)
- `async def` vs `def` endpoints — when use sync vs async? — Done (`fastapi-basics/07`)
- Common mistake: blocking I/O inside async endpoints? — Done (`fastapi-basics/08`)
- How do FastAPI's automatic OpenAPI / Swagger docs work? — Done (`fastapi-basics/09`)
- Middleware in FastAPI — examples (CORS, logging, timing)? — Done (`fastapi-basics/10`)
- Authentication in FastAPI — API keys, OAuth2, JWT? — Done (`fastapi-basics/11`)
- Background tasks vs Celery for long-running work? — Done (`fastapi-basics/12`)
- How do you structure a FastAPI project (routers, services, models)? — Done (`fastapi-basics/13`)
- SQLAlchemy with FastAPI — session management patterns? — Done (`fastapi-basics/14`)
- Error handling — `HTTPException` vs custom exception handlers? — Done (`fastapi-basics/15`)
- How do you test FastAPI — `TestClient`, async tests? — Done (`fastapi-basics/16`)
- What is ASGI? How is it different from WSGI? — Done (`fastapi-basics/17`)
- Deploying FastAPI — Uvicorn, Gunicorn + Uvicorn workers? — Done (`fastapi-basics/18`)
- WebSockets in FastAPI — basic use case? — Done (`fastapi-basics/19`)
- Rate limiting and request validation at scale? — Done (`fastapi-basics/20`)
- How do you version a FastAPI API? — Done (`fastapi-basics/21`)
- File uploads and streaming responses in FastAPI? — Done (`fastapi-basics/22`)

---

## Python — language & runtime (technical) (16/16) — Done

Prep: `answers/python/` — rehearse **Talk track** out loud

- Python 2 vs 3 — anything still relevant today? (awareness) — Done (`python/01`)
- Mutable vs immutable types — examples and pitfalls? — Done (`python/02`)
- `list` vs `tuple` vs `set` vs `dict` — when use each? — Done (`python/03`)
- List/dict comprehensions vs generator expressions — memory tradeoff? — Done (`python/04`)
- `*args` and `**kwargs` — how do you use them cleanly? — Done (`python/05`)
- Decorators — how do they work? Write a simple one? — Done (`python/06`)
- Context managers — `with` statement and `__enter__` / `__exit__`? — Done (`python/07`)
- `is` vs `==` — when does it matter? — Done (`python/08`)
- Shallow copy vs deep copy? — Done (`python/09`)
- Exception handling — bare `except` vs specific exceptions? — Done (`python/10`)
- `typing` module — `Optional`, `Union`, `Literal`, `TypedDict`? — Done (`python/11`)
- Dataclasses vs Pydantic models vs plain dicts? — Done (`python/12`)
- What is the GIL? How does it affect CPU-bound vs I/O-bound work? — Done (`python/13`)
- Virtual environments — `venv`, Poetry, pip-tools — your workflow? — Done (`python/14`)
- `__init__` vs `__new__` — awareness? — Done (`python/15`)
- How do you profile slow Python code — `cProfile`, `py-spy`? — Done (`python/16`)

---

## Python — async & concurrency (technical) (10/10) — Done

Prep: `answers/python-async/` — rehearse **Talk track** out loud

- `async`/`await` in Python — how is it different from threads? — Done (`python-async/01`)
- `asyncio` event loop — basics? — Done (`python-async/02`)
- When to use `asyncio` vs `threading` vs `multiprocessing`? — Done (`python-async/03`)
- `asyncio.gather` vs `asyncio.TaskGroup`? — Done (`python-async/04`)
- Running blocking code in async apps — `run_in_executor`? — Done (`python-async/05`)
- Common bug: blocking the event loop with sync DB or `requests`? — Done (`python-async/06`)
- `aiohttp` / `httpx` async HTTP — when prefer over `requests`? — Done (`python-async/07`)
- Semaphores and connection limits in async services? — Done (`python-async/08`)
- How do you test async Python code — `pytest-asyncio`? — Done (`python-async/09`)
- Celery workers vs in-process async — division of labor? — Done (`python-async/10`)

---

## Flask — architecture & production (hirable) (14/14) — Done

Prep: `answers/flask/` — rehearse **Talk track** out loud

- How do you layer a Flask app — routes, services, repositories? — Done (`flask/01`)
- Application factory — why mandatory for tests and multiple configs? — Done (`flask/02`)
- Blueprint boundaries — how do you split by domain? — Done (`flask/03`)
- Flask request lifecycle — from WSGI to response? — Done (`flask/04`)
- Thread-local `g` and when to avoid abusing it? — Done (`flask/05`)
- Configuration per environment — dev/staging/prod patterns? — Done (`flask/06`)
- Production WSGI — Gunicorn workers, threads vs gevent? — Done (`flask/07`)
- Flask in Docker — typical Dockerfile and health checks? — Done (`flask/08`)
- Structured logging and request IDs in Flask? — Done (`flask/09`)
- Error handling strategy — never leak stack traces to clients? — Done (`flask/10`)
- Database session per request — commit/rollback pattern? — Done (`flask/11`)
- Flask-Login / session auth vs JWT for APIs? — Done (`flask/12`)
- Scaling Flask — what breaks first under load? — Done (`flask/13`)
- What makes a senior Flask engineer hirable — your bar? — Done (`flask/14`)

---

## FastAPI — technical depth (hirable) (14/14) — Done

Prep: `answers/fastapi/` — rehearse **Talk track** out loud

- Request lifecycle in FastAPI — middleware → routing → dependencies → endpoint? — Done (`fastapi/01`)
- Dependency injection scopes — per-request DB session pattern? — Done (`fastapi/02`)
- Pydantic v2 — validators, `model_validate`, `Field` constraints? — Done (`fastapi/03`)
- Response model vs return type — filtering sensitive fields? — Done (`fastapi/04`)
- `HTTPException` vs custom exception handlers vs domain errors? — Done (`fastapi/05`)
- Lifespan context manager — startup/shutdown hooks? — Done (`fastapi/06`)
- Middleware order — what runs first? — Done (`fastapi/07`)
- `BackgroundTasks` limitations vs Celery for real workloads? — Done (`fastapi/08`)
- Streaming responses and Server-Sent Events? — Done (`fastapi/09`)
- WebSocket auth and connection management? — Done (`fastapi/10`)
- OpenAPI schema customization — when auto-docs aren't enough? — Done (`fastapi/11`)
- Multi-tenant FastAPI — tenant in dependency vs middleware? — Done (`fastapi/12`)
- Performance — async endpoints with sync SQLAlchemy pitfalls? — Done (`fastapi/13`)
- What makes a senior FastAPI engineer hirable — your bar? — Done (`fastapi/14`)

---

## Python backend — persistence, jobs & ops (technical) (14/14) — Done

Prep: `answers/python-backend/` — rehearse **Talk track** out loud

- SQLAlchemy 2.0 — `select()`, sessions, `flush` vs `commit`? — Done (`python-backend/01`)
- Sync vs async SQLAlchemy with FastAPI? — Done (`python-backend/02`)
- Session management — one session per request, why? — Done (`python-backend/03`)
- N+1 queries in ORM — how do you spot and fix? — Done (`python-backend/04`)
- Alembic migrations — autogenerate risks and review habits? — Done (`python-backend/05`)
- Raw SQL vs ORM — when do you drop to SQL? — Done (`python-backend/06`)
- Redis in Python backends — cache, rate limit, session store? — Done (`python-backend/07`)
- Celery architecture — broker, worker, result backend, beat? — Done (`python-backend/08`)
- Idempotent Celery tasks — how do you design them? — Done (`python-backend/09`)
- Connection pooling — SQLAlchemy pool size tuning basics? — Done (`python-backend/10`)
- Database transactions — where should boundaries live? — Done (`python-backend/11`)
- Handling DB deadlocks and retries? — Done (`python-backend/12`)
- Secrets management — env vars, AWS Secrets Manager, not in code? — Done (`python-backend/13`)
- Observability — structured logs, metrics, Sentry for Python APIs? — Done (`python-backend/14`)

---

## Flask & FastAPI — practical (live coding possible) (10/10) — Done

Prep: `answers/flask-fastapi-practical/` — read **Interview approach**, then code reference

- Build a Flask blueprint with CRUD + Marshmallow or Pydantic validation — Done (`flask-fastapi-practical/01`)
- Write pytest tests for a Flask route using the test client and fixtures — Done (`flask-fastapi-practical/02`)
- Add Alembic migration for a new column with safe deploy thinking — Done (`flask-fastapi-practical/03`)
- Implement FastAPI router with dependency-injected DB session — Done (`flask-fastapi-practical/04`)
- Add JWT or API-key auth as a FastAPI dependency — Done (`flask-fastapi-practical/05`)
- Fix an endpoint that blocks the event loop — refactor to async or executor — Done (`flask-fastapi-practical/06`)
- Implement cursor-based pagination in FastAPI — Done (`flask-fastapi-practical/07`)
- Design consistent JSON error responses across an app — Done (`flask-fastapi-practical/08`)
- Add a Celery task triggered from an API with idempotency key — Done (`flask-fastapi-practical/09`)
- Refactor fat route handler into service + repository layers — Done (`flask-fastapi-practical/10`)

---

## REST APIs & API design (18/18) — Done

- What is REST? — Done (`api/01`)
- GET vs POST vs PUT vs PATCH vs DELETE? — Done (`api/02`)
- When do you return 200 vs 201 vs 204? — Done (`api/03`)
- When do you return 400 vs 401 vs 403 vs 404 vs 500? — Done (`api/04`)
- How do you design error responses? — Done (`api/05`)
- What is idempotency? Why does it matter? — Done (`api/06`)
- Which HTTP methods should be idempotent? — Done (`api/07`)
- How do you design pagination — offset vs cursor? — Done (`api/08`)
- How do you handle filtering and sorting in APIs? — Done (`api/09`)
- How do you version a REST API? — Done (`api/10`)
- REST vs GraphQL — tradeoffs? — Done (`api/11`)
- How do you document APIs? — Done (`api/12`)
- Design API for [resource — users, applications, quotes]. — Done (`api/13`)
- How do you handle file uploads? — Done (`api/14`)
- How do you handle webhooks? — Done (`api/15`)
- What is HATEOAS? (less common, but possible) — Done (`api/16`)
- How do you handle bulk operations? — Done (`api/17`)
- How do you handle long-running operations in an API? — Done (`api/18`)

---

## Authentication & security (high level) (12/12) — Done

- How does JWT authentication work? — Done (`auth/01`)
- JWT vs session cookies — tradeoffs? — Done (`auth/02`)
- Where do you store tokens on the frontend? — Done (`auth/03`)
- What is refresh token flow? — Done (`auth/04`)
- What is CORS? Why does it exist? — Done (`auth/05`)
- How do you prevent SQL injection? — Done (`auth/06`)
- How do you sanitize user input? — Done (`auth/07`)
- What is XSS? How do you prevent it? — Done (`auth/08`)
- What is CSRF? — Done (`auth/09`)
- How do you handle secrets in code? — Done (`auth/10`)
- Multi-tenant auth — how do you isolate tenants? — Done (`auth/11`)
- Role-based access control — how would you implement? — Done (`auth/12`)

---

## Databases — SQL & NoSQL (18/18) — Done

- SQL vs NoSQL — when do you use which? — Done (`databases/01`)
- What is normalization? — Done (`databases/02`)
- What is an index? Why does it matter? — Done (`databases/03`)
- What is a primary key vs foreign key? — Done (`databases/04`)
- Explain JOIN types briefly. — Done (`databases/05`)
- What is a transaction? — Done (`databases/06`)
- What is ACID? — Done (`databases/07`)
- How do you design a schema for [use case]? — Done (`databases/08`)
- What is DynamoDB? — Done (`databases/09`)
- What is a partition key and sort key? — Done (`databases/10`)
- What is single-table design in DynamoDB? — Done (`databases/11`)
- What are access patterns? — Done (`databases/12`)
- When is DynamoDB a bad fit? — Done (`databases/13`)
- What is eventual consistency? — Done (`databases/14`)
- How do you handle migrations? — Done (`databases/15`)
- ORM vs raw SQL — your preference? — Done (`databases/16`)
- How do you avoid N+1 query problems? — Done (`databases/17`)
- How do you paginate in SQL vs DynamoDB? — Done (`databases/18`)

---

## AWS & cloud / serverless (23/23) — Done

- What AWS services have you used? — Done (`aws/01`)
- What is AWS Lambda? — Done (`aws/02`)
- What are Lambda cold starts? — Done (`aws/03`)
- Lambda limitations — timeout, memory, concurrency? — Done (`aws/04`)
- What is API Gateway? — Done (`aws/05`)
- What is DynamoDB? — Done (`aws/06`)
- What is SQS? How is it used? — Done (`aws/07`)
- What is SNS? — Done (`aws/08`)
- What is EventBridge? How is it different from SNS? — Done (`aws/09`)
- SNS vs EventBridge — when use which? — Done (`aws/10`)
- What is a dead-letter queue (DLQ)? — Done (`aws/11`)
- What is S3 used for? — Done (`aws/12`)
- What is CloudWatch? — Done (`aws/13`)
- What is IAM? — Done (`aws/14`)
- What is CDK or SAM or Serverless Framework? — Done (`aws/15`)
- How do you deploy Lambda functions? — Done (`aws/16`)
- How do you manage secrets in AWS? — Done (`aws/17`)
- How do you handle retries in serverless? — Done (`aws/18`)
- What is step functions? (awareness) — Done (`aws/19`)
- How do you test Lambda locally? — Done (`aws/20`)
- How do you structure a serverless project with many functions? — Done (`aws/21`)
- What is multi-tenant architecture on AWS? — Done (`aws/22`)
- How do you isolate tenant data? — Done (`aws/23`)

---

## System design (lite — discussion, 10–20 min) (20/20) — Done

- Design an API for submitting an insurance application. — Done (`system-design/01`)
- Design a system to send emails when an event happens. — Done (`system-design/02`)
- Design a quote generation flow. — Done (`system-design/03`)
- Design a document (PDF) generation pipeline. — Done (`system-design/04`)
- Design a multi-tenant SaaS backend. — Done (`system-design/05`)
- How would you build a real-time status tracker for an application? — Done (`system-design/06`)
- How would you handle 10x traffic spike? — Done (`system-design/07`)
- How would you design logging across 50+ microservices? — Done (`system-design/08`)
- How would you design an event-driven workflow? — Done (`system-design/09`)
- User submits form → validate → save → notify agent. Walk me through it. — Done (`system-design/10`)
- How do you handle failures in async pipelines? — Done (`system-design/11`)
- How do you ensure exactly-once vs at-least-once processing? — Done (`system-design/12`)
- How do you handle duplicate events? — Done (`system-design/13`)
- Where do you put business logic — Lambda, separate service, DB? — Done (`system-design/14`)
- Monolith vs microservices — tradeoffs? — Done (`system-design/15`)
- Serverless vs containers — tradeoffs? — Done (`system-design/16`)
- How do you do CI/CD for microservices? — Done (`system-design/17`)
- How do you roll back a bad deployment? — Done (`system-design/18`)
- How do you do blue-green or canary deployments? — Done (`system-design/19`)
- How do you handle schema changes with live traffic? — Done (`system-design/20`)

---

## Performance & scalability (14/14) — Done

- How do you make a web app faster? — Done
- Frontend performance metrics you care about (LCP, FID, CLS)? — Done
- How do you find frontend performance bottlenecks? — Done
- How do you optimize API latency? — Done
- Caching strategies — where and what to cache? — Done
- Redis use cases? — Done
- CDN — when do you need one? — Done
- Database query optimization basics? — Done
- How do you load test a service? — Done
- What is horizontal vs vertical scaling? — Done
- Connection pooling — why? — Done
- How do you handle large file uploads efficiently? — Done
- How do you optimize bundle size? — Done
- Lazy loading vs code splitting? — Done

---

## Testing (10/10) — Done

- Why write tests? — Done
- Unit vs integration vs e2e — differences? — Done
- What do you usually unit test? — Done
- How do you mock API calls in tests? — Done
- How do you test async code? — Done
- What is TDD? Do you practice it? — Done
- How much test coverage is enough? — Done
- How do you test Lambda functions? — Done
- How do you test React components? — Done
- What tools have you used — Jest, Vitest, Cypress, Playwright? — Done

---

## CI/CD, DevOps & observability (11/11) — Done

- What does your CI/CD pipeline look like? — Done
- What runs on every PR? — Done
- How do you do code review in your team? — Done
- What is structured logging? — Done
- What is a correlation / request ID? — Done
- How do you debug a issue across multiple services? — Done
- What metrics do you alert on? — Done
- What is distributed tracing? — Done
- Have you used Datadog, Sentry, CloudWatch, etc.? — Done
- How do you handle feature flags? — Done
- Infrastructure as Code — experience? — Done

---

## Debugging & code review (they show you code) (9/9) — Done

- What's wrong with this code? — Done
- What will this code output? — Done
- How would you fix this race condition? — Done
- How would you fix this memory leak? — Done
- Review this PR — what feedback would you give? — Done
- This API is slow — how do you investigate? — Done
- Users report duplicate records — what do you check? — Done
- Intermittent 500 errors — how do you debug? — Done
- This React component feels sluggish — what do you look at? — Done

---

## Insurance / domain (light — optional) (6/6) — Done

- What do you know about the insurance buying process? — Done
- What is underwriting? (high level) — Done
- What is EOI? (if you've researched the company) — Done
- How would technology improve insurance for customers? — Done
- Experience with regulated industries or compliance? — Done
- How do you handle PII in applications? — Done

---

## Startup & culture fit (12/12) — Done

- Why a startup vs big company? — Done
- How do you handle ambiguity? — Done
- How do you prioritize when everything is urgent? — Done
- Comfortable wearing multiple hats? — Done
- How do you handle technical debt? — Done
- How do you balance speed vs quality? — Done
- What does ownership mean to you? — Done
- How do you stay updated with tech? — Done
- What are you looking for in your next team? — Done
- What kind of manager do you work best with? — Done
- Where do you see yourself in 2–3 years? — Done
- What would make you say no to an offer? — Done

---

## Logistics & closing (8/8) — Done

- What are your salary expectations? — Done
- What is your notice period? — Done
- When can you start? — Done
- Are you interviewing elsewhere? — Done
- Do you have any questions for me? — Done
- What would you want to work on in your first 30 / 90 days? — Done
- Is there anything from round 1 you'd like to clarify? — Done
- Anything else we should know about you? — Done

---

## Questions you can ask them (prepare 2–3) (12/12) — Done

- What does a typical day look like for this role? — Done
- How is the engineering team structured? — Done
- What's the biggest technical challenge right now? — Done
- What's the stack for the product I'd work on? — Done
- How do you approach code quality and reviews? — Done
- What does on-call look like? — Done
- How do you measure success for this role? — Done
- What do you enjoy most about working on the team? — Done
- What surprised you when you joined? — Done
- What's the roadmap for the next 6–12 months? — Done
- How much greenfield vs maintenance work? — Done
- What's the interview process after this round? — Done

---

## Distributed systems (6/6) — Done

Prep: `answers/distributed-systems/` — rehearse **Talk track** out loud

- Consistency models — strong, eventual, causal? — Done (`distributed-systems/01`)
- CAP theorem — what does it actually mean? — Done (`distributed-systems/02`)
- Partition tolerance — what breaks in practice? — Done (`distributed-systems/03`)
- Replication — why and how? — Done (`distributed-systems/04`)
- Sharding — when and how? — Done (`distributed-systems/05`)
- Leader election — why do systems need it? — Done (`distributed-systems/06`)

---

## Security — advanced (6/6) — Done

Prep: `answers/security-advanced/` — builds on `answers/auth/`

- OAuth2 deep dive — flows and pitfalls? — Done (`security-advanced/01`)
- OIDC — how is it different from OAuth2? — Done (`security-advanced/02`)
- API rate limiting strategies? — Done (`security-advanced/03`)
- Secure headers — which ones matter? — Done (`security-advanced/04`)
- SSRF — Server-Side Request Forgery? — Done (`security-advanced/05`)
- Request signing — when and how? — Done (`security-advanced/06`)

---

## Production engineering (6/6) — Done

Prep: `answers/production-engineering/` — rehearse **Talk track** out loud

- Incident response — what's your process? — Done (`production-engineering/01`)
- SLO, SLA, and error budgets? — Done (`production-engineering/02`)
- Deployment rollback strategy? — Done (`production-engineering/03`)
- Feature rollout strategy? — Done (`production-engineering/04`)
- Chaos engineering — what is it and when? — Done (`production-engineering/05`)
- Postmortems — blameless culture? — Done (`production-engineering/06`)

---

## Architecture tradeoffs (6/6) — Done

Prep: `answers/architecture-tradeoffs/` — final-round "when would you NOT…" discussions

- When would you NOT use microservices? — Done (`architecture-tradeoffs/01`)
- When does Redis become dangerous? — Done (`architecture-tradeoffs/02`)
- Why can caching cause bugs? — Done (`architecture-tradeoffs/03`)
- Why are event-driven systems hard to debug? — Done (`architecture-tradeoffs/04`)
- When would you NOT use serverless? — Done (`architecture-tradeoffs/05`)
- When is a monolith the right long-term choice? — Done (`architecture-tradeoffs/06`)

---

## Quick reference — most likely for _this_ interviewer

Based on Shubham's profile + JD + 45 min format, highest probability:

1. One **JS/TS coding** problem (async, arrays, utilities)
2. **Follow-ups** on your resume / a project
3. **API or event-flow** discussion (application submit, async processing)
4. Maybe **one React** question or small component
5. Light **AWS** vocabulary (Lambda, DynamoDB, EventBridge, SQS)
6. **Your questions** at the end

---

_Tick questions as you practice. Star the ones you struggle with._
