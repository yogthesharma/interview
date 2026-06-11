/**
 * Shared test helpers — HackerRank-style runner
 */

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((item, i) => deepEqual(item, b[i]));
  }

  if (typeof a === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((k) => deepEqual(a[k], b[k]));
  }

  return false;
}

/**
 * @param {string} name
 * @param {(input: unknown) => unknown} fn - receives single input value (or use wrapper)
 * @param {{ input: unknown, expected: unknown, label?: string }[]} cases
 */
function runTests(name, fn, cases) {
  console.log(`\n=== ${name} ===`);
  let passed = 0;

  cases.forEach((tc, i) => {
    const label = tc.label ?? `Case ${i + 1}`;
    let result;
    let error;

    try {
      result = fn(tc.input);
    } catch (e) {
      error = e;
    }

    if (error) {
      console.log(`✗ ${label} — threw: ${error.message}`);
      return;
    }

    const ok = deepEqual(result, tc.expected);
    if (ok) {
      passed++;
      console.log(`✓ ${label}`);
    } else {
      console.log(`✗ ${label}`);
      console.log("  expected:", tc.expected);
      console.log("  got:     ", result);
    }
  });

  console.log(`\n${passed}/${cases.length} passed`);
  return passed === cases.length;
}

module.exports = { deepEqual, runTests };
