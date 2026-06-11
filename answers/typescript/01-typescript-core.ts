/**
 * TYPESCRIPT — Core types & syntax (Demos)
 * ========================================
 *
 * Run (from this folder):
 *   npm install          # once
 *   npm run demo:01
 *   npm run demo:02
 *   npm run typecheck    # type-check all .ts files
 *
 * Practice → 01-typescript-core-practice.ts
 *
 * Covers questions.md:
 *   Why TS · interface vs type · optional props · typing functions
 *   async return · union · unknown vs any · never · as const · tsconfig
 *
 * ---------------------------------------------------------------------------
 * IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * TS = JS + static types at compile time (catch bugs before runtime)
 *
 * interface  → object shapes, can extend/merge (React props, API models)
 * type       → unions, intersections, aliases, mapped types
 *
 * unknown    → safe top type (narrow before use)
 * any        → turns off checking (avoid)
 * never      → impossible value (exhaustive switch, throw fn)
 *
 * as const   → literal types, readonly tuples
 *
 * strict tsconfig → strict, noImplicitAny, strictNullChecks
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  TYPESCRIPT — core                                 ║
╚════════════════════════════════════════════════════╝
`);

// --- Why TypeScript (interview answer) ---
console.log("--- Why TS over JS ---");
console.log(`
  Catch type errors at build time
  Better IDE autocomplete / refactor
  Self-documenting APIs (props, responses)
  Safer refactors in large codebases (IQM migration story)
`);

// --- interface vs type ---
console.log("--- interface vs type ---");

interface User {
  id: string;
  name: string;
  email?: string; // optional property
}

type UserId = string;
type Result = { ok: true; data: User } | { ok: false; error: string };

console.log(`
  interface → object contract, extends, declaration merging
  type      → unions, tuples, mapped/utility types
  Rule of thumb: interface for public object API; type for unions & compositions
`);

// --- Typing functions ---
console.log("--- Typing functions ---");

function add(a: number, b: number): number {
  return a + b;
}

type BinaryFn = (a: number, b: number) => number;
const multiply: BinaryFn = (a, b) => a * b;

// --- Async return → Promise<T> ---
console.log("--- Async return type ---");

async function fetchUser(id: string): Promise<User> {
  return { id, name: `User ${id}` };
}

console.log(`
  async function foo(): Promise<User>  — always Promise wrapper
`);

// --- Union type ---
console.log("--- Union type ---");

type Status = "idle" | "loading" | "success" | "error";
let status: Status = "idle";

type Id = string | number;

console.log(`  Status union: ${status}`);
console.log(`
  Union = value is ONE of several types (string literal union very common in React)
`);

// --- unknown vs any ---
console.log("--- unknown vs any ---");

function parseJsonSafe(raw: string): unknown {
  return JSON.parse(raw);
}

function useUnknown(value: unknown) {
  if (typeof value === "string") {
    console.log("  narrowed string:", value.toUpperCase());
  }
  // value.toUpperCase(); // ❌ error without narrow
}

useUnknown(parseJsonSafe('"hello"'));

console.log(`
  unknown → must narrow before use (prefer over any)
  any     → disables checking (escape hatch only)
`);

// --- never ---
console.log("--- never ---");

function fail(msg: string): never {
  throw new Error(msg);
}

function assertNever(x: never): never {
  throw new Error(`Unexpected: ${x}`);
}

console.log(`
  never → function that never returns, or exhaustive switch default
`);

// --- as const ---
console.log("--- as const ---");

const ROLES = ["admin", "user", "guest"] as const;
type Role = (typeof ROLES)[number]; // "admin" | "user" | "guest"

const config = { retry: 3, timeout: 5000 } as const;

console.log(`  Role type from as const: admin | user | guest`);
console.log(`
  as const → readonly literals, not widened to string/number
`);

// --- tsconfig strict ---
console.log("--- tsconfig (typical strict) ---");
console.log(`
  "strict": true
  "noImplicitAny": true
  "strictNullChecks": true
  → catch null/undefined, implicit any, unsafe patterns
  Atlys/IQM: strict TS in prod React + Node codebases
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Why TS           catch errors early, IDE, refactor safety
 interface        object shapes, extend
 type             unions, aliases, utilities
 fn types         (a: T) => R  or  function f(a: T): R
 async            Promise<T>
 optional         prop?: string
 unknown vs any   narrow unknown; avoid any
 never            throw / exhaustive check
 as const         literal union from array/object

Practice: 01-typescript-core-practice.ts
`);

export {};
