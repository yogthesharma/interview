/**
 * 06 — Flatten nested object with dot keys
 * Run: node 06-flatten-object.js
 *
 * { a: 1, b: { c: 2, d: { e: 3 } } } => { a: 1, 'b.c': 2, 'b.d.e': 3 }
 */

const { runTests } = require("./test-utils");

/**
 * @param {Record<string, unknown>} obj
 * @param {string} [prefix]
 * @returns {Record<string, unknown>}
 */
function flattenObject(obj, prefix = "") {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, path));
    } else {
      result[path] = value;
    }
  }

  return result;
}

const ok = runTests("flattenObject", (obj) => flattenObject(obj), [
  {
    input: { a: 1, b: { c: 2, d: { e: 3 } } },
    expected: { a: 1, "b.c": 2, "b.d.e": 3 },
  },
  { input: { x: { y: { z: 1 } } }, expected: { "x.y.z": 1 } },
  { input: {}, expected: {} },
  {
    input: { flat: true, nested: { a: 1 } },
    expected: { flat: true, "nested.a": 1 },
  },
]);

process.exit(ok ? 0 : 1);
