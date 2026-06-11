/**
 * 04 — Validate parentheses/brackets: (), [], {}
 * Run: node 04-validate-parentheses.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} str
 * @returns {boolean}
 */
function isValidParentheses(str) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const ch of str) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (")]}".includes(ch)) {
      if (!stack.length || stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

module.exports = { isValidParentheses };

const ok = runTests("isValidParentheses", (s) => isValidParentheses(s), [
  { input: "()", expected: true },
  { input: "()[]{}", expected: true },
  { input: "(]", expected: false },
  { input: "([)]", expected: false },
  { input: "{[]}", expected: true },
  { input: "", expected: true },
]);

process.exit(ok ? 0 : 1);
