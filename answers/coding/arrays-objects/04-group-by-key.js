/**
 * 04 — Group array of objects by a key
 * Run: node 04-group-by-key.js
 *
 * groupBy([{type:'a',v:1},{type:'b',v:2},{type:'a',v:3}], 'type')
 * => { a: [{type:'a',v:1},{type:'a',v:3}], b: [{type:'b',v:2}] }
 */

const { runTests } = require("./test-utils");

/**
 * @param {Record<string, unknown>[]} items
 * @param {string} key
 * @returns {Record<string, Record<string, unknown>[]>}
 */
function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const k = String(item[key]);
    (acc[k] ??= []).push(item);
    return acc;
  }, {});
}

const ok = runTests("groupBy", ({ items, key }) => groupBy(items, key), [
  {
    input: {
      items: [
        { type: "fruit", name: "apple" },
        { type: "veg", name: "carrot" },
        { type: "fruit", name: "banana" },
      ],
      key: "type",
    },
    expected: {
      fruit: [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "banana" },
      ],
      veg: [{ type: "veg", name: "carrot" }],
    },
  },
  {
    input: { items: [{ id: 1, status: "open" }], key: "status" },
    expected: { open: [{ id: 1, status: "open" }] },
  },
  { input: { items: [], key: "x" }, expected: {} },
]);

process.exit(ok ? 0 : 1);
