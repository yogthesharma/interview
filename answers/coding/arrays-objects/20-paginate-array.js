/**
 * 20 — In-memory pagination on an array
 * Run: node 20-paginate-array.js
 *
 * paginate([1,2,3,4,5], { page: 2, pageSize: 2 })
 * => { data: [3,4], page: 2, pageSize: 2, total: 5, totalPages: 3 }
 *
 * page is 1-based. Empty page => data: []
 */

const { runTests } = require("./test-utils");

/**
 * @param {unknown[]} items
 * @param {{ page: number, pageSize: number }} options
 * @returns {{ data: unknown[], page: number, pageSize: number, total: number, totalPages: number }}
 */
function paginate(items, { page, pageSize }) {
  const total = items.length;
  const totalPages = pageSize > 0 ? Math.ceil(total / pageSize) : 0;
  const start = (page - 1) * pageSize;
  const data = start >= total ? [] : items.slice(start, start + pageSize);
  return { data, page, pageSize, total, totalPages };
}

const ok = runTests(
  "paginate",
  ({ items, options }) => paginate(items, options),
  [
    {
      input: { items: [1, 2, 3, 4, 5], options: { page: 2, pageSize: 2 } },
      expected: { data: [3, 4], page: 2, pageSize: 2, total: 5, totalPages: 3 },
    },
    {
      input: { items: [1, 2, 3], options: { page: 1, pageSize: 10 } },
      expected: {
        data: [1, 2, 3],
        page: 1,
        pageSize: 10,
        total: 3,
        totalPages: 1,
      },
    },
    {
      input: { items: [1, 2, 3], options: { page: 5, pageSize: 2 } },
      expected: { data: [], page: 5, pageSize: 2, total: 3, totalPages: 2 },
    },
    {
      input: { items: [], options: { page: 1, pageSize: 5 } },
      expected: { data: [], page: 1, pageSize: 5, total: 0, totalPages: 0 },
    },
  ],
);

process.exit(ok ? 0 : 1);
