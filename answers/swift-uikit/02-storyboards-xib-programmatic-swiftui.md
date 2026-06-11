# Storyboards vs XIB vs programmatic UI vs SwiftUI — tradeoffs on a real team?

**Target time:** 45–60 seconds

---

## Talk track

> **Storyboards** — visual flow, segues, prototype cells. Fast for small apps; **merge conflicts** hurt large teams; hard to review in PRs.
>
> **XIB / NIB** — one view or VC per file; less merge pain than monolithic storyboard; still XML in git.
>
> **Programmatic UIKit** — full control, diffable PRs, no IBOutlet surprises; more boilerplate; needs discipline (SnapKit/Anchors).
>
> **SwiftUI** — declarative, previews, less layout code; newer teams default here for greenfield.
>
> **Real teams:** hybrid is common — storyboard for launch/shell, programmatic or SwiftUI for complex screens; or **100% programmatic/SwiftUI** at scale to avoid IB merge hell.

---

## Tradeoffs

| Approach | Pros | Cons |
|----------|------|------|
| Storyboard | Fast prototyping | Merge conflicts |
| XIB | Isolated views | Still IB XML |
| Programmatic | Reviewable diffs | Verbose |
| SwiftUI | Speed, previews | Platform gaps |

---

## Avoid

- Giant single storyboard on a 5-person team
- Rewriting entire UIKit app to SwiftUI mid-release without scope control
