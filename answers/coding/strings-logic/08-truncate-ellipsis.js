/**
 * 08 — Truncate string with ellipsis
 * Run: node 08-truncate-ellipsis.js
 *
 * truncate("Hello world", 8) => "Hello..."  (max length includes "...")
 * If str.length <= max, return str unchanged.
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} str
 * @param {number} maxLength — total chars including "..."
 * @returns {string}
 */
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  // if (maxLength <= 3) return ".".repeat(maxLength);
  return str.slice(0, maxLength - 3).trim() + "...";
}

const ok = runTests(
  "truncate",
  ({ str, maxLength }) => truncate(str, maxLength),
  [
    { input: { str: "Hello world", maxLength: 8 }, expected: "Hello..." },
    { input: { str: "Hi", maxLength: 10 }, expected: "Hi" },
    { input: { str: "Exactly8", maxLength: 8 }, expected: "Exactly8" },
    {
      input: { str: "Longer text here", maxLength: 10 },
      expected: "Longer...",
    },
    { input: { str: "abc", maxLength: 3 }, expected: "abc" },
  ],
);

process.exit(ok ? 0 : 1);
