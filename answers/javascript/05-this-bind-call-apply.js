/**
 * `this` + bind / call / apply — Demos only
 * ==========================================
 *
 * Run:  node 05-this-bind-call-apply.js
 *
 * Practice → 05-this-bind-call-apply-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * `this` = WHO CALLED the function — not where it was written.
 *
 *   obj.sayHi()           → this = obj
 *   const fn = obj.sayHi; fn()  → this LOST (undefined in strict mode)
 *   sayHi.call(other)     → this = other  (call now)
 *   sayHi.bind(other)()   → this = other  (new function, forever)
 *
 *   arrow fn () => {}     → NO own this — uses outer `this` (React hooks/callbacks)
 *
 * ---------------------------------------------------------------------------
 */

"use strict";

console.log(`
╔════════════════════════════════════════════════════╗
║  THIS — run file and read output                   ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: method call — this = the object ---

const user = {
  name: "Yog",
  greet() {
    return `Hi, ${this.name}`;
  },
};

console.log("--- Example 1: obj.method() ---");
console.log(user.greet()); // Hi, Yog

console.log(`
✅ this = user (left of the dot)
`);

// --- Example 2: extracted method — this is LOST ---

console.log("--- Example 2: lost this ---");
const stolen = user.greet;
console.log("stolen():", stolen()); // Hi, undefined — this is not user

console.log(`
✅ No object on the left → this is undefined (strict mode)
   Classic React bug: onClick={user.greet} without bind/arrow
`);

// --- Example 3: call / apply / bind ---

function say(city) {
  return `${this.name} from ${city}`;
}

const person = { name: "Yog" };

console.log("--- Example 3: call / apply / bind ---");
console.log("call:", say.call(person, "Gurugram"));
console.log("apply:", say.apply(person, ["Gurugram"]));
const bound = say.bind(person);
console.log("bind:", bound("Gurugram"));

console.log(`
✅ call(fn, thisArg, arg1, arg2)
✅ apply(fn, thisArg, [args])
✅ bind(fn, thisArg) → new function with fixed this
`);

// --- Example 4: arrow function — no own this ---

console.log("--- Example 4: arrow ---");
const team = {
  name: "Platform",
  regular() {
    console.log("regular this.name:", this.name);
  },
  arrow: () => {
    console.log("arrow this.name:", this.name); // undefined — uses outer this
  },
};

team.regular(); // Platform
team.arrow(); // undefined

console.log(`
✅ Arrow functions inherit this from where they were CREATED
   Use arrows for callbacks when you want outer this
   Don't use arrow for object methods that need their own this
`);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 obj.fn()     → this = obj
 fn() alone   → this = undefined (strict)
 fn.call(x)   → this = x
 fn.bind(x)   → new fn, this always x
 () =>        → no own this, uses parent

Practice: 05-this-bind-call-apply-practice.js
`);
