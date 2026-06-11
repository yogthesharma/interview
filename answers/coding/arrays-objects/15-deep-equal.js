/**
 * 15 — Deep compare two values for equality (objects + arrays)
 * Run: node 15-deep-equal.js
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function deepEqualObjects(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((item, i) => deepEqualObjects(item, b[i]));
  }
  if (typeof a === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((k) => deepEqualObjects(a[k], b[k]));
  }
  return false;
}

const ok = runTests("deepEqualObjects", ({ a, b }) => deepEqualObjects(a, b), [
  { input: { a: { x: 1 }, b: { x: 1 } }, expected: true },
  { input: { a: { x: 1 }, b: { x: 2 } }, expected: false },
  { input: { a: [1, [2, 3]], b: [1, [2, 3]] }, expected: true },
  { input: { a: [1, 2], b: [2, 1] }, expected: false },
  { input: { a: null, b: null }, expected: true },
  {
    input: { a: { a: 1, b: { c: 2 } }, b: { b: { c: 2 }, a: 1 } },
    expected: true,
  },
]);

process.exit(ok ? 0 : 1);
