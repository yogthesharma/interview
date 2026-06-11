/**
 * 14 — Deep clone an object (plain objects + arrays only; no Date/Map/class instances)
 * Run: node 14-deep-clone.js
 */

const { deepEqual, runTests } = require("./test-utils");

/**
 * @param {unknown} value
 * @returns {unknown}
 */
function deepClone(value) {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(deepClone);
  return Object.fromEntries(
    Object.entries(value).map(([k, v]) => [k, deepClone(v)]),
  );
}

const nested = { a: 1, b: { c: [1, 2, { d: 3 }] } };
const ok = runTests("deepClone", (v) => deepClone(v), [
  { input: { a: 1, b: 2 }, expected: { a: 1, b: 2 } },
  { input: [1, [2, 3]], expected: [1, [2, 3]] },
  { input: nested, expected: { a: 1, b: { c: [1, 2, { d: 3 }] } } },
  { input: null, expected: null },
]);

const clone = deepClone(nested);
clone.b.c[2].d = 999;
const independent = !deepEqual(nested.b.c[2], { d: 999 });
console.log(
  independent ? "✓ clone is independent" : "✗ clone shares references!",
);

process.exit(ok && independent ? 0 : 1);
