/**
 * CURRYING — Demos only
 * =====================
 *
 * Run:  node 08-currying.js
 *
 * Practice → 08-currying-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * CURRYING = turn  f(a, b, c)  into  f(a)(b)(c)
 *
 * Why? Lock in some args early, reuse later.
 *
 *   const multiply = (a) => (b) => a * b;
 *   const double = multiply(2);
 *   double(5)  →  10
 *
 * CURRYING vs BIND
 *   curry  → nested functions, one arg at a time
 *   bind   → fix args on existing function (partial application)
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  CURRYING — run and read output                    ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: Simple arrow curry ---

const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log("--- Example 1: double / triple ---");
console.log("double(5):", double(5)); // 10
console.log("triple(5):", triple(5)); // 15

console.log(`
✅ multiply(2) returns a NEW function that always multiplies by 2
`);

// --- Example 2: Three-arg curry ---

const add = (a) => (b) => (c) => a + b + c;

console.log("--- Example 2: add(1)(2)(3) ---");
console.log("sum:", add(1)(2)(3)); // 6

console.log(`
✅ Call one argument at a time — each call returns another function
`);

// --- Example 3: Practical — API base URL ---

const buildUrl = (base) => (path) => `${base}${path}`;

const atlysUrl = buildUrl("https://api.atlys.com");
const visaUrl = atlysUrl("/visa");

console.log("--- Example 3: reusable URL builder ---");
console.log(visaUrl);

console.log(`
✅ Real use: config factories, reusable handlers, DRY API clients
`);

// --- Example 4: bind = simpler partial application ---

function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

const sayHi = greet.bind(null, "Hi");

console.log("--- Example 4: bind (not curry, but similar idea) ---");
console.log(sayHi("Yog")); // Hi, Yog

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Currying     f(a,b) → f(a)(b)     lock args step by step
 Partial app  fix some args early  (bind, curry, closures)
 Interview    know arrow (a)=>(b)=>a*b example cold

Practice: 08-currying-practice.js
`);
