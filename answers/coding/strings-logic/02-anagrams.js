/**
 * 02 — Are two strings anagrams? (ignore case + spaces)
 * Run: node 02-anagrams.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
function areAnagrams(a, b) {
  const normalize = (s) => s.toLowerCase().replace(/\s/g, "");

  const s1 = normalize(a);
  const s2 = normalize(b);

  if (s1.length !== s2.length) return false;

  const freq = new Map();

  for (const ch of s1) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (const ch of s2) {
    if (!freq.has(ch)) return false;

    freq.set(ch, freq.get(ch) - 1);

    if (freq.get(ch) === 0) {
      freq.delete(ch);
    }
  }

  return freq.size === 0;
}

const ok = runTests("areAnagrams", ({ a, b }) => areAnagrams(a, b), [
  { input: { a: "listen", b: "silent" }, expected: true },
  { input: { a: "hello", b: "world" }, expected: false },
  { input: { a: "Dormitory", b: "dirty room" }, expected: true },
  { input: { a: "a", b: "a" }, expected: true },
  { input: { a: "ab", b: "abb" }, expected: false },
]);

process.exit(ok ? 0 : 1);
