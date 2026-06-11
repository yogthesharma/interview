/**
 * 03 — First non-repeating character in a string (return "" if none)
 * Run: node 03-first-non-repeating-char.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} str
 * @returns {string} single character or ""
 */
function firstNonRepeatingChar(str) {
  // Map Apporoach
  const count = new Map();

  for (const ch of str) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  for (const ch of str) {
    if (count.get(ch) === 1) {
      return ch;
    }
  }

  return "";

  // Object Apporoach
  // const charCounter = {};
  // str.split("").map((char) => {
  //   if (char in charCounter || charCounter.hasOwnProperty(char)) {
  //     charCounter[char] = charCounter[char] + 1;
  //   } else {
  //     charCounter[char] = 1;
  //   }
  // });
  // return Object.keys(charCounter).find((val) => charCounter[val] === 1) ?? "";
}

const ok = runTests("firstNonRepeatingChar", (s) => firstNonRepeatingChar(s), [
  { input: "leetcode", expected: "l" },
  { input: "loveleetcode", expected: "v" },
  { input: "aabb", expected: "" },
  { input: "z", expected: "z" },
  { input: "", expected: "" },
]);

process.exit(ok ? 0 : 1);
