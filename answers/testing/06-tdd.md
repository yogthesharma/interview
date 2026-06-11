# What is TDD? Do you practice it?

**Target time:** 30 seconds — honest

---

## Talk track

> **TDD (Test-Driven Development):** Red → Green → Refactor. Write failing test first, minimal code to pass, then improve design.
>
> **Honestly:** I don't do strict TDD on every task. I **do** write tests for tricky logic, regressions, and utilities where examples clarify requirements.
>
> **When TDD helps:** pure functions, parsers, validators, state machines — clear inputs/outputs.
>
> **When I skip strict TDD:** exploratory UI, one-off spikes — add tests before merge for critical paths.

---

## Code (TDD example)

```ts
// 1. Red
test("slugify", () => expect(slugify("Hello World!")).toBe("hello-world"));

// 2. Green — implement slugify
// 3. Refactor — extract normalize helper
```

---

## Avoid

- "I never write tests" or "I always TDD everything" — both sound unrealistic
