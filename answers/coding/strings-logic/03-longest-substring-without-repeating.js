/**
 * 03 — Longest substring without repeating characters
 * Run: node 03-longest-substring-without-repeating.js
 *
 * lengthOfLongestSubstring("abcabcbb") => 3 ("abc")
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} str
 * @returns {number}
 */
function lengthOfLongestSubstring(str) {
  const seen = new Map();
  let max = 0;
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    const ch = str[end];
    if (seen.has(ch) && seen.get(ch) >= start) {
      start = seen.get(ch) + 1;
    }
    seen.set(ch, end);
    max = Math.max(max, end - start + 1);
  }

  return max;
}

const ok = runTests(
  "lengthOfLongestSubstring",
  (s) => lengthOfLongestSubstring(s),
  [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "", expected: 0 },
    { input: " ", expected: 1 },
  ],
);

process.exit(ok ? 0 : 1);
