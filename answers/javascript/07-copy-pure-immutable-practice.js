/**
 * Shallow / deep copy, pure functions, immutability — Practice
 * ==============================================================
 *
 * Learn first: node 07-copy-pure-immutable.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
const original = { city: "Gurugram", meta: { level: "Senior" } };
const copy = { ...original };

copy.city = "Delhi";
copy.meta.level = "lead";

console.log(original.city, original.meta.level);

// MY ANSWER:
// Gurugram lead

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
const original2 = { meta: { level: "senior" } };
const copy2 = structuredClone(original2);

copy.meta.level = "lead";
console.log(original2.meta.level);

// MY ANSWER:
// senior

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
const arr = [1, 2, 3];

function addBad(list) {
  list.push(4);
  return list;
}

function addGood(list, item) {
  return [...list, item];
}

const a = addBad(arr);
console.log(arr.length);
console.log(a.length);

// MY ANSWER:
// 4 4

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
function double(nums) {
  return nums.map((n) => n * 2);
}

// MY ANSWER:
// pure Function as it returns the new array

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
const state = { user: { name: "Yog" }, count: 1 };

const next = {
  ...state,
  count: 2,
};

next.user.name = "Alex";
console.log(state.user.name);

// MY ANSWER:
// Alex

// =============================================================================
// NOTES
// =============================================================================

//
