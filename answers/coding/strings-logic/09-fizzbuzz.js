/**
 * 09 — FizzBuzz from 1 to n (inclusive)
 * Run: node 09-fizzbuzz.js
 *
 * fizzBuzz(5) => ["1","2","Fizz","4","Buzz"]
 */

const { runTests } = require("./test-utils");

/**
 * @param {number} n
 * @returns {string[]}
 */
function fizzBuzz(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push("FizzBuzz");
    else if (i % 3 === 0) out.push("Fizz");
    else if (i % 5 === 0) out.push("Buzz");
    else out.push(String(i));
  }
  return out;
}

const ok = runTests("fizzBuzz", (n) => fizzBuzz(n), [
  {
    input: 5,
    expected: ["1", "2", "Fizz", "4", "Buzz"],
  },
  {
    input: 15,
    expected: [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ],
  },
  { input: 1, expected: ["1"] },
  { input: 0, expected: [] },
]);

process.exit(ok ? 0 : 1);
