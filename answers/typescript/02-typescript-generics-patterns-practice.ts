/**
 * TYPESCRIPT — Generics & patterns (practice)
 * ===========================================
 *
 * Run demo:  npm run demo:02   (from answers/typescript/)
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION: What are generics? Give one example from your work.

// MY ANSWER:
// Reusable type placeholders — like function args but for types: ApiResponse<T>, useState<T>
// Work example: ApiResponse<User> or Paginated<Order> shared across React Query + Fastify routes

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION: What is a discriminated union? One example.

// MY ANSWER:
// Union of object types sharing a tag field (status/kind) so TS narrows in switch
// type LoadState =
//   | { status: "idle" }
//   | { status: "loading" }
//   | { status: "success"; data: User[] }
//   | { status: "error"; message: string };

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION: What is type narrowing? Name 2 ways to narrow.

// MY ANSWER:
// TS learns a more specific type inside a branch after a check
// 1) typeof — if (typeof id === "number") { ... }
// 2) === literal or in — if (state.status === "success") { state.data }
// Also: instanceof, Array.isArray, custom type guards (x is User)

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION: One-liner each — Pick, Omit, Partial, Record

// MY ANSWER:
// Pick: subset of keys — Pick<User, "id" | "name">
// Omit: remove keys — Omit<User, "password">
// Partial: all keys optional — good for PATCH bodies
// Record: map type — Record<string, User[]>

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION: How do you type API responses in a React + Node app?

// MY ANSWER:
// DTO interface per resource (User, Order) + generic wrapper:
// type ApiResponse<T> = { data: T; status: number }
// type Paginated<T> = { items: T[]; total: number; page: number }
// Frontend: React Query useQuery<Paginated<User>> — backend: Promise<ApiResponse<User>>

// =============================================================================
// QUESTION 6
// =============================================================================

// QUESTION: What are enums? Do you use them?

// MY ANSWER:
// Named set of constants (enum OrderStatus { Pending = "pending" })
// Prefer string literal unions or as const — tree-shakeable, simpler:
// type OrderStatus = "pending" | "paid" | "shipped"

// =============================================================================
// QUESTION 7
// =============================================================================

// QUESTION: How do you type React component props?

// MY ANSWER:
// type ButtonProps = { label: string; onClick: () => void; disabled?: boolean };
// function Button({ label, onClick, disabled }: ButtonProps) { ... }
// children?: React.ReactNode when needed

// =============================================================================
// QUESTION 8
// =============================================================================

// QUESTION: What is module augmentation? When would you use it?

// MY ANSWER:
// Extend third-party types when TS doesn't know your additions:
// declare module "express-serve-static-core" {
//   interface Request { userId?: string; }
// }
// Use when a plugin adds fields to Express Request, etc. — sparingly

// =============================================================================
// CODING — type these (write types only)
// =============================================================================

// CODE Q1 — Generic ApiResponse<T> with data: T and status: number

// MY ANSWER:
type ApiResponse<T> = {
  data: T;
  status: number;
};

// CODE Q2 — Discriminated union for form submit:
// idle | submitting | success(data) | error(message)

// MY ANSWER:
type FormState<T> =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

// CODE Q3 — UserCreate = everything on User except id (utility type)

// MY ANSWER:
interface User {
  id: string;
  name: string;
  email: string;
}

type UserCreate = Omit<User, "id">;

// =============================================================================
// NOTES
// =============================================================================

//

export {};
