/**
 * PROTOTYPE CHAIN — Your practice workspace
 * ==========================================
 *
 * Learn first: node 06-prototype-chain.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
const parent = { color: "blue" };
const child = Object.create(parent);
child.name = "Bruno";

console.log(child.name);
console.log(child.color);

// MY ANSWER:
// Bruno blue

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
const parent2 = { score: 10 };
const child2 = Object.create(parent2);

child2.score = 99;

console.log(child2.score);
console.log(parent2.score);

// MY ANSWER:
// 99 10

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
const parent3 = { type: "animal" };
const child3 = Object.create(parent3);

child3.legs = 4;

console.log(Object.hasOwn(child3, "legs"));
console.log(Object.hasOwn(child3, "type"));
console.log("type" in child3);

// MY ANSWER:
// true false true

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
function Person(name) {
  this.name = name;
}

Person.prototype.hi = function () {
  return `Hi, ${this.name}`;
};

const p = new Person("Yog");

console.log(p.hi());
console.log(Object.hasOwn(p, "hi"));

// MY ANSWER:
// Hi, Yog false

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
class Animal {}

class Dog extends Animal {}

const d = new Dog();

console.log(d instanceof Dog);
console.log(d instanceof Animal);
console.log(d instanceof Object);

// MY ANSWER:
// true true true

// =============================================================================
// NOTES
// =============================================================================

//
