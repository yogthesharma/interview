/**
 * `this` + bind / call / apply — Your practice workspace
 * =======================================================
 *
 * Assume "use strict" unless question says otherwise.
 *
 * Learn first: node 05-this-bind-call-apply.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
"use strict";

const user = {
  name: "Yog",
  greet() {
    console.log(`Hi, ${this.name}`);
  },
};

user.greet();

// MY ANSWER:
// Hi, Yog

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
("use strict");

const user2 = {
  name: "Yog",
  greet() {
    console.log(`Hi, ${this.name}`);
  },
};

// const fn = user2.greet;
// fn();

// MY ANSWER:
// undefined

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
("use strict");

function show() {
  console.log(this.label);
}

show.call({ label: "A" });
show.call({ label: "B" });

// MY ANSWER:
// A B

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
("use strict");

const obj = {
  name: "Yog",
  getName: () => {
    console.log(this.name);
  },
};

obj.getName();

// MY ANSWER:
// undefined

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
("use strict");

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));
console.log(double(10));

// MY ANSWER:
// 10 20

// =============================================================================
// NOTES
// =============================================================================

//
