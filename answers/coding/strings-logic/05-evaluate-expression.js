/**
 * 05 — Evaluate simple math expression (integers, + - * /, standard precedence)
 * Run: node 05-evaluate-expression.js
 *
 * evaluate("3+2*2") => 7
 * No spaces required. Division is integer truncate toward zero (Math.trunc).
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} expr
 * @returns {number}
 */
function evaluate(expr) {
  const nums = [];
  const ops = [];
  const prec = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const apply = () => {
    const b = nums.pop();
    const a = nums.pop();
    const op = ops.pop();
    if (op === "+") nums.push(a + b);
    else if (op === "-") nums.push(a - b);
    else if (op === "*") nums.push(a * b);
    else nums.push(Math.trunc(a / b));
  };

  let i = 0;
  while (i < expr.length) {
    const ch = expr[i];
    if (ch >= "0" && ch <= "9") {
      let num = 0;
      while (i < expr.length && expr[i] >= "0" && expr[i] <= "9") {
        num = num * 10 + Number(expr[i++]);
      }
      nums.push(num);
      continue;
    }
    while (ops.length && prec[ops.at(-1)] >= prec[ch]) apply();
    ops.push(ch);
    i++;
  }

  while (ops.length) apply();
  return nums[0];
}

const ok = runTests("evaluate", (s) => evaluate(s), [
  { input: "3+2*2", expected: 7 },
  { input: "3+5/2", expected: 5 },
  { input: "10-2-3", expected: 5 },
  { input: "2*3+4", expected: 10 },
  { input: "42", expected: 42 },
]);

process.exit(ok ? 0 : 1);
