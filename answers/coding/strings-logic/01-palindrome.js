/**
 * 01 — Is palindrome? (ignore case + non-alphanumeric)
 * Run: node 01-palindrome.js
 *
 * isPalindrome("A man, a plan, a canal: Panama") => true
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    const l = str[left].toLowerCase();
    const r = str[right].toLowerCase();

    if (!/[a-z0-9]/.test(l)) {
      left++;
      continue;
    }
    if (!/[a-z0-9]/.test(r)) {
      right--;
      continue;
    }

    if (l !== r) return false;

    left++;
    right--;
  }

  return true;
}

const ok = runTests("isPalindrome", (s) => isPalindrome(s), [
  { input: "racecar", expected: true },
  { input: "hello", expected: false },
  { input: "A man, a plan, a canal: Panama", expected: true },
  { input: "", expected: true },
  { input: "a", expected: true },
]);

process.exit(ok ? 0 : 1);
