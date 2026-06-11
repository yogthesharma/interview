/**
 * Shared test helpers — sync + async runners
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

function runTests(name, fn, cases) {
  console.log(`\n=== ${name} ===`);
  let passed = 0;

  cases.forEach((tc, i) => {
    const label = tc.label ?? `Case ${i + 1}`;
    let result;
    let error;

    try {
      let ok;
      if (tc.check) {
        ok = tc.check(tc.input);
      } else {
        result = fn(tc.input);
        ok = deepEqual(result, tc.expected);
      }
      if (ok) {
        passed++;
        console.log(`✓ ${label}`);
      } else {
        console.log(`✗ ${label}`);
        if (tc.expected !== undefined) console.log("  expected:", tc.expected);
        if (result !== undefined) console.log("  got:     ", result);
      }
    } catch (e) {
      console.log(`✗ ${label} — threw: ${e.message}`);
    }
  });

  console.log(`\n${passed}/${cases.length} passed`);
  return passed === cases.length;
}

async function runAsyncTests(name, fn, cases) {
  console.log(`\n=== ${name} ===`);
  let passed = 0;

  for (let i = 0; i < cases.length; i++) {
    const tc = cases[i];
    const label = tc.label ?? `Case ${i + 1}`;

    try {
      let ok;
      if (tc.check) {
        ok = await tc.check(tc.input);
      } else {
        const result = await fn(tc.input);
        ok = deepEqual(result, tc.expected);
      }
      if (ok) {
        passed++;
        console.log(`✓ ${label}`);
      } else {
        console.log(`✗ ${label}`);
        if (tc.expected !== undefined) console.log("  expected:", tc.expected);
      }
    } catch (e) {
      console.log(`✗ ${label} — threw: ${e.message}`);
    }
  }

  console.log(`\n${passed}/${cases.length} passed`);
  return passed === cases.length;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { deepEqual, runTests, runAsyncTests, sleep };
