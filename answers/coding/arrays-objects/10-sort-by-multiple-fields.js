/**
 * 10 — Sort array of objects by multiple fields (priority left → right)
 * Run: node 10-sort-by-multiple-fields.js
 *
 * sortBy(users, ['department', 'name'])
 * => sort by department asc, then name asc within same department
 */

const { runTests } = require("./test-utils");

/**
 * @param {Record<string, unknown>[]} items
 * @param {string[]} fields
 * @returns {Record<string, unknown>[]}
 */
function sortByMultipleFields(items, fields) {
  return [...items].sort((a, b) => {
    for (const field of fields) {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
    }
    return 0;
  });
}

const ok = runTests(
  "sortByMultipleFields",
  ({ items, fields }) => sortByMultipleFields(items, fields),
  [
    {
      input: {
        items: [
          { name: "Bob", dept: "eng" },
          { name: "Alice", dept: "sales" },
          { name: "Anna", dept: "eng" },
        ],
        fields: ["dept", "name"],
      },
      expected: [
        { name: "Anna", dept: "eng" },
        { name: "Bob", dept: "eng" },
        { name: "Alice", dept: "sales" },
      ],
    },
    {
      input: {
        items: [{ x: 2 }, { x: 1 }, { x: 1, y: 0 }],
        fields: ["x", "y"],
      },
      expected: [{ x: 1, y: 0 }, { x: 1 }, { x: 2 }],
    },
    { input: { items: [], fields: ["a"] }, expected: [] },
  ],
);

process.exit(ok ? 0 : 1);
