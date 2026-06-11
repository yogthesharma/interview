/**
 * 17 — Parse simple CSV string into array of objects (header row + data rows)
 * Run: node 17-parse-csv.js
 *
 * No quoted commas — keep it simple:
 * "name,age\nAnn,30\nBob,25" => [{ name: 'Ann', age: '30' }, { name: 'Bob', age: '25' }]
 */

const { runTests } = require("./test-utils");

/**
 * @param {string} csv
 * @returns {Record<string, string>[]}
 */
function parseCsv(csv) {
  const lines = csv.trim().split("\n");
  if (lines.length === 0) return [];
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
  });
}

const ok = runTests("parseCsv", (csv) => parseCsv(csv), [
  {
    input: "name,age\nAnn,30\nBob,25",
    expected: [
      { name: "Ann", age: "30" },
      { name: "Bob", age: "25" },
    ],
  },
  {
    input: "id\n1",
    expected: [{ id: "1" }],
  },
  {
    input: "a,b,c\n1,2,3",
    expected: [{ a: "1", b: "2", c: "3" }],
  },
]);

process.exit(ok ? 0 : 1);
