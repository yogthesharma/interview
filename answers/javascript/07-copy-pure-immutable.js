/**
 * Shallow / deep copy, pure functions, immutability — Demos only
 * ==============================================================
 *
 * Run:  node 07-copy-pure-immutable.js
 *
 * Practice → 07-copy-pure-immutable-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * SHALLOW COPY  — only top level copied
 *                 nested objects/arrays still SHARED ({ ...obj })
 *
 * DEEP COPY     — nested copied too (structuredClone, JSON hack, recursive)
 *
 * PURE FUNCTION — same input → same output, no side effects, don't mutate args
 *
 * IMMUTABILITY  — don't change data in place; make NEW copies (React state)
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  COPY / PURE / IMMUTABLE — run and read output     ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: Shallow copy trap ---

const original = {
  name: "Yog",
  address: { city: "Gurugram" },
};

const shallow = { ...original };

shallow.name = "Alex"; // safe — primitive
shallow.address.city = "Delhi"; // TRAP — nested is shared!

console.log("--- Example 1: shallow ---");
console.log("original.name:", original.name); // Yog
console.log("original.address.city:", original.address.city); // Delhi 😬

console.log(`
✅ Spread copies top level only
   Changing shallow.address.city ALSO changes original.address
`);

// --- Example 2: Deep copy ---

const deep = structuredClone(original);
deep.address.city = "Mumbai";

console.log("--- Example 2: deep (structuredClone) ---");
console.log("after deep edit, original.city:", original.address.city); // still Delhi
console.log("deep.city:", deep.address.city); // Mumbai

console.log(`
✅ structuredClone copies nested objects too
   (JSON.parse/stringify works for simple JSON — no Date, functions, etc.)
`);

// --- Example 3: Pure vs impure ---

let total = 0;

// impure — mutates outer variable
function addToTotal(n) {
  total += n;
  return total;
}

// pure — returns new array, doesn't touch input
function addItem(list, item) {
  return [...list, item];
}

const items = [1, 2];
const next = addItem(items, 3);

console.log("--- Example 3: pure ---");
console.log("items:", items); // [1, 2] unchanged
console.log("next:", next); // [1, 2, 3]

console.log(`
✅ Pure: no side effects, doesn't mutate arguments
   React: setState with new object/array so React detects change
`);

// --- Example 4: Immutable state update (React pattern) ---

const state = { user: { name: "Yog" }, count: 0 };

// WRONG — mutates nested
// const bad = { ...state };
// bad.user.name = "Hack";

// RIGHT — copy each level you change
const good = {
  ...state,
  user: { ...state.user, name: "Yog" },
  count: state.count + 1,
};

console.log("--- Example 4: nested immutable update ---");
console.log("state.count:", state.count); // 0
console.log("good.count:", good.count); // 1

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Shallow:  { ...obj }, [...arr], Object.assign
 Deep:     structuredClone(obj)
 Pure:     no mutate args, no outer side effects
 React:    always new reference for state updates

Practice: 07-copy-pure-immutable-practice.js
`);
