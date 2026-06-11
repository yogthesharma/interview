/**
 * == vs ===, null, undefined, ?., ?? — Demos only
 * =================================================
 *
 * Run:  node 04-equality-and-types.js
 *
 * Practice → 04-equality-and-types-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * ===  strict — no conversion        →  1 === "1"  is false  ✅ use this
 * ==   loose  — converts types first →  1 == "1"   is true   ⚠️ traps
 *
 * null      = on purpose "empty"     (you set it)
 * undefined = not set / missing        (default)
 *
 * ?.  optional chaining  →  user?.address?.city  (no crash if null)
 * ??  nullish coalesce   →  count ?? 10  (only if null/undefined, NOT 0 or "")
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  EQUALITY & TYPES — run and read output            ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: === vs == ---

console.log("--- Example 1: === vs == ---");
console.log('1 === "1":', 1 === "1"); // false
console.log('1 ==  "1":', 1 == "1"); // true — string becomes number

console.log("0 === false:", 0 === false); // false
console.log("0 ==  false:", 0 == false); // true

console.log(`
✅ Default to === always.
   == converts types — easy to get surprised in interviews.
`);

// --- Example 2: null vs undefined ---

console.log("--- Example 2: null vs undefined ---");
console.log("null === undefined:", null === undefined); // false
console.log("null ==  undefined:", null == undefined); // true — only weird pair

let notSet;
console.log("notSet:", notSet); // undefined
console.log("null on purpose:", null);

console.log(`
✅ null == undefined is true (only common == use case).
   Otherwise prefer: value === null || value === undefined
   Or shorthand: value == null  (checks BOTH null and undefined)
`);

// --- Example 3: ?? vs || ---

console.log("--- Example 3: ?? vs || ---");
const count = 0;
console.log("count || 10:", count || 10); // 10 — WRONG if 0 is valid
console.log("count ?? 10:", count ?? 10); // 0  — only null/undefined trigger ??

const name = "";
console.log('name || "guest":', name || "guest"); // guest
console.log('name ?? "guest":', name ?? "guest"); // "" — empty string kept

console.log(`
✅ ?? for "use default only if null/undefined"
   || treats 0, "", false as "missing" too
`);

// --- Example 4: optional chaining ---

console.log("--- Example 4: ?. ---");
const user = { name: "Yog", profile: null };

console.log("user?.name:", user?.name); // Yog
console.log("user?.profile?.bio:", user?.profile?.bio); // undefined — no crash

console.log(`
✅ ?. stops safely if something is null/undefined
   Without ?.: user.profile.bio would throw
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 ===     → strict, always use
 ==      → coerces types, avoid (except value == null)
 null    → intentional empty
 undefined → missing / not assigned
 ?.      → safe nested access
 ??      → default for null/undefined only

Practice: 04-equality-and-types-practice.js
`);
