/**
 * TYPESCRIPT — Generics & patterns (Demos)
 * ========================================
 *
 * Run (from this folder):
 *   npm install
 *   npm run demo:02
 *
 * Practice → 02-typescript-generics-patterns-practice.ts
 *
 * Covers questions.md:
 *   Generics · discriminated union · narrowing · utility types
 *   API responses · enums · React props · module augmentation
 *
 * ---------------------------------------------------------------------------
 * IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * Generics     → reusable types: ApiResponse<T>, useState<T>
 * Discriminated union → shared tag field: { kind: "success", data } | { kind: "error", msg }
 * Narrowing    → typeof, in, === literal → TS knows exact type in branch
 *
 * Pick/Omit/Partial/Record → transform object types
 *
 * Type API     → interface per resource + generic wrapper { data: T }
 *
 * Enums        → prefer string literal unions or as const (tree-shakeable)
 *
 * React props  → type Props = { ... }; function Comp(props: Props)
 *
 * Module aug   → extend third-party types (e.g. express Request)
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  TYPESCRIPT — generics & patterns                  ║
╚════════════════════════════════════════════════════╝
`);

// --- Generics ---
console.log("--- Generics ---");

function first<T>(items: T[]): T | undefined {
  return items[0];
}

type ApiResponse<T> = {
  data: T;
  status: number;
};

type User = { id: string; name: string };

const res: ApiResponse<User> = {
  data: { id: "1", name: "Yog" },
  status: 200,
};

console.log("  first<string>:", first(["a", "b"]));
console.log("  ApiResponse<User>:", res.data.name);

// --- Discriminated union ---
console.log("--- Discriminated union ---");

type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };

function render(state: LoadState): string {
  switch (state.status) {
    case "idle":
      return "Click to load";
    case "loading":
      return "Loading...";
    case "success":
      return `${state.data.length} users`; // TS knows .data here
    case "error":
      return state.message;
    default:
      return assertNever(state);
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled: ${JSON.stringify(x)}`);
}

console.log("  render success:", render({ status: "success", data: [res.data] }));

// --- Type narrowing ---
console.log("--- Type narrowing ---");

function formatId(id: string | number): string {
  if (typeof id === "number") {
    return id.toFixed(0);
  }
  return id.toUpperCase();
}

console.log("  formatId:", formatId(42), formatId("abc"));

// --- Utility types ---
console.log("--- Pick · Omit · Partial · Record ---");

type UserFull = User & { email: string; role: string };

type UserPublic = Pick<UserFull, "id" | "name">;
type UserCreate = Omit<UserFull, "id">;
type UserPatch = Partial<UserFull>;
type RoleMap = Record<string, User[]>;

const publicUser: UserPublic = { id: "1", name: "Yog" };
console.log("  Pick:", publicUser.name);

// --- Type API responses ---
console.log("--- Typing API responses ---");

type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
};

async function fetchUsers(): Promise<Paginated<User>> {
  return { items: [res.data], total: 1, page: 1 };
}

console.log(`
  Pattern: UserDto interface + ApiResponse<T> / Paginated<T>
  Zod/io-ts at boundary optional for runtime validation
`);

// --- Enums ---
console.log("--- Enums ---");

// Prefer in modern codebases:
const OrderStatus = ["pending", "paid", "shipped"] as const;
type OrderStatus = (typeof OrderStatus)[number];

// enum OrderStatus { Pending = "pending" } // works but heavier

console.log(`  Literal union preferred over numeric enum`);

// --- React component props (type-only demo) ---
console.log("--- React component props ---");

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

// function Button({ label, onClick, variant = "primary" }: ButtonProps) { ... }

console.log(`
  Props: type or interface + destructure in function signature
  children: React.ReactNode when needed
`);

// --- Module augmentation ---
console.log("--- Module augmentation ---");

console.log(`
  Extend third-party types when TS doesn't know your additions:

  declare module "express-serve-static-core" {
    interface Request {
      userId?: string;
    }
  }

  Use sparingly — for globals plugins attach to existing modules
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Generic T        reuse: ApiResponse<T>, first<T>
 Discriminated    shared field: status/kind/tag
 Narrowing        typeof · in · === literal
 Pick/Omit        subset / remove keys
 Partial          all optional (PATCH)
 Record<K,V>      object map type
 API typing       DTO + wrapper + Promise<Paginated<T>>
 Enums            prefer as const unions
 React props      type Props = { ... }
 Module aug       declare module "x" { interface ... }

Practice: 02-typescript-generics-patterns-practice.ts
`);

export {};
