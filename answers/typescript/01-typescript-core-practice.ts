/**
 * TYPESCRIPT — Core (practice)
 * ============================
 *
 * Run demo:  npm run demo:01   (from answers/typescript/)
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION: Why use TypeScript over JavaScript? (2–3 bullets)

// MY ANSWER:
// Catch type errors at compile time (before runtime)
// Better IDE autocomplete and refactor safety in large codebases
// Self-documenting APIs (props, function params, API responses)

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION: interface vs type — when do you use which?

// MY ANSWER:
// interface → object shapes, extends, declaration merging (React props, API models)
// type → unions, tuples, intersections, mapped/utility types
// Rule of thumb: interface for public object API; type for unions & compositions

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION: How do you handle optional properties?

// MY ANSWER:
// Use ? on the property: email?: string
// Example: interface User { id: string; name: string; email?: string }

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION: How do you type a function?

// MY ANSWER:
// function add(x: number, y: number): number { return x + y; }
// Or type alias: type BinaryFn = (x: number, y: number) => number;

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION: How do you type async function return values?

// MY ANSWER:
// Promise<T> — async fn always returns a Promise even if you return a plain value
// Example: async function fetchUser(): Promise<User> { ... }

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION: What is a union type? One example from React/Node work.

// MY ANSWER:
// Value can be ONE of several types: type Id = string | number
// React example: type Status = "idle" | "loading" | "done"

// =============================================================================
// QUESTION 7
// =============================================================================

// QUESTION: unknown vs any — which do you prefer and why?

// MY ANSWER:
// Prefer unknown — safe top type; must narrow before use (typeof, in, etc.)
// any disables checking — avoid except escape hatches
// Use unknown for JSON.parse / untrusted external data instead of any

// =============================================================================
// QUESTION 8
// =============================================================================

// QUESTION: What is `never` used for? (2 use cases)

// MY ANSWER:
// 1) Function that never returns: throw new Error() or infinite loop
// 2) Exhaustive switch default: assertNever(x) when all union cases handled
// (void = returns undefined — not the same as never)

// =============================================================================
// QUESTION 9
// =============================================================================

// QUESTION: What does `as const` do?

// MY ANSWER:
// Makes values readonly literal types (no widening to string/number)
// Example: const ROLES = ["admin", "user"] as const → type Role = (typeof ROLES)[number]

// =============================================================================
// QUESTION 10
// =============================================================================

// QUESTION: How strict is your tsconfig usually? Name 2 flags you care about.

// MY ANSWER:
// "strict": true
// "noImplicitAny": true
// Also: "strictNullChecks": true — catches null/undefined bugs

// =============================================================================
// CODING — quick types (no runtime tests needed)
// =============================================================================

// CODE Q1 — Type this function:
// function greet(name: ???): ??? { return `Hi, ${name}`; }

// MY ANSWER:
function greet(name: string): string {
  return `Hi, ${name}`;
}

// CODE Q2 — Type a User with required id/name and optional email

// MY ANSWER:
interface User {
  id: string;
  name: string;
  email?: string;
}

// CODE Q3 — Type status as only "idle" | "loading" | "done"

// MY ANSWER:
type Status = "idle" | "loading" | "done";

// =============================================================================
// NOTES
// =============================================================================

//

export {};
