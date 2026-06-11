/**
 * 07 — Slugify: lowercase, spaces → hyphens, strip non-alphanumeric (keep hyphens)
 * Run: node 07-slugify.js
 *
 * slugify("Hello World!") => "hello-world"
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} str
 * @returns {string}
 */
function slugify(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .join("-");
}

const ok = runTests("slugify", (s) => slugify(s), [
  { input: "Hello World!", expected: "hello-world" },
  { input: "  Foo   Bar  ", expected: "foo-bar" },
  { input: "TypeScript & Node.js", expected: "typescript-nodejs" },
  { input: "already-slug", expected: "already-slug" },
  { input: "---", expected: "" },
]);

process.exit(ok ? 0 : 1);
