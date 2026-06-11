/**
 * HOISTING + var / let / const — Demos only
 * ==========================================
 *
 * Run:  node 03-hoisting-var-let-const.js
 *
 * Practice → 03-hoisting-var-let-const-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * HOISTING = JS reads declarations first, before running your lines.
 *            But var / let / const behave differently.
 *
 *   var   → hoisted as undefined        → console.log before line = undefined
 *   let   → hoisted but in "TDZ"        → console.log before line = ERROR
 *   const → same as let + can't reassign
 *
 *   var  = function scope (leaks out of { blocks })
 *   let/const = block scope (stays inside { })
 *
 * Interview rule: use const by default, let if reassigning, avoid var.
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  HOISTING — run file, read what prints             ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: var is hoisted as undefined ---

console.log("--- Example 1: var ---");
console.log("before var:", myVar); // undefined (not an error!)
var myVar = 10;
console.log("after var:", myVar); // 10

console.log(`
✅ var before the line → undefined (weird but legal)
   Engine did: var myVar = undefined; then your code runs
`);

// --- Example 2: let throws if used too early (TDZ) ---

console.log("--- Example 2: let (TDZ) ---");
try {
  console.log(myLet); // ReferenceError
} catch (e) {
  console.log("let before line →", e.name); // ReferenceError
}
let myLet = 20;
console.log("after let:", myLet);

console.log(`
✅ let/const before the line → ReferenceError (Temporal Dead Zone)
   Declared but NOT usable until that line runs
`);

// --- Example 3: var leaks out of block, let doesn't ---

console.log("--- Example 3: block scope ---");
if (true) {
  var insideVar = "I leak";
  let insideLet = "I stay";
}
console.log("var outside block:", insideVar); // works
try {
  console.log(insideLet);
} catch (e) {
  console.log("let outside block →", e.name);
}

console.log(`
✅ var ignores { } blocks — leaks out
   let/const stay inside { }
`);

// --- Example 4: const can't reassign, but object props can change ---

console.log("--- Example 4: const ---");
const user = { name: "Yog" };
user.name = "Alex"; // OK — changing property
console.log("user.name:", user.name);
// user = {}  // TypeError — can't reassign the variable

console.log(`
✅ const = can't point to a NEW value
   But object/array contents CAN still change
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 var   → undefined if used early | leaks from blocks
 let   → error if used early     | block scoped
 const → error if used early     | block scoped | no reassign

 default: const  |  need reassign: let  |  avoid: var

Practice: paste questions in 03-hoisting-var-let-const-practice.js
`);
