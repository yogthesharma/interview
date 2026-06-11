/**
 * 18 — Count frequency of words OR characters (implement word mode below)
 * Run: node 18-count-frequency.js
 *
 * countWordFrequency("hello world hello") => { hello: 2, world: 1 }
 * Split on whitespace; lowercase for counting.
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} text
 * @returns {Record<string, number>}
 */
function countWordFrequency(text) {
  if (!text.trim()) return {};
  return text
    .trim()
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .reduce((acc, word) => {
      acc[word] = (acc[word] ?? 0) + 1;
      return acc;
    }, {});
}

const ok = runTests("countWordFrequency", (text) => countWordFrequency(text), [
  {
    input: "hello world hello",
    expected: { hello: 2, world: 1 },
  },
  {
    input: "The the THE",
    expected: { the: 3 },
  },
  { input: "", expected: {} },
  { input: "solo", expected: { solo: 1 } },
]);

process.exit(ok ? 0 : 1);
