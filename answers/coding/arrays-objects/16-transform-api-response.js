/**
 * 16 — Transform API response shape A → shape B (common interview pattern)
 * Run: node 16-transform-api-response.js
 *
 * Input:  { data: { users: [{ id: 1, profile: { first: 'Ann', last: 'Lee' } }] } }
 * Output: [{ id: 1, fullName: 'Ann Lee' }]
 */

const { runTests } = require("./test-utils");

/**
 * @param {{ data: { users: { id: number, profile: { first: string, last: string } }[] } }} apiResponse
 * @returns {{ id: number, fullName: string }[]}
 */
function transformUsers(apiResponse) {
  return apiResponse.data.users.map(({ id, profile }) => ({
    id,
    fullName: `${profile.first} ${profile.last}`,
  }));
}

const ok = runTests("transformUsers", (input) => transformUsers(input), [
  {
    input: {
      data: {
        users: [
          { id: 1, profile: { first: "Ann", last: "Lee" } },
          { id: 2, profile: { first: "Bob", last: "Kim" } },
        ],
      },
    },
    expected: [
      { id: 1, fullName: "Ann Lee" },
      { id: 2, fullName: "Bob Kim" },
    ],
  },
  {
    input: { data: { users: [] } },
    expected: [],
  },
  {
    input: {
      data: {
        users: [{ id: 99, profile: { first: "X", last: "Y" } }],
      },
    },
    expected: [{ id: 99, fullName: "X Y" }],
  },
]);

process.exit(ok ? 0 : 1);
